import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { MatomoInjectorService } from 'app/matomo/matomo-injector.service';
import { MatomoTrackerService } from 'app/matomo/matomo-tracker.service';
import { TitleService } from 'app/service/title.service';
import { AppService } from 'app/service/app.service';


@Component({
    selector: 'widget-matomo',
    templateUrl: './matomo.component.html',
    styleUrls: ['./matomo.component.less']
})
export class MatomoComponent implements OnInit, OnDestroy {

  matomoURL: string = 'https://isf-regress.skblab.ru/';
  setSiteId: string = '2';
  fileName: string = 'stat';
  destroy$: Subject<void> = new Subject<void>();

  get inited(): boolean {
    return this.matomoInjectorService.inited;
  }

    constructor(
      public matomoInjectorService: MatomoInjectorService,
      private titleService: TitleService,
      private appService: AppService,
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
        this.destroy$.next();
    }

    initMatomoService() {
      this.matomoInjectorService.init(this.matomoURL, this.fileName, this.setSiteId);
      this.titleService.updateTitle();
      setTimeout(() => {
        this.appService.logged();
      }, 100);
    }

}
