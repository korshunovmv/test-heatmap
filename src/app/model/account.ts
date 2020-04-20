import { Utils } from '../util';
import { Requisites } from './requisites';

export class Account {
    id: string;
    name: string;
    amount: number;
    blockagesAmount: number;
    holdAmount: number;
    availBalanceRub: number;
    currency: AccountCurrencyType;
    number: string;
    expDate: string;
    status: string;
    balance: any;
    availableBalance: any;
    startDate: Date;
    requisites: Requisites;
    hidden: boolean;
    category: string;
    order: number = 0;
    lastDateOp: Date;
    creditAmountRub: number = 0;
    debitAmountRub: number = 0;
    trendUp: boolean;
    trendDown: boolean;
    type: string;
    limitOverdraft: number = 0;
    registry2Amount: number = 0;
    customName: boolean = false;
    allowOutPayments: boolean;
    allowInPayments: boolean;
    allowLoanRepayment: boolean;
    mostActive: boolean;
    stateCode: 'reserve' | 'to_open' | 'closed' | 'open' | 'blocked';
    state: string;
    // for physical
    specType: string;
    pdfLink: string;
    tariffPlanLinkToRules: string;
    tariffPlanName: string;
    tariffPlanCode: TariffPlanCode;
    availableBonuses: number;
    accruedBonuses: number;
    bonusProgramState: string;
    nextAccrualDate: Date;
    lockedAmount: number;
    firstBonusCategory: string;
    secondBonusCategory: string;
    thirdBonusCategory: string;
    selectCategoryDate: Date;
    selectCategory: boolean;
    // @Inject(ChatWidget) private chatWidget
    incomeAmount: number;
    overdraft: boolean;
    onPerformanceAmount: number;

    // for productsV2
    productName: string;
    registryAmount: number;
    sbpDefault: boolean;

    get isRub(): boolean {
        return this.currency === 'RUB';
    }

    get isCurrency(): boolean {
        return !this.isRub;
    }

    get isCurrent(): boolean {
        return this.type === 'current';
    }

    get openedInDelo(): boolean {
        return this.requisites && this.requisites.bic === '046577743';
    }

    get isOpened(): boolean {
        return this.stateCode === 'open';
    }

    constructor(accountInfo: any, useProductsV2: boolean = false) {
        this.id = accountInfo.id;
        this.name = accountInfo.name;
        this.amount = accountInfo.amount;
        this.currency = accountInfo.currency;
        this.number = accountInfo.number;
        this.expDate = accountInfo.expDate;
        this.status = accountInfo.state;
        this.balance = accountInfo.balance;
        this.availableBalance = accountInfo.availableBalance;
        this.startDate = accountInfo.startDate ? Utils.parseDate(accountInfo.startDate) : null;
        this.requisites = accountInfo.requisites;
        this.hidden = accountInfo.hidden;
        this.category = accountInfo.category;
        this.order = accountInfo.order;
        this.lastDateOp = accountInfo.lastDateOp ? new Date(accountInfo.lastDateOp) : null;
        this.creditAmountRub = accountInfo.creditAmountRub;
        this.debitAmountRub = accountInfo.chargeAmountRub;
        this.availBalanceRub = accountInfo.availBalanceRub;
        this.type = accountInfo.type;
        this.blockagesAmount = accountInfo.blockagesAmount;
        this.holdAmount = accountInfo.holdAmount;
        this.limitOverdraft = accountInfo.limitOverdraft;
        this.registry2Amount = accountInfo.registry2Amount;
        this.customName = accountInfo.customName;
        this.allowInPayments = accountInfo.allowInPayments;
        this.allowOutPayments = accountInfo.allowOutPayments;
        this.allowLoanRepayment = accountInfo.allowLoanRepayment;
        this.specType = accountInfo.specType;
        this.mostActive = accountInfo.mostActive;
        this.pdfLink = accountInfo.pdfLink;
        this.stateCode = accountInfo.stateCode;
        this.state = accountInfo.state;
        this.incomeAmount = accountInfo.incomeAmount;
        this.tariffPlanLinkToRules = accountInfo.tariffPlanLinkToRules || '';
        this.tariffPlanName = accountInfo.tariffPlanName || '';
        this.tariffPlanCode = accountInfo.tariffPlanCode || '';
        this.availableBonuses = accountInfo.availableBonuses;
        this.accruedBonuses = accountInfo.accruedBonuses;
        this.bonusProgramState = accountInfo.bonusProgramState;
        this.nextAccrualDate = accountInfo.nextAccrualDate ? new Date(accountInfo.nextAccrualDate) : null;
        this.lockedAmount = accountInfo.lockedAmount;
        this.overdraft = accountInfo.overdraft;
        this.onPerformanceAmount = accountInfo.onPerformanceAmount;

        if (useProductsV2) {
            this.id = accountInfo.id.toString();
            this.productName = accountInfo.productName;
            this.registryAmount = accountInfo.registryAmount;
            this.availableBalance = {};
            this.availableBalance['RUB'] = accountInfo.availBalanceRub;
            this.availableBalance[this.currency] = accountInfo.availableBalance;
            this.balance = {};
            this.balance[this.currency] = accountInfo.balance;
            this.sbpDefault = accountInfo.sbpDefault;
            this.firstBonusCategory = accountInfo.bonusProgramGroup.firstCategory;
            this.secondBonusCategory = accountInfo.bonusProgramGroup.secondCategory;
            this.thirdBonusCategory = accountInfo.bonusProgramGroup.thirdCategory;
            this.selectCategoryDate = accountInfo.bonusProgramGroup.selectCategoryDate;
            // tslint:disable-next-line:max-line-length
            this.selectCategory = accountInfo.bonusProgramGroup.firstCategory !== '0' && accountInfo.bonusProgramGroup.secondCategory !== '0' && accountInfo.bonusProgramGroup.thirdCategory !== '0';
        }

        // заполняем тренд счета
        const creditAmountRub = this.creditAmountRub ? this.creditAmountRub : 0;
        const debitAmountRub = this.debitAmountRub ? this.debitAmountRub : 0;
        switch (true) {
            case (creditAmountRub > debitAmountRub):
                this.trendUp = true;
                this.trendDown = !this.trendUp;
                break;
            case (creditAmountRub < debitAmountRub):
                this.trendUp = false;
                this.trendDown = !this.trendUp;
                break;
            default:
                this.trendUp = false;
                this.trendDown = false;
                break;
        }
    }
}
export type TariffPlanCode = 'xSTART' | 'xROST' | 'xLIGA' | 'xDECISION' | 'xMO' | 'xDELOVOY';

