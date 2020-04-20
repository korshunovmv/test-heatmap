import { Component, OnInit, forwardRef, ViewChildren, AfterViewInit, QueryList, Input, OnDestroy, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { takeUntil, filter, distinctUntilChanged } from 'rxjs/operators';
import { Subject, fromEvent, timer } from 'rxjs';

import { sortBy as _sortBy } from 'lodash';

import { CustomFormControl } from '../custom-form-control';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SmsInputComponent),
    multi: true
};

const SMS_CODE_LENGTH = 4;

@Component({
    selector: 'app-sms-input',
    templateUrl: './sms-input.component.html',
    styleUrls: ['./sms-input.component.less'],
    providers: [
        CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
        { provide: CustomFormControl, useExisting: forwardRef(() => SmsInputComponent) }
    ],
})
export class SmsInputComponent implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor {
    @ViewChildren('myInput') inputComponents: QueryList<ElementRef<HTMLInputElement>>;

    form: FormGroup;
    private _activeControlIndex = 0;

    private set activeControlIndex(index: number) {
        if (index < 0) {
            this._activeControlIndex = 0;
        } else if (index >= SMS_CODE_LENGTH) {
            this._activeControlIndex = SMS_CODE_LENGTH - 1;
        } else {
            this._activeControlIndex = index;
        }
    }

    private get activeControlIndex() {
        return this._activeControlIndex;
    }

    get value(): string {
        return (this.digits.value as Array<{val: string}>).map(el => el.val).join('');
    }

    get activeControl(): FormControl {
        return (this.digits.controls[this.activeControlIndex] as FormGroup).controls.val as FormControl;
    }

    get digits(): FormArray {
        return this.form.get('digits') as FormArray;
    }

    @Input() set error(val: boolean) {
        this._error = val;
    }

    get error(): boolean {
        return this._error;
    }

    private _error: boolean;
    private unsubscribe$: Subject<void> = new Subject<void>();

    ngOnInit() {
        this.form = new FormGroup({
            digits: new FormArray([
                new FormGroup({
                    val: new FormControl('', Validators.required)
                }),
                new FormGroup({
                    val: new FormControl('', Validators.required)
                }),
                new FormGroup({
                    val: new FormControl('', Validators.required)
                }),
                new FormGroup({
                    val: new FormControl('', Validators.required)
                })
            ])
        });
    }

    onBackSpace(event: KeyboardEvent) {
        if (this.form.enabled) {
            event.preventDefault();
            event.stopImmediatePropagation();

            // очистить последнюю заполненную ячейку, если есть

            this.operateOnBackspace();
            this.setFocusToActiveItem();
        }
    }

    onPaste(event: ClipboardEvent) {
        const pasteValue = Array.from(event.clipboardData.items).filter((item) => item.kind === 'string')[0];
        if (pasteValue) {
            event.preventDefault();
            event.stopPropagation();

            pasteValue.getAsString((pasteString) => {
                const slicedString = pasteString.substring(0, 60);

                const remainingLength = SMS_CODE_LENGTH - this.activeControlIndex;
                const codeElemPattern = '[\\d]';
                let codeRegularString = remainingLength > 0 ? `(${codeElemPattern}{${remainingLength}})` : '';
                for (let i = remainingLength - 1; i > 0; i--) {
                    codeRegularString += `|(${codeElemPattern}{${i}})`;
                }
                const codeReg = new RegExp(codeRegularString, 'g');
                if (codeRegularString) {
                    const parsedCode = _sortBy(slicedString.match(codeReg), (code) => -code.length)[0];
                    if (parsedCode) {
                        parsedCode.split('').forEach((char) => {
                            this.operateOnChar(parseInt(char[0], 10));
                        });
                        this.setFocusToActiveItem();
                    }
                }
            });
        }
    }

    onArrow(event: KeyboardEvent) {
        const value = parseInt(this.activeControl.value, 10);
        switch (event.code) {
            case 'ArrowDown': {
                if (value >= 1) {
                    this.activeControl.patchValue(value - 1);
                } else if (value !== 0) {
                    this.activeControl.patchValue(0);
                }
            } break;
            case 'ArrowUp': {
                if (isNaN(value)) {
                    this.activeControl.patchValue(0);
                } else {
                    if (value < 9) {
                        this.activeControl.patchValue(value + 1);
                    }
                }
            } break;
            case 'ArrowLeft': {
                this.goBack();
            } break;
            case 'ArrowRight': {
                if (!isNaN(value)) {
                    this.goNext();
                }
            } break;
        }

        event.preventDefault();
        event.stopImmediatePropagation();
    }

