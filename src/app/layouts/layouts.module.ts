import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from '../ui/ui.module';
import { PipeModule } from '../pipe/pipe.module';

import { layoutServices } from './services';

import { layoutComponents } from './layouts';

import { WidgetComponentDirective } from './directives/widget.directive';
import { widgetsComponents } from './widgets';
import { DirectiveModule } from '../directive/directive.module';
import { SidebarComponent } from './widgets/sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        UiModule,
        PipeModule,
        DirectiveModule,
    ],
    exports: [
        ...layoutComponents,
    ],
    declarations: [
        ...layoutComponents,

        WidgetComponentDirective,
        ...widgetsComponents,
        SidebarComponent,
    ],
    providers: [
        ...layoutServices
    ],
    entryComponents: [
    ]
})
export class LayoutsModule {
    constructor(
    ) {
    }
}
