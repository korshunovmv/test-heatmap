import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ResponsiveModule } from 'ngx-responsive';

import { InputComponent } from './input/input.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { IconComponent } from './icon/icon.component';
import { ControlErrorsComponent } from './errors/errors.component';
import { ShowMoreTextComponent } from './show-more-text/show-more-text.component';
import { DirectiveModule } from '../directive/directive.module';
import { ButtonComponent } from './button/button.component';
import { SmsInputComponent } from './sms-input/sms-input.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { AmountComponent } from './amount/amount.component';
import { DropdownMenuComponent } from './dropdown/menu/menu.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { ShowMoreComponent } from './show-more/show-more.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    DirectiveModule,
    PerfectScrollbarModule,
    ResponsiveModule,
  ],
  declarations: [
    InputComponent,
    TooltipComponent,
    IconComponent,
    ControlErrorsComponent,
    ShowMoreTextComponent,
    ButtonComponent,
    SmsInputComponent,
    DropdownMenuComponent,
    DropdownComponent,
    ModalWindowComponent,
    AmountComponent,
    ScrollbarComponent,
    ShowMoreComponent,
  ],
  exports: [
    FormsModule,
    InputComponent,
    TooltipComponent,
    IconComponent,
    ControlErrorsComponent,
    ShowMoreTextComponent,
    ButtonComponent,
    SmsInputComponent,
    DropdownComponent,
    ModalWindowComponent,
    AmountComponent,
    ScrollbarComponent,
    ShowMoreComponent,
  ],
  entryComponents: [
    DropdownMenuComponent,
  ],
})

export class UiModule {
}
