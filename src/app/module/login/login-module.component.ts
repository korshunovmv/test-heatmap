import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'app/service/app.service';

@Component({
    selector: 'app-login-module',
    template: '<router-outlet></router-outlet>'
})
export class LoginModuleComponent implements OnInit, OnDestroy {
    private s: Subscription;

    constructor(
        private appService: AppService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.s = this.appService.sessionState$.subscribe(sessionState => {
            if (sessionState === 'add_authorized') {
                this.router.navigate(['/sms']);
            } else if (sessionState === 'not_authorized') {
                this.router.navigate(['/login']);
            }
        });
    }

    ngOnDestroy() {
        this.s.unsubscribe();
    }

}
