import { AccountCurrencyType } from './account';

export class Card {

    id: number;
    name: string;
    custom_name: string;
    amount: number;
    currency: AccountCurrencyType;
    number: string;
    blocked: boolean;
    pan: string;
    paymentSystem: string;
    category: string;
    expDate: Date;
    status: string;
    balance: number;
    availableBalance: number;
    lastAtmTx: string;
    lastAtmLocation: string;
    lastPosTx: string;
    lastPosLocation: string;
    holdAmount: number;
    cardholderName: string;
    primaryAccount: string;
    order: number = 0;
    primary: boolean;
    cardId: string;
    brand: string;
    tariffLink: string;
    storedId: number;
    limits: Array<LimitCard>;
    formattedLimits: object = {};
    isExternal: boolean;
    mostActive: boolean;
    smsPhone: string;
    smsType: string;
    limit_set_available: boolean;
    own_customer_card: boolean;
    packageServ: boolean;
    packageFreeCashOut: string;
    packageCashBack: string;
    kind: string;
    design: string;
    holder_name: string;
    cardholderId: string;
    canUnlock: boolean;
    canReissue: boolean;

    // for productsV2
    customName: boolean;
    accountId: number;
    status_desc: string; // Расшифровка статуса карты
    state_description: string; // Расшифровка состояния
    state: string;
    loan_funds: number; // Сумма заемных средств в доступном лимите
    own_funds: number; // Сумма собственных средств в доступном лимите
    used_loan_funds: number; // Сумма использованных заемных средств
    designBackUrl: string;
    designFrontUrl: string;
    smsNotify: number;
    highCashBack: number;
    freeWithdraw: number;


    constructor(cardInfo: any, useProductsV2: boolean = false) {
        this.id = cardInfo.id;
        this.name = cardInfo.name;
        this.custom_name = cardInfo.custom_name;
        this.number = cardInfo.number;
        this.blocked = cardInfo.blocked;
        this.amount = cardInfo.amount;
        this.currency = cardInfo.currency;
        this.pan = cardInfo.pan;
        this.paymentSystem = cardInfo.paymentSystem;
        this.category = cardInfo.category;
        this.expDate = new Date(cardInfo.expDate);
        this.status = cardInfo.status;
        this.balance = cardInfo.balance;
        this.availableBalance = cardInfo.availableBalance;
        this.lastAtmTx = cardInfo.lastAtmTx;
        this.lastAtmLocation = cardInfo.lastAtmLocation;
        this.lastPosTx = cardInfo.lastPosTx;
        this.lastPosLocation = cardInfo.lastPosLocation;
        this.holdAmount = cardInfo.holdAmount ? cardInfo.holdAmount : 0;
        this.cardholderName = cardInfo.cardholderName;
        this.primaryAccount = cardInfo.primaryAccount;
        this.order = cardInfo.order;
        this.primary = cardInfo.primary;
        this.cardId = cardInfo.cardId;
        this.brand = cardInfo.brand;
        this.tariffLink = cardInfo.tariffLink;
        this.limits = cardInfo.limits;
        this.storedId = cardInfo.storedId;
        this.mostActive = cardInfo.most_active;
        this.smsPhone = cardInfo.smsPhone;
        this.smsType = cardInfo.smsType;
        this.limit_set_available = cardInfo.limit_set_available;
        this.own_customer_card = cardInfo.own_customer_card;
        this.packageServ = cardInfo.packageServ;
        this.packageFreeCashOut = cardInfo.packageFreeCashOut;
        this.packageCashBack = cardInfo.packageCashBack;
        this.kind = cardInfo.kind;
        this.design = cardInfo.design;
        this.cardholderId = cardInfo.cardholderId;
        this.holder_name = cardInfo.holder_name;
        this.canUnlock = cardInfo.canUnlock;
        this.canReissue = cardInfo.canReissue;

        if (useProductsV2) {
            this.id = parseInt(cardInfo.id, 10);
            this.state_description = cardInfo.state_description;
            this.status_desc = cardInfo.status_desc;
            this.customName = cardInfo.customName;
            this.accountId = cardInfo.accountId;
            this.state = cardInfo.state;
            this.loan_funds = cardInfo.loan_funds;
            this.own_funds = cardInfo.own_funds;
            this.used_loan_funds = cardInfo.used_loan_funds;
            this.design = cardInfo.design_id;
            this.designBackUrl = cardInfo.design_back_url;
            this.designFrontUrl = cardInfo.design_front_url;
            this.number = cardInfo.primaryAccount;
            this.smsNotify = cardInfo.smsNotify;
            this.highCashBack = cardInfo.highCashBack;
            this.freeWithdraw = cardInfo.freeWithdraw;
        }

        if (cardInfo.limits) {
            cardInfo.limits.forEach(element => {
                this.formattedLimits[element.limitPeriodType + '_' + element.limitClass] = element.value.toString();
                this.formattedLimits['hasDay'] = this.formattedLimits['hasDay'] || element.limitPeriodType === 'DAY';
                this.formattedLimits['hasMonth'] = this.formattedLimits['hasMonth'] || element.limitPeriodType === 'MONTH';
            });
        }
    }

}

export class LimitCard {
    limitClass: string;
    limitPeriodType: string;
    value: number;
}
