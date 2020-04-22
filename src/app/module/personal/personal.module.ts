import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppCommonModule } from '../../common/common.module';
import { UiModule } from '../../ui/ui.module';
import { PipeModule } from '../../pipe/pipe.module';

import { PersonalRoutingModule } from './personal-routing.module';

import { CardsComponent } from './cards/cards.component';
// import {
//     PersonalHttpBankService,
//     UserDocumentService,
//     PersonalAccountService,
//     EventsService,
//     CopyService,
// } from './services';



// import { PersonalModalModule } from './modal/modal.module';

// import { RightSidebarModule } from './right-sidebar/right-sidebar.module';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
// import { RightSidebarMobileComponent } from './right-sidebar/right-sidebar-mobile.component';
import { WidgetService } from 'app/layouts/services/widget.service';
import { ClipboardModule } from 'ngx-clipboard';
import { DirectiveModule } from 'app/directive/directive.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        AppCommonModule,
        UiModule,
        PipeModule,
        PersonalRoutingModule,
        DirectiveModule,

        ClipboardModule,
    ],
    declarations: [
        CardsComponent,
    ],
    providers: [
    ]
})
export class PersonalModule {
    constructor(
      private widgetService: WidgetService,
      private cfr: ComponentFactoryResolver
    ) {
      widgetService.registerWidget('right-sidebar-personal', RightSidebarComponent, cfr);
      // widgetService.registerWidget('right-sidebar-personal-mobile', RightSidebarMobileComponent, cfr);
    }
}
