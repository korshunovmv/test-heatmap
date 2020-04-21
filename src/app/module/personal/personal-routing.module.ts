import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DepositsComponent } from './deposits/deposits.component';


const personalRoutes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: '/deposits',
  },
  {
      path: 'cards',
      component: CardsComponent,
  },
  {
    path: 'deposits',
    component: DepositsComponent,
  },
];

@NgModule({
    imports: [
        RouterModule.forChild(personalRoutes)
    ],
    exports: [
        RouterModule,
    ],
})
export class PersonalRoutingModule {
}
