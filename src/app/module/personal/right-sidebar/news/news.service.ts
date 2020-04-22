import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, tap, takeUntil } from 'rxjs/operators';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppService } from 'app/service/app.service';

@Injectable()
export class NewsService  {
    isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    isLoadingMore: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    loaders: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
    openedNews: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
    counter: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    news: BehaviorSubject<News[]> = new BehaviorSubject<News[]>([]);
    offset = 0;
    unsubscriber$: Subject<void> = new Subject<void>();

    constructor(
                private router: Router,
                private sanitizer: DomSanitizer,
                private app: AppService) {
        this.updateCounter();
        this.router.events.pipe(
            filter(x => x instanceof NavigationEnd && x.url !== '/logout-interceptor'),
            // filter(() => this.app.customers$.value.isPersonal),
            takeUntil(this.unsubscriber$))
            .subscribe(() => this.updateCounter());

        // this.app.customers$.pipe(filter(x => x.isPersonal), takeUntil(this.unsubscriber$)).subscribe(() => this.reload());
    }

    // ngOnDestroy(): void {
    //     this.unsubscriber$.next();
    //     this.unsubscriber$.complete();
    // }

    reload() {
        this.offset = 0;
        this.isLoading.next(true);
        // this.http.getNewsList().pipe(tap(() => this.isLoading.next(false)), takeUntil(this.unsubscriber$))
        //     .subscribe(x => this.news.next(this.setFormattedDate(x)));
    }

    loadMore() {
        const step = 20;
        if (this.news.value.length < this.offset + step) {
            return;
        }
        this.isLoadingMore.next(true);
        this.offset += step;
        // this.http.getNewsList(this.offset).pipe(tap(() => this.isLoadingMore.next(false)), takeUntil(this.unsubscriber$))
        //     .subscribe(x => this.news.next([...this.news.value, ...this.setFormattedDate(x)]));
    }

    updateCounter() {
        // this.http.getNewUnreadCounter().pipe(takeUntil(this.unsubscriber$)).subscribe(x => this.counter.next(Number(x.count)));
    }

    getNewsId(index: number) {
        if (this.news.value[index]) {
            return this.news.value[index].id;
        }
    }

    getIdFromHtmlNode(htmlNode) {
        return Number(Array.from(htmlNode.classList).filter(x => x !== 'news-link').find(() => true));
    }

    setFormattedDate(newsCollection: News[]): News[] {
        newsCollection.map(x => {
            x.publishDate = x.publishDate.replace('0500', '05:00');
            const date = new Date(x.publishDate);
            x.date = new Intl.DateTimeFormat('ru-RU').format(date);
            return x;
        });
        return newsCollection;
    }

    closeNews(index: number): void {
        this.openedNews.next(this.openedNews.value.filter(x => x !== index));
    }

    isOpened(index: number) {
        return this.openedNews.value.findIndex(x => index === x) !== -1;
    }

    openNews(index: number): void {
        const currentNews = this.news.value[index];
        if (this.isOpened(index)) {
            return;
        }
        if (!currentNews.viewed) {
            // this.http.markNews(currentNews.id).pipe(takeUntil(this.unsubscriber$)).subscribe(x => {
            //     this.updateCounter();
            // });
        }

        if (typeof currentNews.text === 'string') {
            currentNews.text = this.sanitizer.bypassSecurityTrustHtml(this.addEventAndTarget(currentNews.text.toString(), currentNews.id));
        }
        currentNews.viewed = true;
        this.news.next(this.news.value);

        setTimeout(() => {
            const links = document.getElementsByClassName('news-link');
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener('mouseup', () => {
                    const routerLink = links[i].getAttribute('routerLink');
                    if (routerLink) {
                        this.router.navigate([routerLink]);
                    }
                    // this.matomoTrackerService.trackEvent('menu-news', 'news_details-redirect',
                    //     'детали_новости_переход_' + this.getIdFromHtmlNode(links[i]) + '_' +
                    //     (links[i].getAttribute('href') || routerLink) + '_ЮЛ');
                });
            }
        }, 300);
        if (this.openedNews.value.includes(index)) {
            return;
        }
        this.openedNews.next([...this.openedNews.value, index]);
    }

    markAllAsViewed(): void {
    //     this.http.markAllNewsAsViewed().pipe(tap(() => {
    //         this.news.value.forEach(x => x.viewed = true);
    //         this.news.next(this.news.value);
    //     }), takeUntil(this.unsubscriber$)).subscribe(() => this.updateCounter());
    }


    addEventAndTarget(text: string, id: number) {
        const parser = new DOMParser();
        const vDom = parser.parseFromString(text, 'text/html');

        const links = vDom.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
            const linkN = links[i];
            const link = linkN.getAttribute('href');
            if (link.includes(location.origin)) {
                linkN.setAttribute('routerLink', `${link.replace(location.origin, '')}`);
                linkN.removeAttribute('href');
                linkN.classList.add('news-link');
            } else {
                linkN.setAttribute('target', '_blank');
                linkN.setAttribute('data-id', id.toString());
            }
            linkN.setAttribute('id', id.toString());
            linkN.classList.add(id.toString());
        }

        const result = vDom.getElementsByTagName('body')[0].innerHTML;
        return result;
    }
}

export interface News {
    id: number;
    title: string;
    fullText: SafeHtml;
    text: SafeHtml | string;
    imageUrl: string;
    publishDate: string;
    date?: string;
    viewed: boolean;
}
