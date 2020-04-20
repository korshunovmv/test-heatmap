import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ResponsiveConfig, ResponsiveModule } from 'ngx-responsive';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { MatomoModule } from './matomo/matomo.module';
import { MatomoInjectorService } from './matomo/matomo-injector.service';
import { MatomoTrackerService } from './matomo/matomo-tracker.service';
import { UiModule } from './ui/ui.module';
import { DirectiveModule } from './directive/directive.module';
import { AppCommonModule } from './common/common.module';
import { PipeModule } from './pipe/pipe.module';
import { ServiceModule } from './service/service.module';
import { LayoutsModule } from './layouts/layouts.module';
import { GuardModule } from './guard/guard.module';
import { RoutingHandler } from './routing/routing.handler';
import { ModuleLoadingService } from './routing/module-loading.service';
import { RoutesService } from './routing/routes.service';
import { environment } from '../environments/environment';
import { TitleService } from './service/title.service';

const config = {
  breakPoints: {
      xs: {max: 600},
      sm: {min: 601, max: 959},
      md: {min: 960, max: 1279},
      lg: {min: 1280, max: 1919},
      xl: {min: 1920}
  },
  debounceTime: 100 // allow to debounce checking timer
};

export function ResponsiveDefinition(): ResponsiveConfig {
  return new ResponsiveConfig(config);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    GuardModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    MatomoModule,
    AppCommonModule,
    PipeModule,
    DirectiveModule,
    UiModule,
    ServiceModule,
    LayoutsModule,
    ResponsiveModule.forRoot(),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [
    RoutingHandler,
    ModuleLoadingService,
    RoutesService,
  ],
})
export class AppModule {
  constructor(
    matomoInjectorService: MatomoInjectorService,
    matomoTrackerService: MatomoTrackerService,
    private routingHandler: RoutingHandler,
    private titleService: TitleService,

    // private injector: Injector,
    // private router: Router,
    //
    // private initHandler: InitHandler,
    // private sessionHandler: SessionHandler,
    // private appService: AppService,
  ) {
    const matomoSiteId = '2';
    matomoInjectorService.init(environment.matomoUrl, matomoSiteId);
    // matomoTrackerService.setSiteId(matomoSiteId);
  }
}
