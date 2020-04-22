import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { News, NewsService } from './news.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'personal-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.less'],
    preserveWhitespaces: false,
})
export class NewsComponent implements OnInit, OnDestroy {
    news: BehaviorSubject<News[]>;
    openedNews: BehaviorSubject<number[]>;
    isLoading: BehaviorSubject<boolean>;
    loaders: BehaviorSubject<number[]>;
    canReadAll: Observable<boolean>;
    @ViewChild('showMore') showMoreElement: ElementRef;

    constructor(private ns: NewsService) {
    }

    ngOnInit(): void {
        this.news = this.ns.news;
        this.canReadAll = this.ns.counter.pipe(map(x => x > 0));
        this.isLoading = this.ns.isLoading;
        this.loaders = this.ns.loaders;
        this.openedNews = this.ns.openedNews;
    }

    ngOnDestroy(): void {
        this.ns.openedNews.next([]);
    }

    closeNews(index: number): void {
        this.ns.closeNews(index);
    }

    openNews(index: number): void {
        this.ns.openNews(index);
    }

    markAllAsViewed(): void {
        if (this.ns.counter.value <= 0) {
            return;
        }
        this.ns.markAllAsViewed();
    }
}
