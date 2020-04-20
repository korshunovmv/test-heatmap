import { Component, ElementRef, EventEmitter, HostBinding, OnDestroy, OnInit, Output, TemplateRef, } from '@angular/core';
import { Router } from '@angular/router';
import { state, style, trigger, } from '@angular/animations';

import { merge, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';

import { get as _get } from 'lodash';

import { AppService } from '../../../service/app.service';

@Component({
    selector: 'ui-dropdown-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less'],
    animations: [
        trigger('state', [
            state('show', style({
                opacity: 1,
            })),
            state('hide', style({
                opacity: 0,
            })),
        ])
    ]
})
export class DropdownMenuComponent implements OnInit, OnDestroy {

    @HostBinding('style.top.px')
    top: number;

    @HostBinding('style.left.px')
    left: number;

    @HostBinding('style.right.px')
    right: number;

    @HostBinding('style.bottom.px')
    bottom: number;

    @HostBinding('style.min-width.px')
    width: number;

    @HostBinding('style.max-width')
    maxWidth: number;

    @HostBinding('style.height.px')
    height: number;

    @HostBinding('@state')
    state: string = 'hide';

    @Output()
    onClose: EventEmitter<{}> = new EventEmitter();

    @Output()
    onItemClick: EventEmitter<IMenuItem> = new EventEmitter<IMenuItem>();

    template: TemplateRef<any>;

    maxDisplayItems: number;
    menu: Array<IMenuItem>;
    widthActiveEl: number;

    unsubscribing$: Subject<void> = new Subject<void>();
    private menuState$: Subject<void> = new Subject<void>();

    // private currentSessionState: SessionStateType;

    constructor(
        private el: ElementRef,
        private router: Router,
    ) {
    }

    ngOnInit() {
        // this.currentSessionState = _get(this.appService, ['session$', 'value', 'state']);

        setTimeout(() => {
            if (this.bottom) {
                // this.top = this.bottom - this.el.nativeElement.getBoundingClientRect().height;
                this.top = this.bottom;
                this.bottom = undefined;
            }
            if (this.right) {
                this.left = this.right - this.el.nativeElement.getBoundingClientRect().width;
                this.right = undefined;
            }
            let childHeight;
            if (this.el.nativeElement.children[0] && this.el.nativeElement.children[0]) {
                childHeight = this.el.nativeElement.children[0].getBoundingClientRect().height;
            }
            if (childHeight && this.maxDisplayItems) {
                this.height = childHeight * Math.min(this.maxDisplayItems, this.menu.length);
            }
            this.display();
        });
    }

    ngOnDestroy(): void {
        this.unsubscribing$.next();
        this.unsubscribing$.complete();
    }

    getNativeElement() {
        return this.el && this.el.nativeElement;
    }

    close() {
        this.hide();
        this.onClose.next();
    }

    action(item: IMenuItem) {
        if (item.disabled || item.uploadFile) {
            return;
        }
        this.onItemClick.emit(item);
        this.close();
        if (typeof item.pathOrFunction === 'function') {
            item.pathOrFunction();
        } else {
            this.router.navigate([item.pathOrFunction], item.queryParams ? { queryParams: item.queryParams}  : {});
        }
    }

    onUpload(event, item) {
        // this.hideDropdown();
        this.close();
        item.pathOrFunction(event);
    }

    display() {
        this.menuState$ = new Subject<void>();
        this.state = 'show';
        // this.listenSessionChanges();
        // this.cd.markForCheck();
    }

    hide() {
        this.menuState$.next();
        this.menuState$.complete();
        this.state = 'hide';
    }

    // private listenSessionChanges() {
    //     this.appService
    //     .session$
    //     .pipe(
    //         map((session: SessionState) => session.state),
    //         filter((sessionState: SessionStateType) => sessionState !== this.currentSessionState),
    //         distinctUntilChanged(),
    //         takeUntil(merge(this.menuState$, this.unsubscribing$))
    //     )
    //     .subscribe(() => {
    //         this.close();
    //     });
    // }
}

export interface IMenuItem {
    label: string;
    uniqueKey?: string;
    pathOrFunction?: any;
    queryParams?: object;
    disabled?: boolean;
    uploadFile?: boolean;
}
