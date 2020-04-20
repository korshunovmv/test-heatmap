import { Injectable } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';

import { combineLatest } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { ModuleLoadingService } from './module-loading.service';
import { RoutesService } from './routes.service';
import { AppService } from '../service/app.service';

@Injectable()
export class RoutingHandler {
    private first: boolean = true;

    constructor(
        private router: Router,
        private appService: AppService,
        private loadingService: ModuleLoadingService,
        private routesService: RoutesService,
    ) {
        const baseHref = document.getElementsByTagName('base')[0].href.replace(window.location.origin, '');
        const location = window.location.pathname.replace(baseHref, '/').replace('//', '/') + window.location.search;

        combineLatest(
          this.appService.sessionState$,
          this.loadingService.modulesState$,
        )
            .pipe(
                map((data: any[]) => {
                    const initialized = this.loadingService.isLoaded;
                    let sessionState: string;
                    [sessionState] = data;
                    if (!initialized) {
                        return 'initialization';
                    } else if (sessionState === 'not_authorized' || sessionState === 'add_authorized') {
                        return 'anonymous';
                    } else if (sessionState === 'logged') {
                      return 'personal';
                    }
                }),
                distinctUntilChanged()
            )
            .subscribe((routingSession: RoutingSessionMode) => {
                // tslint:disable-next-line
                console.log('=== Routing Session: ', routingSession);
                this.resetRouter(routingSession);
                if (
                    this.first &&
                    routingSession !== 'initialization' &&
                    (routingSession !== 'anonymous' || /client-profile/.test(location))
                ) {
                    this.first = false;
                    this.router.navigateByUrl(location);
                } else {
                    this.router.navigateByUrl('/');
                }
            });
    }

    resetRouter(sessionMode?: RoutingSessionMode): void {
        sessionMode = sessionMode || 'initialization';
        const routes = this.router.config;
        routes.forEach((route: Route) => {
            if (!route.hasOwnProperty('data')) {
                route.data = {};
            }
            if (!route.data.hasOwnProperty('_path')) {
                route.data._path = route.path;
            }
        });
        routes.forEach((route: Route) => {
            if (route.hasOwnProperty('data') && route.data.hasOwnProperty('session')) {
                route.path = '#disabled#';
                if (route.data.session === sessionMode) {
                    if (route.data.hasOwnProperty('_path')) {
                        route.path = route.data._path;
                    }
                }
            }
        });
        this.router.resetConfig(routes);
        this.routesService.setConfig(routes);
    }

}

export type RoutingSessionMode = 'initialization' | 'anonymous' | 'corporate' | 'personal' | 'corporate-notcustomer';
