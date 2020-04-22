import { AfterViewInit, ChangeDetectorRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { filter, takeUntil, map } from 'rxjs/operators';

import { NewsService } from './news/news.service';
import { ScrollbarComponent } from 'app/ui/scrollbar/scrollbar.component';
import { RightSidebarService } from './right-sidebar.service';
import { AppService } from 'app/service/app.service';

export abstract class RightSidebarBase implements OnInit, OnDestroy, AfterViewInit {
    currentActiveMenu: BehaviorSubject<string> = new BehaviorSubject('none');
    chatId$: Observable<string | number>;
    sideEffectChangeMenu: { [key: string]: () => void } = {
        'none': () => {
            // const isOpened = (this.chat.isOpened$ as BehaviorSubject<boolean>).value;
            // if (isOpened) {
            //     this.chat.service.closeUI();
            // }
        },
        'news': () => {
            // const isOpened = (this.chat.isOpened$ as BehaviorSubject<boolean>).value;
            // if (isOpened) {
            //     this.chat.service.closeUI();
            // }
            this.scrollToTop();
            // this.matomoTrackerService.trackEventClick('menu-news', 'news_main', 'новости_меню');
        },
        'chat': () => {
            // this.chat.service.openUI();
            // this.matomoTrackerService.trackEventClick('menu-chat', 'chat_main', 'чат_меню');
        }
    };
    newsCounter: BehaviorSubject<number>;

    @ViewChild('scrollNews')
    scrollNews: ScrollbarComponent;

    protected unsubscribing: Subject<void> = new Subject<void>();

    protected constructor(protected cdr: ChangeDetectorRef,
                          protected ns: NewsService,
                          protected router: Router,
                          protected appService: AppService,
                          public api: RightSidebarService) {
    }

    ngOnInit(): void {
        this.router.events
            .pipe(takeUntil(this.unsubscribing))
            .subscribe(() => {
                this.setCurrentMenu('none');
            });
        // this.chat.isOpened$
        //     .pipe(
        //         filter(x => !Boolean(x) && (this.api.currentActiveMenu.value === 'chat')),
        //         takeUntil(this.unsubscribing)
        //     )
        //     .subscribe(() => this.setCurrentMenu('none', false));
        this.newsCounter = this.ns.counter;
        // this.chatId$ = this.appService.customers$.pipe(map(x => x.getCurrentCustomer().chatId));
    }

    ngOnDestroy(): void {
        this.unsubscribing.next();
        this.unsubscribing.complete();
    }

    ngAfterViewInit() {
        if (this.scrollNews.componentRef) {
            this.scrollNews
                .componentRef
                .psYReachEnd
                .pipe(takeUntil(this.unsubscribing))
                .subscribe(() => this.ns.loadMore());
        }
    }

    scrollToTop() {
        // PerfectScrollbar либо не умеет скрулить вверх, либо гугл врет
        const containers = document.getElementsByClassName('recommendation-container');
        const container = containers[0];
        if (!container) {
            return;
        }
        const scroll = container.getElementsByClassName('ps--active-y')[0];
        if (!scroll) {
            return;
        }
        scroll.scrollTop = 0;
    }

    @HostListener('document:click', ['$event'])
    private onDocumentClick(event: any): void {
        const innerSidebarNodes = ['CHAT-WINDOW', 'WIDGET-RIGHT-SIDEBAR-MOBILE', 'WIDGET-RIGHT-SIDEBAR'];
        const path = event.path || (event.composedPath && event.composedPath());
        if (this.api.currentActiveMenu.value === 'none' || path.some(x => innerSidebarNodes.includes(x.nodeName))) {
            return;
        }
        this.setCurrentMenu('none');
    }

    setCurrentMenu(menu: string, shouldCallSideEffect = true): void {
        this.api.prevActiveMenu.next(this.api.currentActiveMenu.value);
        const newMenu = this.api.currentActiveMenu.value === menu ? 'none' : menu;
        this.api.currentActiveMenu.next(newMenu);
        if (shouldCallSideEffect) {
            this.callSideEffect(newMenu);
        }
    }

    callSideEffect(menu: string): void {
        const emptyFunc = () => {
        };
        const sideEffectFunc = this.sideEffectChangeMenu[menu] || emptyFunc;
        sideEffectFunc();
    }

    matomoHover(type: string): void {
        // this.matomoTrackerService.trackEventHover('right sidebar', type, 'Рекомендации меню');
    }
}
