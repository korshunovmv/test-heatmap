export enum DocumentStates {
    /** @desc 1-я картотека */
    registry1 = '010_registry1',
    /** @desc 11-я картотека */
    registry11 = '015_registry11',
    /** @desc 2-я картотека */
    registry2 = '020_registry2',
    /** @desc Активен */
    active = '025_active',
    /** @desc Аннулирован */
    cancelled = '030_cancelled',
    /** @desc В обработке */
    accepted = '040_accepted',
    /** @desc В обработке в ТХ */
    acceptedTx = '041_accepted_tx',
    /** @desc Завершен */
    completed = '042_completed',
    /** @desc Отправлен в банк */
    acceptedPs = '043_accepted_ps',
    /** @desc Отправлен */
    acceptedGc = '044_accepted_gc',
    /** @desc Запланирован */
    scheduled = '045_scheduled',
    scheduled_origin = 'scheduled',
    /** @desc Готов к выдаче */
    issueGc = '046_issue_gc',
    /** @desc Запрошен отзыв */
    revoking = '050_revoking',
    /** @desc Импортирован */
    imported = '054_imported',
    /** @desc Доп. контроль */
    onControl = '055_on_control',
    /** @desc На рассмотрении */
    onConsaid = '056_on_consaid',
    /** @desc На согласовании */
    onAgreement = '057_on_agreement',
    /** @desc На подписи */
    signed = '060_signed',
    /** @desc Счет обработан (распознан) */
    recognized = '061_recognized',
    /** @desc Счет не обработан (не распознан) */
    notRecognized = '062_not_recognized',
    /** @desc Обработан */
    executed = '065_executed',
    /** @desc Оплачен */
    processed = '070_processed',
    /** @desc Неотображаемый документ, соответсвующий проводке */
    processedTx = '071_processed_tx',
    /** @desc Частично оплачен */
    partialProcessed = '072_processed',
    /** @desc Отказан */
    rejected = '080_rejected',
    /** @desc Отказан ВК */
    rejectedVk = '081_rejected_vk',
    /** @desc Отозван */
    revoked = '090_revoked',
    /** @desc Принят */
    draft = '100_draft',
    /** @desc Принят ВК */
    draftVk = '101_draft_vk',
    /** @desc Создан */
    editable = '110_editable',
    /** @desc В адрес нового контрагента */
    newPayee = '111_new_payee',
    /** @desc Требуется анкета выгодоприобретателя */
    formNeed = '120_form_need',
    /** @desc Требуется подтверждение */
    authReq = '130_auth_req',
    /** @desc Требуется активация */
    aсtReq = '131_aсt_req',
    /** @desc Возвращен в работу */
    returnedToWork = '140_returned',
    /** @desc Возвращен */
    returned = '141_returned',
    /** @desc Уточнить реквизиты */
    clarify = '145_clarify',
    /** @desc Отправлен */
    sent = '200_sent',
    /** @desc Отправлен */
    fraudError = '210_fraud_error',
    /** @desc В обработке */
    fraudReview = '213_fraud_review',
    /** @desc Опубликован */
    published = '215_published',
    /** @desc Не опубликован */
    notPublished = '220_not_published',
    /** @desc Создается в QIWI(50) */
    creatingQiwi = '230_creating_qiwi',
    /** @desc Добавлен в QIWI(10) */
    addedQiwi = '232_added_qiwi',
    /** @desc Активен в QIWI(60) */
    activeQiwi = '234_active_qiwi',
    /** @desc Изменяется в QIWI(150) */
    modifiedQiwi = '236_modified_qiwi',
    /** @desc Отключается в QIWI(80) */
    deactivateQiwi = '238_deactivate_qiwi',
    /** @desc Удален в QIWI(другие) */
    deletedQiwi = '240_deleted_qiwi',
    /** @desc Удален в АБС */
    deleted = 'deleted',
    /** @desc Отложен до поступления средств */
    standing = 'standing',
    /** @desc Отложен до поступления средств */
    standingCard = 'standing_card',
    /** @desc Новый */
    new = 'new',
    /** @desc Запланирован на основе периодического платежа */
    planned = 'planned',
    /** @desc Запланирован, требует акцепта */
    acceptReq = 'accept_req'
}
