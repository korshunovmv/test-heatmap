import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject, merge } from 'rxjs';
import { debounceTime, first, takeUntil } from 'rxjs/operators';
import { get as _get } from 'lodash';

import { blindInOut } from '../../../common/animation';
import { Card } from '../../../model/card';
import { AppService } from '../../../service/app.service';
import { IMenuItem } from '../../../ui/dropdown/dropdown.component';
import { Router } from '@angular/router';
import { Utils } from '../../../util';
import { ProductsService } from 'app/service/products.service';

@Component({
    selector: 'personal-summary-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.less'],
    animations: blindInOut
})
export class CardsComponent implements OnInit, OnDestroy {

    allDebitCards: Array<any> = [];
    allExternalCards: Array<any> = [];
    allBlockedCards: Array<any> = [];
    allCardCount = 0;
    destroy: Subject<boolean> = new Subject<boolean>();
    cardsImages: any = {};
    currentDate: Date = new Date();
    isOpenEmailModal: boolean = false;
    accountNumber: String;
    isBlockModalWindowOpened: boolean;
    isDeleteModalWindowOpened: boolean;
    isBlocked: boolean;
    selectedExtCard: any;

    dotMenuItems_internal: IMenuItem[] = [
        {label: 'Перевести', uniqueKey: 'addAmount', pathOrFunction: () => { }},
        {label: 'Пополнить', uniqueKey: 'deductAmount', pathOrFunction: () => { }},
        {label: 'Скачать реквизиты', uniqueKey: 'download', pathOrFunction: () => { }},
        {label: 'Отправить реквизиты', uniqueKey: 'send', pathOrFunction: () => { }}
    ];

    dotMenuItems_external: IMenuItem[] = [
        {label: 'Перевести', uniqueKey: 'addAmount', pathOrFunction: () => { }},
        {label: 'Пополнить', uniqueKey: 'deductAmount', pathOrFunction: () => { }},
        {label: 'Удалить', uniqueKey: 'deleteCard', pathOrFunction: () => { }}
    ];

    dotMenuItems_blocked: IMenuItem[] = [
        // {label: 'Разблокировать карту', uniqueKey: 'unblock', pathOrFunction: () => { }},
        {label: 'Перевести', uniqueKey: 'addAmount', pathOrFunction: () => { }},
        {label: 'Пополнить', uniqueKey: 'deductAmount', pathOrFunction: () => { }},
        {label: 'Скачать реквизиты', uniqueKey: 'download', pathOrFunction: () => { }},
        {label: 'Отправить реквизиты', uniqueKey: 'send', pathOrFunction: () => { }}
    ];

    menuItems_newCards: IMenuItem[];

    constructor(
        private appService: AppService,
        private router: Router,
        private productsService: ProductsService,
    ) {
        this.productsService.updateExternalCards();
        this.appService.build$
            .pipe(takeUntil(this.destroy))
            .subscribe(build => {
                this.menuItems_newCards = [
                    {
                        label: 'Дебетовую карту',
                        uniqueKey: 'addAmount',
                        pathOrFunction: () => {
                          // this.router.navigate(['/create-debit-card']);
                        }
                    },
                ];
                if (build !== 'geb') {
                    this.menuItems_newCards.push(
                        {
                            label: 'Кредитную карту',
                            uniqueKey: 'deductAmount',
                            pathOrFunction: () => {
                              // this.router.navigate(['/loan/new'], { queryParams: {overdraft: true}});
                            }
                        }
                    );
                }
            });
    }

    ngOnInit(): void {
        this.currentDate = Utils.currentDate;
        merge(
          this.productsService.updateCards$,
          this.productsService.updateExternalCards$,
        )
        .pipe(
          // debounceTime(100),
          takeUntil(this.destroy)
        )
        .subscribe(() => {
          this.loadAllCards();
        });
    }

    ngOnDestroy(): void {
        this.destroy.next(true);
    }

    loadAllCards(): void {
        this.allDebitCards = [];
        this.allBlockedCards = [];

        const allInternalCards = [...this.productsService.getCards()];
        const allExternalCards = [...this.productsService.getExternalCards()];
        this.allDebitCards = this.loadCards(allInternalCards.filter(card => !card.blocked));
        this.allBlockedCards = this.loadCards(allInternalCards.filter(card => card.blocked));
        this.allExternalCards = allExternalCards.map(card => this.mapExternalToInternalCard(card));
        this.mergeCards();
    }

    loadCards(cards): Array<any> {
        const mostActiveCard = cards.find(x => x.mostActive);

        if (mostActiveCard && !mostActiveCard.primary) {
            cards
                .filter(x => mostActiveCard.number === x.number)
                .forEach(x => x.order = '1');
        }
        if (mostActiveCard) {
            mostActiveCard.order = '0';
        }
        cards = cards.sort((card1: Card, card2: Card) => {
            if (card1.primary && card2.primary) {
                if (card1.order && card2.order &&
                    card1.order !== card2.order) {
                    return card1.order < card2.order ? -1 : 1;
                }

                if (card1.expDate && card2.expDate &&
                    card1.expDate !== card2.expDate) {
                    return card1.expDate > card2.expDate ? -1 : 1;
                }
            }

            if (card1.primary || card2.primary) {
                return card1.primary ? -1 : 1;
            }

            return 0;
        });

        for (let index: number = 0; index < cards.length; index++) {
            const card = cards[index];
            this.setCardsImages(card);
            if (card.primary) {
                const childrenCards = cards.filter(c => c.primaryAccount === card.primaryAccount && !c.primary);
                let primaryIndex = index;
                childrenCards.forEach((child: Card) => {
                    const childIndex = cards.indexOf(child);
                    cards.splice(childIndex, 1);
                    cards.splice(primaryIndex + 1, 0, child);
                    primaryIndex++;
                });
            }
        }

        return cards;
    }

