import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';


@Component({
    selector: 'widget-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.less']
})
export class PageHeaderComponent implements OnInit, OnDestroy {
    @Input() pageTitle: string;

    isDemoBuild: boolean;
    demoLink: string | boolean;
    instructionLink: string | boolean;
    demoVideoLink: string | boolean;

    isDemoVideoOpened: boolean = false;

    private unsubscriber$: Subject<void> = new Subject<void>();

    constructor(
    ) { }

    ngOnInit() {
        // this.appService
        //     .environment$
        //     .pipe(takeUntil(this.unsubscriber$))
        //     .subscribe((env: EnvironmentState) => {
        //         this.isDemoBuild = env.isDemoBuild;
        //         this.demoLink = env.params.demoLink;
        //         this.instructionLink = env.params.instructionLink;
        //         this.demoVideoLink = env.params.demoVideoLink;
        //     });
    }

    ngOnDestroy(): void {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

    openDemoVideo(): void {
        this.isDemoVideoOpened = true;
    }

    closeDemoVideo(): void {
        this.isDemoVideoOpened = false;
    }

    goToDemo() {
        // this.matomoService.trackEventClick('demo-login', 'demo-login', 'Переход в демо режим');
        // window.open(this.demoLink as string, '_blank');
    }
}
