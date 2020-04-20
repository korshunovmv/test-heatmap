import { NgModule }       from '@angular/core';
import { AnonymousGuard } from './anonymous.guard';
import { PersonalGuard } from './personal.guard';


@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: [
    AnonymousGuard,
    PersonalGuard,
  ]
})

export class GuardModule {
  constructor(
  ) {
  }
}
