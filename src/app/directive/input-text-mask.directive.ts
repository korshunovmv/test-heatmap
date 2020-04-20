// tslint:disable
import { Directive, ElementRef, forwardRef, Input, Renderer2, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { createTextMaskInputElement } from 'text-mask-core/dist/textMaskCore';

@Directive({
    host: {
        '(input)': 'onInput($event.target.value)',
        '(blur)': '_onTouched()'
    },
    selector: '[uiTextMask]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputTextMaskDirective),
        multi: true
    }]
})
export class InputTextMaskDirective implements ControlValueAccessor, OnChanges {
    private textMaskInputElement: any;
    private inputElement: HTMLInputElement;

    // stores the last value for comparison
    private lastValue: any;

    @Input()
    uiTextMask = {
        mask: '',
        guide: true,
        placeholderChar: '_',
        pipe: undefined,
        keepCharPositions: false,
    };

    _onTouched = () => {};
    _onChange = (_: any) => {};

    constructor(private renderer: Renderer2, private element: ElementRef) {
    }

    ngOnChanges(changes) {
        if (changes && changes.uiTextMask && !changes.uiTextMask.firstChange && changes.uiTextMask.currentValue) {
            this.fillTextMaskInputElement();
        }
    }

    private setupMask() {
        if (this.element.nativeElement.tagName === 'INPUT' || this.element.nativeElement.tagName === 'TEXTAREA') {
            // `textMask` directive is used directly on an input element
            this.inputElement = this.element.nativeElement;
        } else {
            // `textMask` directive is used on an abstracted input element, `ion-input`, `md-input`, etc
            this.inputElement = this.element.nativeElement.getElementsByTagName('INPUT')[0];
            if (this.inputElement) {
                this.inputElement = this.element.nativeElement.getElementsByTagName('TEXTAREA')[0];
            }
        }

        this.fillTextMaskInputElement();
    }

    private fillTextMaskInputElement() {
        if (this.inputElement && this.uiTextMask) {
            this.textMaskInputElement = createTextMaskInputElement(
                Object.assign({inputElement: this.inputElement}, this.uiTextMask)
            );
        }
    }

    writeValue(value: any) {
        if (!this.inputElement) {
            this.setupMask();
        }
        this.lastValue = value;
        if (this.textMaskInputElement !== undefined && !Number.isNaN(value)) {
            this.textMaskInputElement.update(value);
        }
    }

    registerOnChange(fn: (value: any) => any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: () => any): void {
        this._onTouched = fn;
    }

    onInput(value) {
        if (!this.inputElement) {
            this.setupMask();
        }
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);

            // get the updated value
            value = this.inputElement.value;

            // check against the last value to prevent firing ngModelChange despite no changes
            if (this.lastValue !== value) {
                this.lastValue = value;
                this._onChange(value);
            }
        }
    }

    setDisabledState(isDisabled: boolean) {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }
}