// словарь иконок для каждого тарифа
export const tariffIcon: Record<TariffPlanCode, string> = {
    'xSTART': 'paperplane',
    'xROST': 'plane-1',
    'xLIGA': 'rocket',
    'xDECISION': 'plane-2',
    'xMO': 'helicopter',
    'xDELOVOY': 'budget_payments'
};

class TariffRule {
    priceDesc: string;
    contragent: string;
    contragentDesc: string;
    freeReplenishment: string;
    freeReplenishmentDesc: string;
    fivePercent: boolean;
}

export const    tariffRules: Record<TariffPlanCode, TariffRule> = {
    'xSTART': {
        priceDesc: '',
        contragent: '87 ₽',
        contragentDesc: 'за один платеж',
        freeReplenishment: 'до 50 000 ₽',
        freeReplenishmentDesc: 'сверх лимита 0,3%',
        fivePercent: false
    },
    'xROST': {
        priceDesc: '+2 месяца бесплатно',
        contragent: '15 бесплатно',
        contragentDesc: 'сверх пакета 25 ₽/шт',
        freeReplenishment: 'до 50 000 ₽',
        freeReplenishmentDesc: 'сверх лимита 0,2%',
        fivePercent: true
    },
    'xLIGA': {
        priceDesc: '+1 месяц бесплатно',
        contragent: 'Все бесплатно',
        contragentDesc: '',
        freeReplenishment: 'Бесплатно',
        freeReplenishmentDesc: 'без ограничений',
        fivePercent: true
    },
    'xDECISION': {
        priceDesc: '+1 месяц бесплатно',
        contragent: '100 бесплатно',
        contragentDesc: 'сверх пакета 25 ₽/шт',
        freeReplenishment: 'до 200 000 ₽',
        freeReplenishmentDesc: 'сверх лимита 0,1%',
        fivePercent: true
    },
    'xMO': {
        priceDesc: '+1 месяц бесплатно ',
        contragent: '50 бесплатно',
        contragentDesc: 'сверх пакета 25 ₽/шт',
        freeReplenishment: 'до 150 000 ₽',
        freeReplenishmentDesc: 'сверх лимита 0,2%',
        fivePercent: true
    },
    'xDELOVOY': {
        priceDesc: '+1 месяц бесплатно',
        contragent: '100 бесплатно',
        contragentDesc: 'сверх пакета 25 ₽/шт',
        freeReplenishment: 'до 200 000 ₽',
        freeReplenishmentDesc: 'сверх лимита 0,1%',
        fivePercent: true
    }
};

export type AccountCurrencyType = 'RUB' | 'USD' | 'EUR' | 'BYN' | 'CNY' | 'CHF' | 'GBP';
