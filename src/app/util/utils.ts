import { HOLIDAYS } from '../constants/holidays';

import { FormGroup, FormArray } from '@angular/forms';

export class Utils {
    static currentDate = new Date();

    /**
     * Возвращает смещение часового пояса относительно часового пояса UTC в милисекундах для текущей локали
     */
    static GetTimezoneOffsetMillis(): string {
        return String(-(new Date()).getTimezoneOffset() * 60 * 1000);
    }

    /**
     * Генерация ID для элементов форм
     * @returns {string}
     */
    static generateId(): string {
        return Math.random().toString(36).substring(2);
    }

    /**
     * 3 456 23.23
     * Конвертирует строку в число
     * Всегда возвращает число или <def> в случае невозможности преобразования, никаких null и волшебных NaN не возвращается
     * Это гарантирует простой и понятный код без лишних проверок
     * @param amount string | number
     * @param def number | any
     * @return number | def
     */
    static toDecimal(amount: any, def: number = 0): number {
        // NOTE: двойное равно == null для проверки на undefined и т.п.
        if (amount == null || amount === '') {
            return def;
        }
        if (typeof amount === 'number') {
            return amount;
        }
        let val = amount.replace(',', '.').replace(/\s*/g, '');
        val = parseFloat(val);
        return isNaN(val) ? def : val;
    }

    static replaceWhiteSpaces(amount: string): string {
        /** Выражение проверяет, есть ли символы перед запятой */
        const HAS_CHARACTERS_BEFORE_COMMON: RegExp = /\d{1,},/;

        /** Выражение проверяет, есть ли символы после запятой */
        const HAS_CHARACTERS_AFTER_COMMON: RegExp = /,\d{1,}/;

        let newValue = amount;

        if (!amount.match(HAS_CHARACTERS_BEFORE_COMMON)) {
            // если amount = ',123456' - т.е. перед запятой нет символов - подставляем 0,123456
            newValue = newValue.replace(/\d{0,},/, '0,');
        }

        if (!amount.match(HAS_CHARACTERS_AFTER_COMMON)) {
            // если amount = '123456,' - т.е. после запятой нет символов - подставляем 123456,00
            newValue = newValue.replace(/,\d{0,}/, ',00');
        }
        return newValue.replace(/ /g, '').replace(',', '.');
    }

    static toAmount(amount: string | number, fixed: number = 2): string {
        // NOTE: двойное равно == null для проверки на undefined и т.п.
        if (amount == null || amount === '') {
            return '';
        }
        const newAmount = Utils.toDecimal(amount);
        return newAmount.toFixed(fixed).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
    }

    /**
     * @description check equality of dates
     * @static
     * @param {Date} date1
     * @param {Date} date2
     * @returns {boolean} dates are equal
     */
    static datesAreEqual(date1: Date, date2: Date): boolean {
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
    }

    static mayBeDatesAreEqual(date1: Date | null, date2: Date | null): boolean {
        return (date1 == null && date2 == null) ||
            (date1 != null && date2 != null && Utils.datesAreEqual(date1, date2));
    }

    static ddmmyyyy(dateIn: Date): string {
        const yyyy = dateIn.getFullYear();
        const mm = dateIn.getMonth() < 9 ?
            '0' + (dateIn.getMonth() + 1) :
            (dateIn.getMonth() + 1); // getMonth() is zero-based
        const dd = dateIn.getDate() < 10 ? '0' + dateIn.getDate() : dateIn.getDate();

        return String(dd + '.' + mm + '.' + yyyy); // Leading zeros for mm and dd
    }

    static yyyymmdd(dateIn: Date): string {
        if (!dateIn) {
            return null;
        }
        const yyyy = dateIn.getFullYear();
        const mm = dateIn.getMonth() < 9 ?
            '0' + (dateIn.getMonth() + 1) :
            (dateIn.getMonth() + 1); // getMonth() is zero-based
        const dd = dateIn.getDate() < 10 ? '0' + dateIn.getDate() : dateIn.getDate();

        return String(yyyy + '-' + mm + '-' + dd); // Leading zeros for mm and dd
    }


    /**
     * Проверяем, содержится ли дата в интервале
     */
    static dateIsInInterval(from: Date, to: Date, value: Date): boolean {
        return from.getTime() <= value.getTime() && value.getTime() <= to.getTime();
    }

    static daysBetween(startDate: Date, endDate: Date): number {
        const date1 = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const date2 = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());

