import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatomoTrackerService } from '../matomo/matomo-tracker.service';
import { Title } from '@angular/platform-browser';

// import { MatomoTrackerService } from '@skblab/matomo';
// import { AppService, EnvironmentState } from 'app/core/app';

// declare var _paq: any;

@Injectable()
export class TitleService {

    constructor(
        @Inject(DOCUMENT) private document: HTMLDocument,
        // private appService: AppService,
        private router: Router,
        private route: ActivatedRoute,
        private matomoTrackerService: MatomoTrackerService,
        private title: Title,
    ) {
        // this.appService.environment$.subscribe((env: EnvironmentState) => {
        //     this.title = env.params.title;
        //     this.updateTitle();
        // });
        this.updateTitle();
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                this.updateTitle();
            });

        // const title = route.data.map(d => d.title);
        //
        // title.subscribe((t) => { console.log(t); });
    }

    updateTitle() {
        if (window.location.pathname === '/') {
            return;
        }
        // console.log(this.getRouteTitle(this.route.root.snapshot), this.title.getTitle())
        // this.document.title = this.title + this.getRouteTitle(this.route.root.snapshot);
        this.matomoTrackerService.setDocumentTitle(this.title.getTitle());
        this.matomoTrackerService.setCustomUrl(window.location.pathname);
        this.matomoTrackerService.trackPageView();
    }

    private getRouteTitle(route: ActivatedRouteSnapshot): string {
        const children: ActivatedRouteSnapshot[] = route.children;

        let title: string = '';

        if (route.hasOwnProperty('data') && route.data.hasOwnProperty('title') && route.data.title) {
             title = ' - ' + route.data.title;
        }

        for (const child of children) {
            if (child.outlet !== PRIMARY_OUTLET) {
                continue;
            }

            return title + this.getRouteTitle(child);
        }

        return title;
    }

}
