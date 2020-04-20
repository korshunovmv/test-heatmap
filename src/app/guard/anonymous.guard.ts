import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    CanLoad, Route
} from '@angular/router';
import { AppService } from '../service/app.service';

@Injectable()
export class AnonymousGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(
      private router: Router,
      private appService: AppService
    ) {
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
        const resultCheck: boolean = this.appService.isAnonymous;
        return resultCheck;
    }
}
