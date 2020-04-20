import {
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostListener,
    Input, OnChanges,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    SimpleChanges,
    ViewChild,
    ChangeDetectorRef,
    AfterViewInit
} from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNumber } from 'util';

import createNumberMaskEx, { getAmountDefaultMask } from '../../util/create-number-mask-ex';
import { Utils } from '../../util';
import { CustomFormControl } from '../custom-form-control';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
};

const noop = () => {};

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'ui-input',
    templateUrl: './input.component.html',
    providers: [
        CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
        {
          provide: CustomFormControl,
          useExisting: forwardRef(() => InputComponent)
        }
    ],
    styleUrls: ['./input.component.less']
})
export class InputComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy, OnChanges {
    @ViewChild('localInput')
    loginInput: ElementRef;

    @ViewChild('placeholderRef')
    placeholderRef: ElementRef;

    @ViewChild('icon')
    icon: ElementRef;

    @Output() submit: EventEmitter<any> = new EventEmitter();
    @Output() onBlur: EventEmitter<any> = new EventEmitter();
    @Output() onFocus: EventEmitter<any> = new EventEmitter();
    @Output() onKeyDown: EventEmitter<any> = new EventEmitter();

    @Output() onKeyUp: EventEmitter<any> = new EventEmitter();
    @Output() onPaste: EventEmitter<any> = new EventEmitter();
    @Output() onDrop: EventEmitter<any> = new EventEmitter();
    @Output() onClear: EventEmitter<any> = new EventEmitter();
    @Output() onCustomIconClick: EventEmitter<void> = new EventEmitter();

    @Input() withIcon: boolean = false;
    @Input() formGroup: FormGroup;
    @Input() enabledDeletion: boolean = false;
    @Input() reactiveForm: boolean = false;
    @Input() disabled: boolean = false;
    @Input() dictionary: boolean = false;
    @Input() loginIcon: boolean = false;
    @Input() passwordIcon: boolean = false;
    @Input() togglePasswordIcon: boolean = false;
    @Input() percent: boolean = false;
    @Input() hint: string;
    @Input() hintLineCount: number;
    @Input() label: string;
    @Input() placeholder: string = '';
    @Input() error: boolean = false;
    @Input() withPlaceholderLabel: boolean = false;
    @Input() readonly: boolean = false;
    @Input() counter: boolean = false;
    @Input() preventPaste: boolean = false;
    @Input() maxlength: number;
    @Input() minLength: number;
    @Input() errors: Array<string>;
    @Input() customPlaceholder: string = '';
    @Input() required: boolean = false;
    @Input() currencyType: string = 'RUB';
    @Input() tooltip: string;
    @Input() customIcon: string;
    @Input() imgUrl: string;
    @Input() counterText: string;
    @Input()
    mask: any = {
        mask: function (rawValue: string): RegExp[] {
            const rawValueLength = rawValue.length ? rawValue.length : 0;
            const mask = [];

            for (let i = 0; i < rawValueLength; i++) {
                mask.push(/./);
            }

            return mask;
        }
    };

    @Input()
    set type(val: string) {
        if (val === 'amount' || val === 'currency' || val === 'RUB' || val === 'EUR' || val === 'USD') {
            this.mask = this.sumMask;
        } else if (val === 'integer' || val === 'number') {
            this.mask = this.integerMask;
        } else if (val === 'password') {
            this._inputType = 'password';
        } else if (val === 'limit') {
            this.mask = this.limitMask;
        } else if (val === 'phone') {
            this.mask = this.phoneMask;
        } else if (val === 'smsotp') {
            this.mask = this.smsotpMask;
        } else if (val === 'customerAccount') {
            this.mask = this.customerAccountMask;
        } else if (val === 'time') {
            this.mask = this.timeMask;
        }
        this._type = val;
    }

    get type(): string {
        return this._type;
    }

    get valueLength(): number {
        return this.value ? this.value.length : 0;
    }

    get hasIconClass(): boolean {
        return Boolean(this.icon) || Boolean(this.tooltip);
    }

    protected innerValue: any = '';
    private hostEvent: any = null;

