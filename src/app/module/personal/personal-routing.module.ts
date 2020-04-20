import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';


const personalRoutes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: '/cards',
  },
  {
      path: 'cards',
      component: CardsComponent
  },
];

@NgModule({
    imports: [
        RouterModule.forChild(personalRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PersonalRoutingModule {
}
