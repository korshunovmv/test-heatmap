import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppService } from './app.service';
import { TitleService } from './title.service';

import { MatomoModule } from '../matomo/matomo.module';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatomoModule,
  ],
  declarations: [
  ],
  providers: [
    TitleService,
    AppService,
    ProductsService,
  ],
})

export class ServiceModule {
  constructor(
  ) {
  }
}
