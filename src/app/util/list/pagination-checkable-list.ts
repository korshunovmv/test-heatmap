import { PaginationList } from './pagination-list';

export class PaginationCheckableList extends PaginationList {

    checkedItemsAmount: number = 0;
    checkState: number = -1;

    constructor() {
        super();
    }

    init(): void {
        this.items.subscribe((rs: any[]) => {
            this.updatedItems = rs;
            this.updateParts();
            this.calcAmountOfCheckedItems();
        });
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

        const checkedItemsLength = this.updatedItems.filter((item: any) => item.checked).length;
        const checkableItemsLength = this.updatedItems.filter((item: any) => item.checkable).length;
        this.checkState = checkedItemsLength === 0
            ? -1
            : checkedItemsLength === checkableItemsLength
                ? 1
                : 0;
    }

    toggleChecked(event?): void {
        if (event) {
            this.checkState = event === -1 ? 1 : -1;
        } else {
            this.checkState = this.checkState === -1 ? 1 : -1;

        }
        this.checkItems(this.checkState);
    }

    private checkItems(state: number): any {
        const result = this.updatedItems
            .map((item: any) => {
                switch (state) {
                    case 1:
                        item.checked = item.checkable ? true : item.checked;
                        return item;
                    case -1:
                        item.checked = item.checkable ? false : item.checked;
                        return item;
                    default:
                        return item;
                }
            });
        this.items.next(result);
    }

    onItemToggleChecked($event: any, checkedItem: any): any {
        const result = this.updatedItems
            .map((item: any) => {
                item.checked = item === checkedItem ? $event : item.checked;
                return item;
            });
        this.items.next(result);

    }

    calcAmountOfCheckedItems(): void {
        this.checkedItemsAmount = this.updatedItems.filter((item: any) => item.checked).length;
    }

}
