import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UiModule } from 'app/ui/ui.module';
import { RightSidebarComponent } from './right-sidebar.component';
import { NewsService } from './news/news.service';
import { NewsComponent } from './news/news.component';
import { RightSidebarService } from './right-sidebar.service';

@NgModule({
    declarations: [
        RightSidebarComponent,
        NewsComponent
    ],
    exports: [
        RightSidebarComponent,
    ],
    imports: [
        CommonModule,
        UiModule,
        FormsModule,
        RouterModule,
    ],
    providers: [
        NewsService,
        RightSidebarService
    ],
    entryComponents: [
        RightSidebarComponent,
    ]
})
export class RightSidebarModule {

}
