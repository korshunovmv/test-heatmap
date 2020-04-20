import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { UiModule } from '../../ui/ui.module';
import { DirectiveModule } from '../../directive/directive.module';
import { LoginComponent } from './login/login.component';
import { AppCommonModule } from '../../common/common.module';
import { SmsComponent } from './sms/sms.component';
import { PipeModule } from '../../pipe/pipe.module';
import { LoginModuleComponent } from './login-module.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginRoutingModule,
    CommonModule,
    RouterModule,

    AppCommonModule,
    PipeModule,
    DirectiveModule,
    UiModule,
  ],
  declarations: [
    LoginModuleComponent,
    LoginComponent,
    SmsComponent,
  ],
  providers: [
  ]
})

export class LoginModule {
  constructor(
  ) {
  }
}
