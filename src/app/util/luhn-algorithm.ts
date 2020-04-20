/**
 * Информация о работе алгоритма взята с
 * https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9B%D1%83%D0%BD%D0%B0
 *
 * Упрощённый алгоритм
 * 1. Начиная с первого числа слева через 1 (то есть 1, 3, 5, 7, 9, …)
 * в случае, если количество цифр в номере четное (как в этом примере,
 * где оно равно 16), если же количество цифр нечетное, тогда, начиная
 * со второго числа через 1 (то есть 2, 4, 6, 8, …), делается проверка:
 * если 2·x > 9, то из произведения вычитается 9, иначе произведение 2·x оставляем без изменения.
 *
 * Например:
 * 4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  4
 * 8     12       4     2        2     6        10    12
 * 8     3        4     2        2     6        1     3
 *
 * 2. Затем все числа складываются.
 *
 * 8+5+3+1 + 4+6+2+2 + 2+2+6+4 + 1+4+3+4 = 57
 *
 * 3. Полученная сумма должна быть кратна 10 (40, 50, 60, 70, …)
 *
 * В примере: последняя цифра — контрольная. Для того, чтобы номер
 * был верен в соответствии с алгоритмом Луна, контрольная цифра должна быть равна 7.
 *
 * 4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  7
 * 8     12       4     2        2     6        10    12
 * 8     3        4     2        2     6        1     3
 * 8+5+3+1 + 4+6+2+2 + 2+2+6+4 + 1+4+3+7 = 60
 *
 * @param {string | number} cardNumber
 * @returns {boolean}
 */
export function isValidCardNumber(cardNumber: string | number): boolean {
    if (typeof cardNumber === 'number') {
        cardNumber = cardNumber.toString();
    }

    if (!isNumber(cardNumber)) {
        return false;
    }

   const sum = Array.from(cardNumber).reverse().reduce(
        (previousValue, currentValue, currentIndex) => {
            const currentNumber = parseInt(currentValue, 10);
            const modifiedNumber = isEven(currentIndex) ? modifyNumber(currentNumber) : currentNumber;
            return previousValue + modifiedNumber;
        }, 0
    );

    return sum && (sum % 10 === 0);
}

function isEven(num: number): boolean {
    return num % 2 !== 0;
}

function isNumber(num: any): boolean {
    return isFinite(parseInt(num.toString(), 10));
}

function modifyNumber(currentNumber: number): number {
    const temp = currentNumber * 2;
    return temp > 9 ? temp - 9 : temp;
}
