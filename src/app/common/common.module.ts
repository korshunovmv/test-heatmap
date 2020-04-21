import { NgModule }       from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MatomoComponent } from './matomo/matomo.component';
import { UiModule } from 'app/ui/ui.module';


@NgModule({
  imports: [
    UiModule,
  ],
  declarations: [
    PageHeaderComponent,
    MatomoComponent,
  ],
  exports: [
    PageHeaderComponent,
    MatomoComponent,
  ]

})

export class AppCommonModule {
}
