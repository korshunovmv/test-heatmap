import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ModuleLoadingService } from './module-loading.service';

@Injectable()
export class ModulePreloadingHandler implements PreloadingStrategy {

    constructor(private loadingService: ModuleLoadingService) {
    }

    preload(route: Route, fn: () => Observable<any>): Observable<any> {
/*
        if (Math.random() > 0.5) {
            this.loadingService.load(route.loadChildren);
            this.loadingService.fail(route.loadChildren);
            return of (null);
        }
*/
        return fn().pipe(catchError((error: any) => {
            console.group('Loading Error');
            console.error(error);
            console.groupEnd();
            this.loadingService.fail(route.loadChildren);
            return of (null);
        }));
    }
}