    focus: boolean = false;
    _type: string;
    _inputType: string = 'text';
    visiblePassword = false;
    phoneMask: any = {
        mask: ['7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
        guide: true,
        modelClean: true,
        showMask: true
    };

    // sumMask: any = {
    //     mask: createNumberMaskEx({
    //         prefix: '',
    //         thousandsSeparatorSymbol: ' ',
    //         allowDecimal: true,
    //         decimalSymbols: ['\.', ','],
    //         decimalLimit: 2,
    //         integerLimit: 20,
    //         allowLeadingZeroes: true
    //     }),
    //     guide: false
    // };
    private _defaultMask: (string | RegExp)[];
    sumMask: any = {
        mask: (val, config) => {
            if ((config.previousConformedValue === '' || config.previousConformedValue === '0')
                && /[\.|\,]\d/.test(val) && parseFloat(val.replace(',', '.'))) {
                const point = val.indexOf(/\.|\,/);
                this._defaultMask = getAmountDefaultMask(val.slice(0, point)).map(x => x === ' ' ? ' ' : /\d/);
                this._defaultMask = this._defaultMask.concat([/[\.|\,]/, /\d/, /\d/]);
                return this._defaultMask;
            }

            const pos = --config.currentCaretPosition;

            if (/\./.test(val) || /\,/.test(val) || val[pos] === '.' || val[pos] === ',') {
                this._defaultMask = getAmountDefaultMask(val).map(x => x === ' ' ? ' ' : /\d/);
                this._defaultMask = this._defaultMask.concat([/[\.|\,]/, /\d/, /\d/]);
                return this._defaultMask;
            }

            return getAmountDefaultMask(val);
        },
        guide: false

    };

    integerMask: any = {
        mask: createNumberMaskEx({
            prefix: '',
            thousandsSeparatorSymbol: '',
            allowLeadingZeroes: true
        }),
        guide: false
    };

    limitMask: any = {
        mask: createNumberMaskEx({
            prefix: '',
            thousandsSeparatorSymbol: ' ',
            integerLimit: 6
        }),
        guide: false
    };

    smsotpMask: any = {
        mask: createNumberMaskEx({
            prefix: '',
            integerLimit: /* todo config.smsotpLength*/ 4,
            thousandsSeparatorSymbol: '',
            allowLeadingZeroes: true
        }),
        guide: false
    };

    customerAccountMask: any = {
        mask: createNumberMaskEx({
            prefix: '',
            integerLimit: 30,
            thousandsSeparatorSymbol: '',
            allowLeadingZeroes: true
        }),
        guide: false
    };

    timeMask: any = {
        mask: (val, config) => {
            // input starts with:       0 || 1
            // possible output:         01:__ || 02:__ || ... || 19:__
            const defaultTimeMask = [/[0-2]/, /[0-9]/, ':', /[0-5]/, /\d/];

            // input starts with:       2
            // possible output:         20:__ || 21:__ || 22:__ || 23:__
            if (config.previousConformedValue === '2' && config.currentCaretPosition === 2) {
                return [/[0-2]/, /[0-3]/, ':', /[0-5]/, /\d/];
            }

            // input starts with:       3-9
            // possible output:         03:__ || 04:__ || 05:__ || 06:__ || 07:__ || 08:__ || 09:__
            if (config.currentCaretPosition === 1 && /[3-9]/.test(val)) {
                return ['0', /\d/, ':', /[0-5]/, /\d/];
            }

            return defaultTimeMask;
        },
        guide: false
    };

    // Placeholders for the callbacks which are later providesd
    // by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    protected onChangeCallback: (_: any) => void = noop;

    // гетер на поле ngModel
    get value(): any {
        return this.innerValue;
    }

    @HostListener('click', ['$event'])
    private onClick(event: any): void {
        this.hostEvent = event;
        if (this.type === 'phone' && !this.value) {
            this.writeValue('7');
        }
    }

    @HostListener('document:click', ['$event'])
    private onDocumentClick(event: any): void {
        if (this.focus && event !== this.hostEvent) {
            this.focus = false;
        }
    }

    private onMouseUp(event: any): void {

    }

    // сетер на поле ngModel
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            if (this.mask === this.sumMask) {
                v = Utils.replaceWhiteSpaces(v);
            }
            this.onChangeCallback(v);
        }
    }

    get typeFindIcon() {
        return this.value ? 'search_cross' : 'search';
    }

    constructor(
        public elementRef: ElementRef,
        private renderer: Renderer2,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.cdr.detectChanges();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.hasOwnProperty('maxlength') && typeof this.value === 'string') {
            this.value = this.value.substr(0, this.maxlength);
        }
    }

    ngOnDestroy(): void {
    }

    // Set touched on blur  потеря фокуса
    onBlurInput(): void {
        if (this.mask === this.sumMask && this.value !== null && this.value !== undefined && this.value !== '') {
            this.value = Utils.toAmount(this.value).replace('.', ',');
        }
        this.onBlur.emit(this.value);
        this.onTouchedCallback();
    }

    onFocusInput(event: any): void {
        this.focus = true;
        this.onFocus.emit(event);
    }

    onFocusOut(event: any): void {
        if (this.mask === this.integerMask) {
            let result = null;
            if (this.value || isNumber(this.value)) {
                if (isNumber(this.value)) {
                    this.value = String(this.value);
                }
                this.value = this.value.replace(',', '.');
                result = this.value.replace(/\ /g, '');
            }
            this.writeValue(this.value === '' ? '' : result);
        }
        this.focus = false;
    }

    // From ControlValueAccessor interface
    writeValue(value: any): void {
        this.innerValue = value;
        if (this.mask === this.sumMask && this.innerValue !== null && this.innerValue !== undefined && this.innerValue !== ''
            && (/[\.|\,]\d/.test(this.innerValue) || typeof this.innerValue === 'number')) {
            this.innerValue = Utils.toAmount(this.innerValue).replace('.', ',');
        }
    }

    // From ControlValueAccessor interface
    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    setFocus() {
        // this.renderer.invokeElementMethod(this.loginInput.nativeElement, 'focus');
        this.loginInput.nativeElement.focus();
    }

    setFocusAndSetSelectionRangeInEnd() {
        let valueLength = 0;
        if (this.value) {
            valueLength = this.value.length;
        }
        this.setSelectionRange(valueLength, valueLength);
        this.setFocus();
    }

    setSelectionRange(selectionStart: number, selectionEnd) {
        this.loginInput.nativeElement.setSelectionRange(selectionStart, selectionEnd);
    }

    clickForImg(): void {
        if (this.value && this.focus) {
            this.clearValue();
        }
        if (this.onClear) {
            this.onClear.emit();
        }
        this.setFocus();
    }

    togglePassword() {
        this.visiblePassword = !this.visiblePassword;
        this.setFocus();
        this._inputType = this.visiblePassword ? 'text' : 'password';
    }

    // From ControlValueAccessor interface
    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

    // Обработка нажатия клавиши Enter
    onEnter(): void {
        if (this.submit) {
            this.submit.emit();
        }
    }

    onLocalKeyDown(event: KeyboardEvent): void {
        this.onKeyDown.emit(event);
    }

    onLocalKeyUp(event: KeyboardEvent): void {
        this.onKeyUp.emit(event);
    }

    onPasteEvent(event): void {
        if (this.preventPaste) {
            event.preventDefault();
        }
        if (this.onPaste) {
            this.onPaste.emit(event);
        }
    }

    onDropEvent(event): void {
        if (this.preventPaste) {
            event.preventDefault();
        }
        if (this.onDrop) {
            this.onDrop.emit(event);
        }
    }

    private handleClickOutside(): void {
        this.focus = false;
    }

    onChange(event): void {
        if (this.mask === this.sumMask) {
            this.value = this.value.replace('.', ',').replace(/^(0| )+(?!\.|\,|$)/, '');
        }
    }

    clearValue(): void {
        this.value = '';
        this.innerValue = '';
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    getPlaceholder() {
        if (this.focus) {
            return '';
        }
        return this.customPlaceholder || this.placeholder;
    }

    markAsError(): void {
        this.renderer.addClass(this.placeholderRef.nativeElement, 'error');
        this.renderer.addClass(this.loginInput.nativeElement, 'error');
    }

    markAsHasNotError(): void {
        this.renderer.removeClass(this.placeholderRef.nativeElement, 'error');
        this.renderer.removeClass(this.loginInput.nativeElement, 'error');
    }
}
