import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';

import { interval, Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { AppService } from '../../../service/app.service';

@Component({
    selector: 'layout-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginLayoutComponent implements OnInit, OnDestroy {
    showPopup: boolean = false;
    activeSliderItem = 0;

    isHoliday = false;

    isWithoutBg: boolean = true;

    items = [];
    itemsDelo = [
        {
            icon: 'bookkeeping',
            title: 'title',
            text: ['text'],
        },
        {
            icon: 'deposit',
            title: 'title',
            text: ['text'],
        },
        {
            icon: 'salary_project',
            title: 'title',
            text: ['text'],
        },
    ];
    itemsGeb = [
        {
            icon: 'salary_project',
            title: 'title',
            text: ['text'],
        },
        {
            icon: 'salary_project',
            title: 'title',
            text: ['text'],
        },
    ];
    itemsSkb = [
        {
            icon: 'deposit',
            title: 'title',
            text: ['text'],
        },
        {
            icon: 'salary_project',
            title: 'title',
            text: ['text'],
        },
        {
            icon: 'salary_project',
            title: 'title',
            text: ['text'],
        },
    ];

    private unsubscriber$: Subject<void> = new Subject<void>();
    private ticker;

    @HostListener('touchstart', ['$event'])
    onStart(event: any) {
        if (event.touches) {
            this.renderer.addClass(event.target, 'touched');
        }
    }

    constructor(
        private appService: AppService,
        private renderer: Renderer2,
        private router: Router,
    ) {}

    ngOnInit() {
        this.isHoliday = this.checkHoliday();
        this.appService.build$
            .pipe(takeUntil(this.unsubscriber$))
            .subscribe(build => {
                if (build === 'delo') {
                    this.items = this.itemsDelo;
                }
                if (build === 'geb') {
                    this.items = this.itemsGeb;
                }
                if (build === 'skb') {
                    this.items = this.itemsSkb;
                }
            });
        this.checkBg();
        this.router
            .events
            .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
            .subscribe(() => {
                this.checkBg();
            });

        this.startTicker();
    }

    ngOnDestroy(): void {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    onClickSliderItem(num) {
        this.activeSliderItem = num;
        this.ticker.unsubscribe();
        this.startTicker();
    }

    startTicker() {
        this.ticker = interval(5000)
            .pipe(takeUntil(this.unsubscriber$))
            .subscribe(() => {
                this.activeSliderItem = (this.activeSliderItem + 1) % this.items.length;
            });
    }

    private checkBg() {
        this.isWithoutBg = /\/restore$/.test(this.router.url);
    }

    private checkHoliday(): boolean {
        const time: number = (new Date()).getTime();
        return (new Date(2020, 2, 5, 0, 0, 0)).getTime() < time &&
            (new Date(2020, 2, 10, 0, 0, 0)).getTime() > time;
    }
}