    onSpace(event: KeyboardEvent) {
        const value = parseInt(this.activeControl.value, 10);
        if (!isNaN(value)) {
            this.goNext();
        }
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    onEnd(event: KeyboardEvent) {
        this.setFocusToItem(this.activeControlIndex = this.value.length - 1);
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    onHome(event: KeyboardEvent) {
        this.setFocusToItem(this.activeControlIndex = 0);
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    private goNext() {
        this.setFocusToItem(++this.activeControlIndex);
    }

    private goBack() {
        this.setFocusToItem(--this.activeControlIndex);
    }

    onLocalKeyDown(keyboardEvent: KeyboardEvent) {
        if (this.form.enabled) {
            const char = keyboardEvent.key;
            const isNumber = Number(char) >= 0 && Number(char) <= 9;

            if (char && isNumber) {
                keyboardEvent.preventDefault();
                keyboardEvent.stopPropagation();
                this.operateOnChar(parseInt(char, 10));
                this.setFocusToActiveItem();
            } else {
                // keyboardEvent.preventDefault();
                // keyboardEvent.stopPropagation();
            }
        }
    }

    private setFocusToItem(index: number) {
        const inputComponent = this.inputComponents.toArray()[index];
        if (inputComponent) {
            inputComponent.nativeElement.focus();
        }
    }

    setFocusToActiveItem() {
        this.setFocusToItem(this.activeControlIndex);
    }

    onFocus(event: FocusEvent, index: number) {
        if (this.activeControlIndex !== index) {
            event.preventDefault();
            event.stopPropagation();
            this.setFocusToActiveItem();
            timer(100).subscribe(() => {
                this.setFocusToActiveItem();
            });
        }
    }

    ngAfterViewInit() {
        this.digits.controls.forEach((formGroup: FormGroup) => {
            formGroup.controls.val.valueChanges
                .pipe(
                    distinctUntilChanged(),
                    takeUntil(this.unsubscribe$)
                )
                .subscribe(val => {
                    // val обращается в null, если в браузере firefox перетащить текст в инпут-поле
                    if (val === null) {
                        formGroup.controls.val.setValue('');
                    } else {
                        formGroup.controls.val.updateValueAndValidity({emitEvent: false});
                        this.onChangeCallback(this.value);
                    }
                });
        });

    // отлавливает нажатие клавиш для мобильного chrome на android
        this.inputComponents.toArray().forEach((inputComponent: ElementRef<HTMLInputElement>) => {
            fromEvent(inputComponent.nativeElement, 'textInput')
                .pipe(
                    filter(() => this.form.enabled),
                    takeUntil(this.unsubscribe$)
                )
                .subscribe((key: TextEvent) => {
                    key.preventDefault();
                    key.stopPropagation();

                    const char = key.data[0];
                    this.operateOnChar(parseInt(char, 10));
                    this.setFocusToActiveItem();
                });
        });

    }

    private operateOnChar(char: number) {
        // записать значение в последнюю пустую ячейку
        if (isFinite(char)) {
            this.activeControl.setValue(char);
            ++this.activeControlIndex;
        }
    }

    /**
     * Очистить последнюю заполненную ячейку, если есть
     */
    private operateOnBackspace() {
        // когда нажимаем Backspace index всегда должен быть больше 0
        if (this.activeControlIndex > 0) {

            const activeControlHasNotNumber = !Number.isInteger(this.activeControl.value);

            if (activeControlHasNotNumber) {
                --this.activeControlIndex;
            }

            this.activeControl.reset('');
        } else {
            this.activeControl.reset('');
        }
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    writeValue(value) {
        if (!value) {
            this.digits.patchValue([
                { val: '' },
                { val: '' },
                { val: '' },
                { val: '' }
            ]);

            this.activeControlIndex = 0;
        }
    }

    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

    setDisabledState(disabled: boolean): void {
        disabled ? this.form.disable()
            : this.form.enable();
    }

    setFocus() {
        this.inputComponents.toArray()[0].nativeElement.focus();
    }

    private onTouchedCallback: () => void = () => {};

    private onChangeCallback: (_: any) => void = () => {};

}
