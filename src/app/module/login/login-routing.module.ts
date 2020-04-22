import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModuleComponent } from './login-module.component';
import { LoginComponent } from './login/login.component';
import { SmsComponent } from './sms/sms.component';
import { MatomoComponent } from './matomo/matomo.component';

const loginRoutes: Routes = [
    {
      path: '',
      redirectTo: '/matomo-init'
    },
    {
      path: 'matomo-init',
      component: MatomoComponent,
    },
    // {
    //     path: '',
    //     component: LoginModuleComponent,
    //     children: [
    //         {
    //             path: 'login',
    //             component: LoginComponent,
    //             data: {
    //                 title: 'Вход'
    //             }
    //         },
    //         {
    //             path: 'sms',
    //             component: SmsComponent,
    //             data: {
    //                 title: 'Подтверждение входа'
    //             }
    //         },
    //         {
    //             path: '**',
    //             redirectTo: '/login'
    //         },
    //     ]
    // },
];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ],
    exports: [
        RouterModule,
    ],
})
export class LoginRoutingModule {
}
