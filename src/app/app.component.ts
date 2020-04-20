import { Component, OnInit, OnDestroy } from '@angular/core';
// import { TitleService } from './title.service';
import { AppService } from './service/app.service';
import { ModuleLoadingService } from './routing/module-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'Tour of Heroes';

  constructor(
    // private titleService: TitleService,
    public appService: AppService,
    // private scrollToTop: ScrollToTopService,
    // private navigationLogger: NavigationLoggerService,
    private loadingLogger: ModuleLoadingService,
  ) {
    setTimeout(() => {
      appService.init();
    }, 100);
  }

  ngOnInit(): void {
    // this.scrollToTop.enable();
    // this.navigationLogger.enable();
    this.loadingLogger.enable();
  }

  ngOnDestroy(): void {
    // this.scrollToTop.disable();
    // this.navigationLogger.disable();
    this.loadingLogger.disable();
  }
}
