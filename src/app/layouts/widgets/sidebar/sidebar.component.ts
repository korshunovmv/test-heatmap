import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

import { AppService } from 'app/service/app.service';
import { MenuService } from 'app/layouts/services/menu.service';

@Component({
    selector: 'widget-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit, OnDestroy {
    @Input()
    useProductsV2: boolean;

    @Output() onCloseSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('header')
    header: ElementRef;

    @ViewChild('footer')
    footer: ElementRef;

    build: string;
    userRole: string;


    private _unsubscribe$$: Subject<void> = new Subject<void>();

    constructor(
        private appService: AppService,
        public menuService: MenuService,
    ) {
        this.appService.userRole$
            .pipe(
              debounceTime(100),
              takeUntil(this._unsubscribe$$)
            )
            .subscribe(userRole => {
                this.userRole = userRole;
            });
    }

    ngOnInit(): void {
      this.appService.build$
        .pipe(
          debounceTime(100),
          takeUntil(this._unsubscribe$$)
        )
        .subscribe(build => {
            this.build = build;
        });
    }

    ngOnDestroy(): void {
        this._unsubscribe$$.next();
        this._unsubscribe$$.complete();
    }
}
