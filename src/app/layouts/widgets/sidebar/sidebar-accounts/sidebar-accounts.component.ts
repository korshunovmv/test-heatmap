import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subject, combineLatest } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

import { get as _get, cloneDeep as _cloneDeep } from 'lodash';
import { ProductsService } from 'app/service/products.service';
import { AppService } from 'app/service/app.service';


@Component({
    selector: 'widget-sidebar-accounts',
    templateUrl: './sidebar-accounts.component.html',
    styleUrls: ['./sidebar-accounts.component.less']
})

export class SidebarAccountsComponent implements OnInit, OnDestroy {

    @Input()
    isChief: boolean = false;

    userRole: string;

    @Input()
    isCorporate: boolean;

    accounts: any[] = [];

    cards: { [key: string]: any[] };

    accountPath: string;

    destroy$: Subject<void> = new Subject<void>();
    canActivateCard: boolean;

    constructor(
        private productsService: ProductsService,
        private appService: AppService,
    ) { }

    ngOnInit() {
        this.appService.userRole$
            .pipe(takeUntil(this.destroy$))
            .subscribe(userRole => {
                this.userRole = userRole;
            });

        this.accountPath = this.getAccountPath(this.userRole);
        this.setSubMenuData();
        combineLatest(
            this.productsService.accounts,
            this.productsService.cards,
        )
            .pipe(
                debounceTime(100),
                takeUntil(this.destroy$)
            )
            .subscribe(data => {
                if (data[0] && data[1]) {
                    this.setSubMenuData();
                }
            });

     }

    ngOnDestroy() {
        this.destroy$.next();
    }

    private setSubMenuData() {
        this.accounts = _cloneDeep(this.productsService.getAccounts());
        const cards = this.productsService.getCards();
        this.setCards();
        this.updateSbpImgs();

        const isCardHolder = cards && !!cards.length;
        this.canActivateCard = !isCardHolder && this.isCorporate && this.isChief;
    }

    private updateSbpImgs() {
        this.accounts.forEach(account => {
            if (account['sbpDefault']) {
                account['imgUrl'] = '/assets/personal/fast_payment_square_icon.png';
            } else {
                delete account['imgUrl'];
            }
        });
    }

    private setCards() {
        if (Array.isArray(this.accounts) && this.accounts.length) {
            this.cards = this.accounts.reduce((cards, account) => {
                const accountCards = this.productsService.getCardsByNumber(account.number);
                if (Array.isArray(accountCards) && accountCards.length) {
                    cards[account.number] = accountCards.sort((x, y) => y.primary ? 1 : -1);
                }

                return cards;
            }, {});
        }
    }

    private getAccountPath(role) {
        const pathsByRoles = {
            personal: '/account/property',
            corporate: '/account'
        };
        return _get(pathsByRoles, role, '');
    }

    get isGeb(): boolean {
        return this.appService.build$.value === 'geb';
    }
}
