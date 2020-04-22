import { NgModule }       from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header.component';
import { UiModule } from 'app/ui/ui.module';


@NgModule({
  imports: [
    UiModule,
  ],
  declarations: [
    PageHeaderComponent,
  ],
  exports: [
    PageHeaderComponent,
  ]

})

export class AppCommonModule {
}
