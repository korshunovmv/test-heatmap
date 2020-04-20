export const inn = {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/,
            /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    guide: false
};

export const account = {
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/,
        '.', /\d/, /\d/, /\d/, '.', /\d/,
        '.', /\d/, /\d/, /\d/, /\d/,
        '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    guide: false
};

export const kpp = {
    mask: [/\d/, /\d/, /\d/, /\d/, /[A-Za-z\d]/, /[A-Za-z\d]/, /\d/, /\d/, /\d/],
    guide: false
};

export const zkxDocumentId = {
    mask: [
        /\d/, /\d/, /[а-яА-Я]/, /[а-яА-Я]/,
        /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/
    ]
};

export const zjkyTypeMask = {
    mask: [
        /\d/, /\d/, /[А-Яа-я]/, /[А-Яа-я]/,
        /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
};

export const singlePersonalAccount = {
    mask: [
        /\d/, /\d/, /[А-Яа-я]/, /[А-Яа-я]/,
        /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
};

export const KBK = {
    mask: () => {
        const mask = [];

        for (let i = 0; i < 20; i++) {
            mask.push(/[0-9]/);
        }

        return mask;
    },
    guide: false
};

export const OKTMO = {
    mask: () => {
        const mask = [];
        for (let i = 0; i < 8; i++) {
            mask.push(/[0-9]/);
        }
        return mask;
    },
    guide: false
};


export const UIN = {
    mask: function (rawValue: string): RegExp[] {
        const rawValueLength = rawValue.length ? rawValue.length : 0;
        const mask = [];

        for (let i = 0; i < rawValueLength; i++) {
            mask.push(/[а-яА-Яa-zA-Z0-9]/);
        }

        return mask;
    },
    guide: false
};

export const UID = {
    mask: (rawValue: string): RegExp[] => {
        let numbersCount = 16;
        let symbolsCount = 9;
        const mask = [];
        while (numbersCount--) {
            mask.push(/\d/);
        }
        while (symbolsCount--) {
            mask.push(/[А-Яа-яёЁa-zA-Z0-9\/]/);
        }
        return mask;
    },
    guide: false
};

export const BIC = {
    mask: (rawValue: string): RegExp[] => {
        const mask = [];

        for (let i = 0; i < 50; i++) {
            mask.push(/[а-яА-Я0-9\s]/);
        }

        return mask;
    },
    guide: false
};

export const zkxPeriod = {
    mask: [
        /[01]/, /\d/, '.', /\d/, /\d/, /\d/, /\d/
    ]
};

export const amountNdsMask = {
    mask(val) {
        const integerPartMaxLength = /^0/.test(val) ? 1 : 2;
        let integerPart = '';

        for (let i = 0; i < integerPartMaxLength; ++i) {
            if (/\d/.test(val[i])) {
                integerPart += val[i];
                continue;
            }
            if (/\,|\./.test(val[i])) {
                break;
            }
        }

        const integerPartLength = integerPart.length;

        const maskPattern = Array(integerPartLength)
            .fill(null)
            .map(() => /\d/);

        maskPattern.push(/,/, /\d/, /\d/);

        return maskPattern;
    },
    guide: false
};

export function getAmountMask({
    integerPartL = 13,
    fractionalPartL = 2
} = {}) {
    return {
        mask(val) {
            const partL: number = 3;
            let integerPart = (val || '').replace(/(\.|,)(\d{0,})/g, '');
            integerPart = integerPart.replace(/ /g, '');
            const integerPartLength = integerPart.length > integerPartL ?
                integerPartL : integerPart.length;

            const maskPattern = [];
            const amountRatio: number = integerPartLength % partL || partL;
            let amountIndex: number = 0;

            for (let i = 0; i < integerPartLength; i++) {
                if (
                    i === amountIndex * partL + amountRatio &&
                    integerPartLength > partL
                ) {
                    maskPattern.push(' ');
                    amountIndex++;
                }

                maskPattern.push(!i ? /[1-9]/ : /\d/);
            }

            const fractionalPart: RegExp[] = (new Array(fractionalPartL)).fill(/\d/);

            if (fractionalPart.length) {
                maskPattern.push(/,|\./, ...fractionalPart);
            }

            return maskPattern;
        },
        guide: false
    };
}
