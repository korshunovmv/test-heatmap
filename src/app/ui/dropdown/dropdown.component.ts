import { DOCUMENT } from '@angular/common';
import {
    ApplicationRef,
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    ElementRef,
    EmbeddedViewRef,
    EventEmitter,
    HostListener,
    Injector,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    ViewChild,
    Inject,
    ContentChild,
    TemplateRef,
} from '@angular/core';

import { fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

import { get as _get } from 'lodash';

import { DropdownMenuComponent } from './menu/menu.component';

@Component({
    selector: 'ui-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit, OnDestroy {

    @ViewChild('wrapperRef')
    wrapperRef: ElementRef;

    @Input()
    menu: Array<IMenuItem>;

    @Input()
    position: string = 'right bottom';

    @Input()
    get show() {
        return this.showValue;
    }
    set show(val) {
        this.showValue = val;
        this.showChange.emit(this.showValue);
    }

    @Input()
    useContentWidth: boolean;

    @Input()
    maxWidth: string = '100%';

    @Input()
    minWidth: string;

    @Input()
    maxDisplayItems: number;

    @Output()
    open = new EventEmitter();

    @Output()
    close = new EventEmitter();

    @Output()
    showChange = new EventEmitter();

    @Output()
    onItemClick: EventEmitter<IMenuItem> = new EventEmitter<IMenuItem>();

    @ContentChild(TemplateRef)
    template: TemplateRef<any>;

    listPosition = {
        left: true,
        right: true,
        top: true,
        bottom: true
    };

    showValue = false;

    hasBeenOpened: boolean = false;
    _bottom: number;
    width: number;
    height: number;
    widthActiveEl: number;

    clickClickDocumentHandler: Function;
    componentRefMenu: ComponentRef<DropdownMenuComponent>;

    protected unsubscribing$: Subject<void> = new Subject<void>();

    private windowResize$: Subject<any> = new Subject<any>();

    constructor(
        protected el: ElementRef,
        private renderer: Renderer2,
        private cd: ChangeDetectorRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private injector: Injector,
        private appRef: ApplicationRef,
        @Inject(DOCUMENT) private document: any
        ) {
    }

    ngOnInit() {
        this.listenResize();
    }

    ngOnDestroy() {
        this.unsubscribing$.next();
        this.unsubscribing$.complete();
    }

    @HostListener('click', ['$event'])
    private onToggle() {
        this.toggleDropdown();
    }

    addClickDocumentHandler() {
        if (!this.clickClickDocumentHandler) {
            this.clickClickDocumentHandler = this.renderer.listen('document', 'mousedown', (event) => {
                const menu = this.componentRefMenu.instance.getNativeElement();
                if (menu && !menu.contains(event.target)) {
                    this.hideDropdown();
                }
            });
        }
    }

    toggleDropdown() {
        if (this.menu.length) {
            if (this.show) {
                this.hideDropdown();
            } else {
                this.openDropdown();
            }
            this.open.emit({
                dropList: this.componentRefMenu.location,
                clickCoords: this.getOffsetRect()
            });
        }
    }

    openDropdown() {
        this.show = true;
        this.addClickDocumentHandler();
        const { right, left, top, bottom, maxWidth, width } = this.calculateBounds();
        this.createMenu({
            bottom,
            top,
            left,
            right,
            menu: this.menu,
            width: width,
            height: this.height,
            maxDisplayItems: this.maxDisplayItems,
            maxWidth: maxWidth,
            widthActiveEl: this.widthActiveEl,
            template: this.template
        });
        this.cd.markForCheck();
    }

    calculateBounds() {
        const config = {
            bottom: undefined,
            top: undefined,
            left: undefined,
            right: undefined,
            maxWidth: undefined,
            width: undefined
        };

        const positions = this.position.split(' ').filter(x => this.listPosition[x]);
        const objectRect = this.wrapperRef.nativeElement.getBoundingClientRect();

        const clientWidth = this.document.body.clientWidth;
        const maxWidthInPx = this.getWidthInPx(clientWidth, this.maxWidth);
        const minWidth = this.useContentWidth ? objectRect.width : this.minWidth;
        const minWidthInPx = minWidth ? this.getWidthInPx(clientWidth, minWidth) : null;

        this.widthActiveEl = objectRect.width;
        const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop;

        positions.forEach(x => {
            switch (x) {
                case 'left':
                    const lostClientWidthLeft = objectRect.right;
                    const allowedMaxWidthLeft = Math.min(lostClientWidthLeft, maxWidthInPx);
                    if (minWidthInPx && allowedMaxWidthLeft < minWidthInPx) {
                        config.left = objectRect.left;
                        config.maxWidth = this.maxWidth;
                        break;
                    }
                    config.right = objectRect.right;
                    config.maxWidth = allowedMaxWidthLeft + 'px';
                    break;
                case 'right':
                    const lostClientWidthRight =  this.document.body.clientWidth - objectRect.left;
                    const allowedMaxWidthRight = Math.min(lostClientWidthRight, maxWidthInPx);
                    if (minWidthInPx && allowedMaxWidthRight < minWidthInPx) {
                        config.right = objectRect.right;
                        config.maxWidth = this.maxWidth;
                        break;
                    }
                    config.left = objectRect.left;
                    config.maxWidth = allowedMaxWidthRight + 'px';
                    break;
                case 'top':
                    config.top = objectRect.top + scrollTop;
                    break;
                case 'bottom':
                    config.bottom = objectRect.bottom + scrollTop;
                    break;
                default:
                    break;
            }
        });
        return config;
    }

    getWidthInPx(clientWidth, widthList) {
        return widthList.includes('%') ? parseInt(widthList, 10) * clientWidth / 100 : parseInt(widthList, 10);
    }

    getOffsetRect() {
        const box = this.wrapperRef.nativeElement.getBoundingClientRect();

        const body = this.document.body;
        const docElem = this.document.documentElement;

        const scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        const scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

        const clientTop = docElem.clientTop || body.clientTop || 0;
        const clientLeft = docElem.clientLeft || body.clientLeft || 0;

        const top  = box.top +  scrollTop - clientTop + 20;
        const left = box.left + scrollLeft - clientLeft;
        return {
            top: Math.round(top),
            left: Math.round(left),
        };
    }


    hideDropdown() {
        this.show = false;
        if (this.clickClickDocumentHandler) {
            this.clickClickDocumentHandler();
            this.clickClickDocumentHandler = null;
        }
        this.componentRefMenu.instance.close();
    }

    createMenu(data: { [index: string]: any; } = {}): any {
        this.componentRefMenu = this.componentFactoryResolver
            .resolveComponentFactory(DropdownMenuComponent)
            .create(this.injector);

        this.appRef.attachView(this.componentRefMenu.hostView);

        const domElem = (this.componentRefMenu.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
        const menuInstance = this.componentRefMenu.instance;
        setTimeout(() => {
            this.renderer.appendChild(this.document.body, domElem);
        });

        Object.keys(data).forEach(key => {
            menuInstance[key] = data[key];
        });
        menuInstance.onClose.subscribe(() => {
            this.destroyMenu();
        });
        menuInstance
            .onItemClick
            .pipe(takeUntil(menuInstance.unsubscribing$))
            .subscribe((item: IMenuItem) => {
                this.onItemClick.emit(item);
            });

        return menuInstance;
    }

    destroyMenu() {
        if (this.componentRefMenu) {
            this.appRef.detachView(this.componentRefMenu.hostView);
            this.componentRefMenu.destroy();
        }
        this.close.next();
        this.cd.markForCheck();
    }

    protected listenResize() {
        fromEvent(window, 'resize')
            .pipe(
                takeUntil(this.unsubscribing$)
            )
            .subscribe((event: Event) => {
                if (this.show) {
                    this.hideDropdown();
                    this.windowResize$.next(event);
                }
            });

        this.windowResize$
            .pipe(
                map((event: Event) => _get(event, ['target', 'innerWidth'], 0)),
                distinctUntilChanged(),
                debounceTime(500),
                takeUntil(this.unsubscribing$)
            )
            .subscribe(() => {
                this.openDropdown();
            });
    }

}

export interface IMenuItem {
    label?: string;
    uniqueKey?: string;
    pathOrFunction?: any;
    queryParams?: object;
    disabled?: boolean;
    uploadFile?: boolean;
    data?: object;
}
