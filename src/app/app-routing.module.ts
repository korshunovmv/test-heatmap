import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AnonymousGuard } from './guard/anonymous.guard';
import { LoginLayoutComponent, PersonalLayoutComponent } from './layouts/layouts';
import { PersonalGuard } from './guard/personal.guard';
import { ModulePreloadingHandler } from './routing/module-preloading.handler';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    canActivateChild: [AnonymousGuard],
    canActivate: [AnonymousGuard],
    data: {
        session: 'anonymous',
    },
    loadChildren: 'app/module/login/login.module#LoginModule',
  },
  {
    path: '',
    component: PersonalLayoutComponent,
    canActivateChild: [PersonalGuard],
    canActivate: [PersonalGuard],
    data: {
        session: 'personal',
    },
    loadChildren: 'app/module/personal/personal.module#PersonalModule',
  },
  {
    path: '',
    component: PersonalLayoutComponent,
    canActivateChild: [PersonalGuard],
    canActivate: [PersonalGuard],
    data: {
        session: 'personal',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/cards',
      },
      {
          path: 'login',
          redirectTo: '/cards',
      },
      {
          path: 'sms',
          redirectTo: '/cards',
      },
    ]
  },
];


// let tracingEnabled: boolean = false;  // set true to start spamming

// if (environment.production) {
//     tracingEnabled = false;
// }

export function errorHandler(error: any): void {
    // console.log(error);
}

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false,
            enableTracing: false,
            preloadingStrategy: ModulePreloadingHandler,
            errorHandler: errorHandler,
        })
    ],
    providers: [
        ModulePreloadingHandler,
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {
}
