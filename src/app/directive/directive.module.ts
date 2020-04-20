import { NgModule }       from '@angular/core';
import { AppBuildDirective } from './app-build.directive';
import { InputTextMaskDirective } from './input-text-mask.directive';
import { AppNotBuildDirective } from './app-not-build.directive';
import { AppStandaloneDirective } from './app-standalone.directive';
import { AppProdDirective } from './app-prod.directive';


@NgModule({
  imports: [

  ],
  declarations: [
    AppBuildDirective,
    AppNotBuildDirective,
    InputTextMaskDirective,
    AppStandaloneDirective,
    AppProdDirective,
  ],
  exports: [
    AppBuildDirective,
    AppNotBuildDirective,
    InputTextMaskDirective,
    AppStandaloneDirective,
    AppProdDirective,
  ]

})

export class DirectiveModule {
}