    mapExternalToInternalCard(card: any) {
        const result: Card = new Card({});
        result.name = card.name;
        result.pan = card.maskedPan;
        result.primary = true;
        result.amount = card.amount;
        result.currency = card.currency || 'RUB';
        result.isExternal = true;
        result.id = card.id;
        result.paymentSystem = card.paymentSystem;

        // дата приходит в виде 01/20
        const parsedDate = card.expDate.match(/(.*)\/(.*)/);
        let year = 2001;
        let month = 0;
        if (parsedDate) {
            year = 2000 + +parsedDate[2];
            month = parsedDate[1] - 1;
        }
        result.expDate = new Date(year, month, 1);
        this.setCardsImages(result);
        return result;
    }

    getRouterLink(card: Card): Array<any> {
        if (card.isExternal) {
            return [ '/card-external/property/', card.id ];
        }
        return ['/card/property', card.id ];
    }

    mergeCards(): void {
        this.allCardCount = this.allDebitCards.length + this.allBlockedCards.length + this.allExternalCards.length;
    }

    index(index: number, item: any): any {
        return item.id;
    }

    icon(card: Card): string {
        if (card.blocked) {
            return 'password';
        }
        if (!card.isExternal && !card.primary) {
            return 'additional_card';
        }
        if (!card.isExternal && card.kind !== 'debit') {
            return 'credit_card';
        }
        return 'card';
    }

    checkCardImageError(card: Card) {
        this.cardsImages[card.id] = this.getDefaultCardImage(card);
    }

    private setCardsImages(card: Card) {
        const image = this.getDefaultCardImage(card);
        this.cardsImages[card.id] = image;
    }

    private getDefaultCardImage(card: Card) {
        const paymentSystems: RegExp = /\b(visa|mc|maestro|mir)\b/i;
        const cardType: string = _get(card.paymentSystem.match(paymentSystems), '0', '').toLowerCase();
        let pathToCardImg: string = '';
        if (cardType) {
            pathToCardImg = `/assets/personal/paysystem/card_${cardType}_preview.svg`;
        }
        return pathToCardImg;
    }

    addAmount(id: number) {
        const payment = {};
        payment['payee-card'] = id;
    }

    deductAmount(id: number) {
        const payment = {};
        payment['payer-card'] = id;
    }

    handleMenuActions(event: IMenuItem, card: Card) {
        switch (event.uniqueKey) {
            case 'addAmount':
                this.deductAmount(card.isExternal ? card.id : card.storedId);
                break;
            case 'deductAmount':
                this.addAmount(card.isExternal ? card.id : card.storedId);
                break;
            case 'download':
                this.downloadRequisites(card.number);
                break;
            case 'send':
                this.openSendEmailWindow(card.primaryAccount);
                break;
            case 'deleteCard':
                this.selectedExtCard = card;
                this.showDeleteModal();
                break;
            case 'unblock':
                // this.unblockCard();
                break;
        }
    }

    getCardType(card: Card) {
        if (!card.kind) {
            return ' ';
        }
        switch (card.kind) {
            case 'debit':
                if (card.brand.toUpperCase().indexOf('VIRTUON') > -1) {
                    return 'Виртуальная';
                } else {
                    return 'Дебетовая';
                }
                break;
            case 'credit':
                return 'Кредитная';
                break;
            default:
                return ' ';
        }
    }

    getDotMenu(card: Card) {
        if (card.isExternal) {
            return this.dotMenuItems_external;
        } else if (!card.blocked) {
            return this.dotMenuItems_internal;
        } else {
            return this.dotMenuItems_blocked;
        }
    }

    downloadRequisites(cardNum) {
        const documentData = {
            documents: [{type: 'requisites', account_number:  cardNum}],
            type: 'pdf'
        };
    }

    openSendEmailWindow(accNum: string): void {
        this.accountNumber = accNum;
        this.isOpenEmailModal = true;
    }

    closeModal() {
        this.accountNumber = '';
        this.isOpenEmailModal = false;
    }

    isParentCardBlocked(acc: string) {
        let mainCard: Card[];
        mainCard = this.allBlockedCards.filter(card => card.primaryAccount === acc && card.primary);

        if (mainCard.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    deleteCard() {

    }

    showDeleteModal() {
        this.isDeleteModalWindowOpened = true;
    }

    hideDeleteModal() {
        this.isDeleteModalWindowOpened = false;
    }

    reresh() {
      this.loadAllCards();
    }

}
