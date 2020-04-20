import { AfterContentInit, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Utils } from '../utils';

export class PaginationList implements AfterContentInit {

    @Input() items: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    @Output() action: EventEmitter<any> = new EventEmitter();

    updatedItems: any[] = [];
    updatedItemsParts: any[] = [];
    isShowMore: boolean = false;
    showedCount: number = 1;
    activeShowMore: boolean = false;
    toggle: boolean;
    stepCount: number = 3;
    isInit: boolean = false;

    constructor() {

    }

    ngAfterContentInit(): void {
        this.init();
    }

    init(): void  {
        this.items.subscribe((rs: any[]) => {
            this.updatedItems = rs;
            this.updateParts();
        });
    }

    onAction(item: any, actionType: string) {
        this.action.emit({ item: item, actionType: actionType });
    }

    expand(item?: any): void {
        if (item) {
            item.show = item.show ? false : true;
        }
        const urs = this.updatedItems.map(r => {
            r.show = r === item ? item.show : false;
            return r;
        });
        this.items.next(urs);
    }

    toggleMore(show?: boolean): void {
        this.isShowMore = this.isShowMore ? false : true;
        this.showedCount = show ? this.showedCount + 1 : 1;
        const showMore = Utils.toggleMore(
            this.updatedItemsParts,
            this.updatedItems,
            this.stepCount,
            this.toggle, show);
        this.updatedItemsParts = showMore.parts;
        this.toggle = showMore.toggle;
        if (!show) {
            this.expand();
        }
    }

    toggleAll(): void {
        this.updatedItemsParts = this.updatedItems;
        this.toggle = this.updatedItems.length / this.stepCount > 1 ? false : null;
    }

    updateParts(): void {

        this.updatedItemsParts = this.updatedItems.slice(0, this.stepCount * this.showedCount);
        this.toggle = this.updatedItems.length > this.stepCount
            ? this.updatedItemsParts.length === this.updatedItems.length
                ? false
                : true
            : null;
        this.activeShowMore = this.updatedItems.length > 0;
        if (!this.isInit) {
            this.isInit = true;
        }
    }

    resetPagination(): void  {
        this.showedCount = 1;
    }
}
