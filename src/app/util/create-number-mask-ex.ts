const dollarSign = '$';
const emptyString = '';
const comma = ',';
const period = '\.';
const minus = '-';
const minusRegExp = /-/;
const nonDigitsRegExp = /\D+/g;
const numberType = 'number';
const digitRegExp: any = /\d/;
const caretTrap = '[]';

export default function createNumberMaskEx({
                                               prefix = dollarSign,
                                               suffix = emptyString,
                                               includeThousandsSeparator = true,
                                               thousandsSeparatorSymbol = comma,
                                               allowDecimal = false,
                                               decimalSymbols = [period],
                                               decimalLimit = 2,
                                               requireDecimal = false,
                                               allowNegative = false,
                                               allowLeadingZeroes = false,
                                               integerLimit = null
                                           } = {}) {
    const prefixLength = prefix && prefix.length || 0;
    const suffixLength = suffix && suffix.length || 0;
    const thousandsSeparatorSymbolLength = thousandsSeparatorSymbol && thousandsSeparatorSymbol.length || 0;

    function numberMask(rawValue: any = emptyString, config: any) {

        const oldValue = config.previousConformedValue;
        const isDividerExist = checkDoubleDivider(rawValue, oldValue);

        if (isDividerExist) {
            rawValue = oldValue;
        }
        const rawValueLength = rawValue.length;

        if (
            rawValue === emptyString ||
            (rawValue[0] === prefix[0] && rawValueLength === 1)
        ) {
            return prefix.split(emptyString).concat([digitRegExp]).concat(suffix.split(emptyString));
        }

        let indexOfLastDecimal = -1;

        for (let i = 0; i < decimalSymbols.length; i++) {
            const findIndex = rawValue.lastIndexOf(decimalSymbols[i]);

            if (findIndex === -1) {
                continue;
            }

            indexOfLastDecimal = findIndex;

        }

        const hasDecimal = indexOfLastDecimal !== -1;
        const isNegative = (rawValue[0] === minus) && allowNegative;

        let integer;
        let fraction;
        let mask;

        // remove the suffix
        if (rawValue.slice(suffixLength * -1) === suffix) {
            rawValue = rawValue.slice(0, suffixLength * -1);
        }

        if (hasDecimal && (allowDecimal || requireDecimal)) {
            integer = rawValue.slice(rawValue.slice(0, prefixLength) === prefix ? prefixLength : 0, indexOfLastDecimal);

            fraction = rawValue.slice(indexOfLastDecimal + 1, rawValueLength);
            fraction = convertToMask(fraction.replace(nonDigitsRegExp, emptyString));
        } else {
            if (rawValue.slice(0, prefixLength) === prefix) {
                integer = rawValue.slice(prefixLength);
            } else {
                integer = rawValue;
            }
        }

        integer = integer.replace(nonDigitsRegExp, emptyString);

        if (integerLimit && typeof integerLimit === numberType) {
            integer = integer.slice(0, integerLimit);
        }

        if (!allowLeadingZeroes) {
            integer = String(Number(integer));
        }

        integer = (includeThousandsSeparator) ? addThousandsSeparator(integer, thousandsSeparatorSymbol) : integer;

        mask = convertToMask(integer);


        if ((hasDecimal && allowDecimal) || requireDecimal === true) {
            if (decimalSymbols.indexOf(rawValue[indexOfLastDecimal - 1]) !== -1) {
                mask.push(caretTrap);
            }

            const regExp = new RegExp('[' + decimalSymbols.join('') + ']');

            mask.push(regExp, caretTrap);

            if (fraction) {
                if (typeof decimalLimit === numberType) {
                    fraction = fraction.slice(0, decimalLimit);
                }

                mask = mask.concat(fraction);
            }

            if (requireDecimal === true && decimalSymbols.indexOf(rawValue[indexOfLastDecimal - 1]) !== -1) {
                mask.push(digitRegExp);
            }
        }

        if (prefixLength > 0) {
            mask = prefix.split(emptyString).concat(mask);
        }

        if (isNegative) {
            // If user is entering a negative number, add a mask placeholder spot to attract the caret to it.
            if (mask.length === prefixLength) {
                mask.push(digitRegExp);
            }

            mask = [minusRegExp].concat(mask);
        }

        if (suffix.length > 0) {
            mask = mask.concat(suffix.split(emptyString));
        }

        return mask;
    }

    return numberMask;
}

function checkDoubleDivider(newValue, oldValue) {
    let isDoubleDivider = false;
    if (newValue && oldValue) {
        isDoubleDivider = newValue.replace(/\D/g, '') === oldValue.replace(/\D/g, '')
            && newValue.length === oldValue.length + 1
            && oldValue.match(/[\.,]/g)
            && oldValue.match(/[\.,]/g).length === 1
            && newValue.match(/[\.,]/g)
            && newValue.match(/[\.,]/g).length === 2;
    }
    return isDoubleDivider;
}

function convertToMask(strNumber) {
    return strNumber
        .split(emptyString)
        .map((char) => digitRegExp.test(char) ? digitRegExp : char);
}

// http://stackoverflow.com/a/10899795/604296
function addThousandsSeparator(n, thousandsSeparatorSymbol) {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol);
}

export function getAmountDefaultMask(val): Array<string | RegExp> {
    // let cVal = parseInt(val.replace(/ /g, ''), 10).toString().length;
    let valNumber = '';
    for (let i = 0; i < val.length; ++i) {
        if (/[0-9]/.test(val[i])) {
            valNumber += val[i];
            continue;
        }
        if (/\,|\./.test(val[i])) {
            break;
        }
    }
    let cVal = valNumber.length;
    // *************
    // amount limit
    // ************

    // X XXX - default

    // X XXX XXX
    if (cVal > 3) {
        cVal++;
    }
    // X XXX XXX XXX
    if (cVal > 7) {
        cVal++;
    }
    // X XXX XXX XXX XXX
    if (cVal > 11) {
        cVal++;
    }
    // X XXX XXX XXX XXX XXX
    // if (cVal > 15) {
    //     cVal++
    // }

    // ***********

    const s = /\d|\,|\./;

    let mask = [s, s, s, ' ', s, s, s, ' ', s, s, s, ' ', s, s, s, ' ', s, s, s, ' ', s, s, s];

    mask = mask.splice(mask.length - cVal);

    if (mask[0] === ' ') {
        mask.unshift(/\d/);
    }
    return mask;
}
