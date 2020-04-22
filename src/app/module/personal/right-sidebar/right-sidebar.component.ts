import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { RightSidebarBase } from './right-sidebar-base';
import { NewsService } from './news/news.service';
import { RightSidebarService } from './right-sidebar.service';
import { AppService } from 'app/service/app.service';

@Component({
    selector: 'widget-right-sidebar',
    templateUrl: './right-sidebar.component.html',
    styleUrls: ['./right-sidebar.component.less', './chat-image.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false,
})
export class RightSidebarComponent extends RightSidebarBase implements OnInit {
    @ViewChild('chatN') chatN: ElementRef;
    constructor(
                protected ns: NewsService,
                protected router: Router,
                protected cdr: ChangeDetectorRef,
                protected appService: AppService,
                public api: RightSidebarService) {
        super(cdr, ns, router, appService, api);
    }
}