        return Math.ceil(timeDiff / (86400000));
    }

    static startDay(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    /**
     * Возвращаем первое число месяца для переданной даты
     *
     * @param date {Date}
     */
    static monthStart(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    static plusDays(date: Date, count: number): Date {
        return new Date(date.getTime() + count * (86400000));
    }

    static isHoliday(date: Date | string): boolean {
        const _date = new Date(date);
        const dateYear = _date.getFullYear();
        const monthsList = HOLIDAYS[dateYear];
        if (monthsList) {
            const month = _date.getMonth() + 1;
            const daysList = monthsList[month];
            return daysList ? daysList.includes(_date.getDate()) : false;
        }
        return false;
    }

    static minusDays(date: Date, count: number): Date {
        return new Date(date.getTime() - count * (86400000));
    }

    static plusMonth(date: Date, count: number): Date {
        const resultDate = new Date(date);

        resultDate.setDate(1);
        resultDate.setMonth(date.getMonth() + count);

        return resultDate;
    }

    static minusSeconds(date: Date, count: number): Date {
        return new Date(date.getTime() - count * 1000);
    }

    static minusMonth(date: Date, count: number): Date {
        return new Date(new Date().setMonth(date.getMonth() - count));
    }

    static addYear(date: Date, count: number): Date {
        const newDate = new Date();
        const changingYear: number = date.getFullYear();
        return new Date(newDate.setFullYear(changingYear + count));
    }

    static parseDate(strDate: string | any): Date {
        if (!strDate) {
            return null;
        }

        if (strDate.length === 10) {
            return new Date(strDate.replace(/(\d{2})\.(\d{2})\.(\d{4})/g, '$3-$2-$1'));
        }

        return new Date(strDate);
    }

    /**
     * Вычисление номера недели в году согласно ISO-8601
     * @static
     * @param {Date} date - дата
     * @returns {number} - номер недели в году
     * @memberof Utils
     */
    static getWeekNumber(date: Date): number {
        // tslint:disable-next-line:max-line-length
        return Math.ceil((new Date(date).valueOf() - new Date(date.getFullYear(), 0, 1).valueOf()) / (3600000 * 24 * 7));
    }

    /**
     * Получение дат дней недели для выбранной даты,
     * нужно для календаря чтобы выводить даты под соответсвующими днями неделями
     * @static
     * @param {Date} date - дата, в неделе которой нужно получить даты дней
     * @returns {{ date: Date; number: number }[]} - массив дней недели
     * @memberof Utils
     */
    static getWeekDays(date: Date): { date: Date; number: number }[] {
        const days = [];
        const month = date.getMonth();

        for (let day = 0; day < 7; day++) {
            if (date.getUTCDay() === day && date.getMonth() === month) {
                days.push({
                    date: date,
                    number: date.getDate()
                });
                date = Utils.plusDays(date, 1);
            } else {
                days.push(null);
            }
        }

        return days;
    }

    /**
     *
     * @param {string} phone [description]
     */
    static maskedPhone(phone: string): string {
        if (!phone) {
            return '';
        }

        return phone.replace(/\s*/g, '')
            .replace(/\b\D*/g, '')
            .replace(/([-+]?\d)(\d{3})(\d)(\d{3})(\d*)/g,
                (a, g1, g2, g3, g4, g5) => `${g1} ${g2} ${g3} *** ${g5}`
            );


    }

    static phonesToMaskedList(phones: string): Array<string> {
        const phoneList = phones.split(',');

        // tslint:disable-next-line:forin
        for (const phoneIndx in phoneList) {
            if (phoneList[phoneIndx] && phoneList[phoneIndx].search(/\*/) === -1) {
                phoneList[phoneIndx] = Utils.maskedPhone(phoneList[phoneIndx]);
            }
        }

        return phoneList;
    }

    static removeFromArray<T>(arr: Array<T>, val: T): void {
        const idx = arr.indexOf(val);

        if (idx !== -1) {
            arr.splice(idx, 1);
        }
    }

    static removeFromArrayByFilter<T>(arr: Array<T>, filter: (val: T, index: number, obj: T[]) => boolean): void {

        const existElements = arr.filter(filter);

        for (const element of existElements) {
            Utils.removeFromArray(arr, element);
        }
    }

    static toggleMore(parts: any[], allRows: any[], stepCount: number, toggle: any, show?: boolean): ToggleMore {
        let resultParts = [];
        let resultToggle = toggle;

        if (show) {
            const startIndex = parts.length;
            const endIndex = allRows.length - startIndex >= stepCount
                ? startIndex + stepCount
                : allRows.length;
            const newParts = allRows.slice(startIndex, endIndex);
            resultParts = parts.concat(newParts);
            if (allRows.length - startIndex <= stepCount) {
                resultToggle = false;
            }
        } else {
            resultParts = allRows.slice(0, stepCount);
            resultToggle = true;
        }

        return {
            parts: resultParts,
            toggle: resultToggle
        };
    }

    static formatPhone(phone: string): string {
        phone = phone.replace(/[^[0-9]]*/g, '');
        const codeCountry = phone.length - 10;
        let result = '+' + (codeCountry > 0 ? '_'.repeat(codeCountry) : 7) + ' (___) ___-__-__';
        phone.split('').forEach(item => {
            result = result.replace('_', item);
        });

        return result;
    }

    static getDateToday() {
        return Utils.ddmmyyyy(Utils.currentDate);
    }

    static getDateYesterday() {
        return Utils.ddmmyyyy(Utils.minusDays(Utils.currentDate, 1));
    }

    static getWeekPeriod() {
        return Utils.ddmmyyyy(Utils.minusDays(Utils.currentDate, 6)) + ' - ' + Utils.ddmmyyyy(Utils.currentDate);
    }

    static getMonthPeriod() {
        const start = Utils.monthStart(Utils.currentDate);
        return Utils.ddmmyyyy(start) + ' - ' + Utils.ddmmyyyy(Utils.currentDate);
    }

    static getMonthName(numberOfMonth, months) {
        return (numberOfMonth === 0 ? months[12] : months[numberOfMonth]).toLowerCase();
    }

    static getLastMonthPeriod() {
        const start = new Date(Utils.currentDate.getFullYear(), Utils.currentDate.getMonth() - 1, 1);
        const end = Utils.minusDays(Utils.plusMonth(start, 1), 1);
        return Utils.ddmmyyyy(start) + ' - ' + Utils.ddmmyyyy(end);
    }

    static getQuarterPeriod() {
        let end = Utils.getQuarter(Utils.currentDate).end;
        const today = new Date();
        end = end.getTime() > today.getTime() ? today : end;
        return Utils.ddmmyyyy(Utils.getQuarter(Utils.currentDate).start) + ' - ' + Utils.ddmmyyyy(end);
    }

    static getQuarterPeriodForFL() {
        const quarter = Utils.getQuarter(Utils.currentDate);
        return Utils.ddmmyyyy(quarter.start) + ' - ' + Utils.ddmmyyyy(Utils.getEndDateForQuarter(quarter.end));
    }

    static getYearPeriod() {
        return '01.01.' + Utils.currentDate.getFullYear() + ' - ' + '31.12.' + Utils.currentDate.getFullYear();
    }

    static getQuarter(date: Date) {
        const quarter = Utils.getPeriodByQuarter(date);
        const year = date.getFullYear();
        let start, end;
        switch (quarter) {
            case 1:
                start = new Date(year, 0, 1);
                end = new Date(year, 3, 0);
                break;
            case 2:
                start = new Date(year, 3, 1);
                end = new Date(year, 6, 0);
                break;
            case 3:
                start = new Date(year, 6, 1);
                end = new Date(year, 9, 0);
                break;
            case 4:
                start = new Date(year, 9, 1);
                end = new Date(year, 12, 0);
                break;
        }
        return {start, end};
    }

    static getEndDateForQuarter(date: Date) {
        const quarter = date.valueOf();
        const current = Utils.currentDate.valueOf();
        return quarter > current ? Utils.currentDate : date;
    }

    static getPeriodByQuarter(date: Date): number {
        if (date.getMonth() <= 2) {
            return 1;
        }
        if (date.getMonth() <= 5) {
            return 2;
        }
        if (date.getMonth() <= 8) {
            return 3;
        }
        return 4;
    }

    static getQuarterSymbol(n: number): string {
        switch (n) {
            case 1:
                return 'I';
            case 2:
                return 'II';
            case 3:
                return 'III';
            default:
                return 'IV';
        }
    }
}

interface ToggleMore {
    parts: any[];
    toggle: boolean;
}


export function leftpad(str, len, ch) {
    str = String(str);
    let i = -1;
    if (!ch && ch !== 0) {
        ch = ' ';
    }
    len = len - str.length;
    while (++i < len) {
        str = ch + str;
    }
    return str;
}

export function markFormAsTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
        const formItem = formGroup.get(key);
        if (formItem instanceof FormGroup) {
            markFormAsTouched(formItem);
        } else if (formItem instanceof FormArray) {
            formItem.markAsTouched();
            formItem.controls.forEach(item => {
                if (item instanceof FormGroup) {
                    markFormAsTouched(item);
                } else {
                    item.markAsTouched();
                }
            });
        } else {
            formItem.markAsTouched();
        }
    });
}
