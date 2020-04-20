export enum SkbPaymentOperationTypes {
    /** @desc Перевод себе рублевый */
    transferRub = 'transfer_rub',
    /** @desc Перевод себе с участием валютного счета */
    transferCurrency = 'transfer_currency',
    /** @desc Внешний перевод в рублях в адрес ЮЛ */
    externalCorporate = 'external_corporate',
    /** @desc Внешний перевод в рублях в адрес ФЛ */
    externalPhysical = 'external_physical',
    /** @desc Внешний перевод в рублях в адрес бюджета */
    externalBudgetary = 'external_budgetary',
    /** @desc Оплата услуг */
    servicePayment = 'service_payment',
    /** @desc Перевод с карты на карту по номеру карты */
    p2p = 'p2p',
    /** @desc Перевод на счет другого клиента внутри банка (ФЛ) */
    internalPhysicalAccount = 'internal_physical_account',
    /** @desc Перевод на счет другого клиента внутри банка (ЮЛ) */
    internalCorporateAccount = 'internal_corporate_account',
    /** @desc Перевод ФЛ внутри банка по номеру телефона */
    internalPhysicalPhoneNumber = 'internal_physical_phone_number',
    /** @desc Перевод ФЛ внутри банка по номеру карты */
    internalPhysicalCard = 'internal_physical_card',
    /** @desc Перевод ЮЛ в адрес другого ЮЛ */
    corpToCorp = 'corp_to_corp',
    /** @desc Перевод ЮЛ в адрес */
    corpToPhys = 'corp_to_phys',
    /** @desc Перевод ЮЛ в адрес бюджета РФ */
    corpBudgetary = 'corp_budgetary',
    /** @desc Перевод ЮЛ между своими счетами */
    corpTransfer = 'corp_transfer',
    /** @desc Рублевый платеж в пользу нерезидента (ЮЛ/ИП) */
    corpToNonrezCorp = 'corp_to_nonrez_corp',
    /** @desc карточная транзакция */
    cardTransaction = 'card_transaction',

    externalSbpC2C = 'external_sbp_c2c',
    externalSbpMe2Me = 'external_sbp_me2me'
}
