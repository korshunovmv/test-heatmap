import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class RoutesService {
    routes: RouteState[] = [];

    public routesState$: Subject<boolean> = new Subject<boolean>();

    constructor() {
    }

    setConfig(routes: Routes): void {
        this.routes = [];
        for (const route of routes) {
            if (route.path.indexOf('#') === -1/* && route.outlet === PRIMARY_OUTLET*/) {
                const r = new RouteState();
                r.path = route.path;
                r.title = (route.hasOwnProperty('data') && route.data.hasOwnProperty('title')) ? route.data.title : '';
                r.components = route.hasOwnProperty('component') ? getClassName(route.component) : '';
                if (route.path.indexOf(':') !== -1) { r.full = false; }
                if (route.hasOwnProperty('redirectTo')) { r.redirect = route.redirectTo; }
                if (route.path === '**') { r.any = true; }
                if (route.hasOwnProperty('loadChildren')) {
                    if ((<any>route)._loadedConfig !== undefined) {
                        const loadedConfig = (<any>route)._loadedConfig;
                        this.routes = this.routes.concat(this.processChildren(r, loadedConfig.routes));
                    } else {
                        this.routes = this.routes.concat([r]);
                    }
                } else {
                    this.routes = this.routes.concat(this.processChildren(r, route.children));
                }
            }
        }
        this.routesState$.next();
    }

    private processChildren(current: RouteState, routes: Routes): RouteState[] {
        if (!routes) {
            return [current];
        }
        if (routes.length === 0) {
            return [current];
        }

        let rs: RouteState[]  = [];
        for (const route of routes) {
            const r = new RouteState();
            r.path = joinParts(current.path, route.path);
            // tslint:disable-next-line:max-line-length
            r.title = joinParts(current.title, (route.hasOwnProperty('data') && route.data.hasOwnProperty('title')) ? route.data.title : '', ' - ');
            r.components = joinParts(current.components, route.hasOwnProperty('component') ? getClassName(route.component) : '', ':');
            if (route.path.indexOf(':') !== -1) { r.full = false; }
            if (route.hasOwnProperty('redirectTo')) { r.redirect = joinParts(current.path, route.redirectTo); }
            if (route.path === '**') { r.any = true; }
            if (route.hasOwnProperty('loadChildren')) {
                if ((<any>route)._loadedConfig !== undefined) {
                    const loadedConfig = (<any>route)._loadedConfig;
                    rs = rs.concat(this.processChildren(r, loadedConfig.routes));
                } else {
                    rs = rs.concat([r]);
                }
            } else {
                rs = rs.concat(this.processChildren(r, route.children));
            }
        }
        return rs;
    }
}

export class RouteState {
    path: string;
    full: boolean = true;
    any: boolean = false;
    redirect: string;
    title: string;
    components: string;
    children: RouteState[];
}

function getClassName(c: any): string {
    const str = c.toString();
    const matches = str.match(/function\s+([^\s]+?)\(/i);
    return matches ? matches[1] : '';
}

function joinParts(path: string, part: string, separator: string = '/'): string {
    if (!part) {
        return path;
    }
    if (!path) {
        return part;
    }
    if (part.substr(0, 1) === separator) {
        // return part.substr(1);
        return part;
    }
    return [path, part].join(separator);
}
