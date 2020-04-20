import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    CanLoad,
    Route
} from '@angular/router';
import { AppService } from '../service/app.service';

@Injectable()
export class PersonalGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private router: Router, private appService: AppService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        const url: string = `/${route.path}`;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        const resultCheck: boolean = this.appService.isAuthenticated /*&& this.appService.customers$.value.isPersonal*/;
        // this.authService.setGlobalMessage('');
        // if (['/sms_otp', '/otp_code', '/iscc', '/password-recovery', '/password-change'].indexOf(url) > -1) {
        //     resultCheck = this.authService.isCheckedLogin;
        // } else {
        //     resultCheck = this.authService.isLoggedIn;
        //     if (!resultCheck && url && url !== '/') {
        //         this.authService.loginUrl = url;
        //     }
        // }
        return resultCheck;
    }
}
