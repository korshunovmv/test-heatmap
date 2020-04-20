import { Component, Input, OnInit } from '@angular/core';
import { Utils } from '../../util';

@Component({
    selector: 'ui-amount',
    templateUrl: './amount.component.html',
    styleUrls: ['./amount.component.less']
})
export class AmountComponent implements OnInit {
    localAmount: string;
    decimalPartAmount: string;
    signAmount: string = '';
    innerValue: any;
    isPositive: boolean = false;
    isNegative: boolean = false;

    @Input() sign: string = '';
    @Input() minus: boolean = false;
    @Input() currency: any;
    @Input() isBolding: boolean = true;
    @Input() useEmptyString: boolean = false;
    @Input() displayDecimal: boolean = true;
    @Input() noColorize: boolean = false;           // Не раскрашивать
    @Input() minusSign: string = '-';
    /**
     * Режим вывода:
     * - положительные суммы и ноль выводятся без знака
     * - отрицательные со знаком
     */
    @Input() showSign: boolean = false;
    /**
     * Режим вывода:
     * - положительные суммы и ноль выводятся без знака
     * - отрицательные со знаком
     */
    @Input() naturalSign: boolean = false;

    @Input() divider: string = ',';

    // сетер на поле ngModel
    @Input() set value(v: any) {
        this.innerValue = v;
        this.signAmount = this.sign;
        this.ngOnInit();
    }

    get noColorizeClass(): string {
        return this.noColorize ? 'no-colorize' : '';
    }

    constructor() {
    }

    ngOnInit() {
        // todo
        const amountDecimal = Utils.toDecimal(this.innerValue) || 0;
        this.isPositive = amountDecimal > 0;
        this.isNegative = amountDecimal < 0;
        if (this.naturalSign) {
            this.minus = true;
            if (amountDecimal < 0) {
                this.signAmount = this.minusSign;
            } else {
                this.signAmount = '';
            }
        } else {
            if (this.showSign) {
                switch (false) {
                    case (amountDecimal < 0):
                        this.signAmount = '+';
                        break;
                    case (amountDecimal > 0):
                        this.signAmount = this.minusSign;
                        break;
                }
            }
        }
        let amountText: string = Utils.toAmount(Math.abs(amountDecimal));
        if (!amountText || (amountDecimal <= 0 && !this.minus)) {
            amountText = '0.00';
            this.signAmount = '';
        }
        const amountArr: Array<string> = amountText.split('.');
        this.localAmount = amountArr[0];
        this.decimalPartAmount = amountArr[1];

        if (this.useEmptyString && amountText === '0.00') {
            this.localAmount = '';
            this.decimalPartAmount = '';
            this.currency = '';
        }
        this.checkDivider();
    }

    private checkDivider() {
        if (typeof this.divider !== 'string' || !this.divider) {
            this.divider = ',';
        }
    }
}
