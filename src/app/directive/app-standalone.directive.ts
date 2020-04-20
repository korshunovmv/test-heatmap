import { ChangeDetectorRef, Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isUndefined } from 'util';
import { AppService } from '../service/app.service';


@Directive({
    selector: '[appStandalone]'
})
export class AppStandaloneDirective implements OnInit, OnDestroy {
    private unsubscriber$: Subject<void> = new Subject<void>();

    private noRepeat: number;
    private standalone: boolean;

    constructor(
        private appService: AppService,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private cd: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        this.appService
            .isEmbedBuild$
            .pipe(takeUntil(this.unsubscriber$))
            .subscribe(isEmbedBuild => {
                this.standalone = !isEmbedBuild;
                this.showHide();
            });
    }

    ngOnDestroy() {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    private showHide(): void {
        if (this.standalone) {
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
