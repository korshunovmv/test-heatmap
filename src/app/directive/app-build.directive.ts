import { ChangeDetectorRef, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isUndefined } from 'util';
import { AppService } from '../service/app.service';


@Directive({
    selector: '[appBuild]'
})
export class AppBuildDirective implements OnInit, OnDestroy {
    private unsubscriber$: Subject<void> = new Subject<void>();

    private noRepeat: number;
    private build: string;
    private target: string;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private cd: ChangeDetectorRef,
        private appService: AppService,
    ) {
    }

    @Input()
    set appBuild(target: string) {
        this.target = target;
        this.showHide();
    }

    ngOnInit() {
        this.appService
          .build$
          .pipe(takeUntil(this.unsubscriber$))
          .subscribe(build => {
              this.build = build;
              this.showHide();
          });
    }

    ngOnDestroy() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    private showHide(): void {
        if (this.build && this.build === this.target || !this.target) {
            if (this.noRepeat === 0 || isUndefined(this.noRepeat)) {
                this.noRepeat = 1;
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.cd.markForCheck();
            }
        } else {
            this.noRepeat = 0;
            this.viewContainer.clear();
            this.cd.markForCheck();
        }
    }

}
