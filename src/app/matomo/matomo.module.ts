import { NgModule } from '@angular/core';
import { MatomoTrackerService } from './matomo-tracker.service';
import { MatomoInjectorService } from './matomo-injector.service';

@NgModule({
    imports: [],
    declarations: [
    ],
    exports: [
    ],
    providers: [
      MatomoInjectorService,
      MatomoTrackerService,
    ]
})
export class MatomoModule {
}
