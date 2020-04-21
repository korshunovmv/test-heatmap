import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'ui-show-more',
    templateUrl: './show-more.component.html',
    styleUrls: ['./show-more.component.less']
})
export class ShowMoreComponent implements OnInit {
    showShow: boolean;
    showActive: boolean;
    showHide: boolean;
    hideActive: boolean;
    @Input() showLabel: string = 'показать еще';
    @Input() hideLabel: string = 'скрыть';
    @Input() isButtonShown: boolean = true;
    @Input() displayIcon: boolean;
    // Событие которое вызывается при нажатии "Показать еще"
    @Output() show: EventEmitter<any> = new EventEmitter();
    // Событие которое вызывается при нажатии "Скрыть"
    @Output() hide: EventEmitter<any> = new EventEmitter();

    /**
     * use-case:
     * true - если нужно, чтобы была кнопка "показать"
     * false - если нужно, чтобы была кнопка "скрыть"
     * null - если нужно, чтобы не было никакой кнопки
     */
    @Input()
    set toggle(_toggle: boolean) {
        switch (_toggle) {
            case true:
                this.showShow = true;
                this.showHide = false;
                break;
            case false:
                this.showShow = false;
                this.showHide = true;
                break;
            default:
                this.showShow = false;
                this.showHide = false;
                break;
        }
    }

    constructor() {
    }

    ngOnInit(): void {
        this.showActive = (this.show.observers.length > 0) ? true : false;
        this.hideActive = (this.hide.observers.length > 0) ? true : false;
    }

    showMoreClick(): void {
        this.show.emit(null);
    }

    hideClick(): void {
        this.hide.emit(null);
    }

}
