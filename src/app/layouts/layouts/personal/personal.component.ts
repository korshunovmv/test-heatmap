import { Router, NavigationStart } from '@angular/router';
import { Component, ElementRef, HostListener, OnInit, OnDestroy, ViewChild, DoCheck, Renderer2 } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { AppService } from '../../../service/app.service';

@Component({
    selector: 'layout-personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.less']
})
export class PersonalLayoutComponent implements OnInit, OnDestroy, DoCheck {
    showSidebar: boolean = false;
    documentClickListener: any;
    hostEvent: any;
    isShowToTop: boolean = false;
    canBeShow: boolean = true;
    routerSubscriber: Subscription;
    chatId$: Observable<string | number>;

    @ViewChild('content', {read: ElementRef}) content: ElementRef;
    @ViewChild('sidebar', {read: ElementRef}) sidebar: ElementRef;


    constructor(
      private renderer: Renderer2,
      private router: Router,
      public appSerivce: AppService,
    ) {
    }

    ngOnInit() {
        this.onResize();
        this.routerSubscriber = this.router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe((event: NavigationStart) => {
                this.canBeShow = event.url.indexOf('/payment') !== 0;
            });
    }

    ngDoCheck() {
        this.onResize();
    }

    ngOnDestroy(): void {
        this.unbindDocumentClickListener();
        this.isShowToTop = false;
        if (this.routerSubscriber) {
            this.routerSubscriber.unsubscribe();
        }
    }

    @HostListener('window:resize', ['$event'])
    @HostListener('window:load', ['$event'])
    onResize(event?: any): void {
        if (this.sidebar) {
            this.sidebar.nativeElement.style.left = this.content.nativeElement.getBoundingClientRect().left + 'px';
        }
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: any): void {
        const limit = window.scrollY || window.pageYOffset;
        this.isShowToTop = this.canBeShow && limit >= 200;
    }

    private bindDocumentClickListener() {
        if (!this.documentClickListener) {
            setTimeout(() => {
                this.documentClickListener = this.renderer.listen('document', 'click', mouseEvent => {
                    if (this.hostEvent !== mouseEvent) {
                        this.onShowSideBar();
                    }
                });
            });
        }
    }

    private unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }

    onClickSidebar(mouseEvent: MouseEvent): void {
        this.hostEvent = mouseEvent;
    }

    onShowSideBar() {
        this.showSidebar = !this.showSidebar;
        if (this.showSidebar) {
            this.bindDocumentClickListener();
        } else {
            this.unbindDocumentClickListener();
        }
    }
}
