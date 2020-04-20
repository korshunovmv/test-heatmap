import { Injectable } from '@angular/core';
import {
    LoadChildren,
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    RouteConfigLoadEnd,
    RouteConfigLoadStart,
    Router
} from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class ModuleLoadingService {
    private subscription: Subscription;

    private currentEventId: number;
    private currentEventKey: LoadChildren;

    modules: Array<ModuleLoadingState> = [];

    public modulesState$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router) {
    }

    get isLoaded(): boolean {
        return this.modules.reduce((state: boolean, module: ModuleLoadingState): boolean => {
            return module.loaded && state;
        }, true);
    }

    get allModulesCount(): number {
        return this.modules.length;
    }

    get loadedModulesCount(): number {
        return this.modules.filter((module: ModuleLoadingState): boolean => {
            return module.loaded;
        }).length;
    }

    enable(): void {
        this.subscription = this.router.events.subscribe(e => this.observer(e));
    }

    disable(): void {
        this.subscription.unsubscribe();
    }

    reset(): void {
        this.modules = [];
    }

    load(key: LoadChildren): void {
        const moduleState: ModuleLoadingState = this.getModuleState(key);
        moduleState.attempts++;
        moduleState.state = 'loading';
        this.modulesState$.next(true);
    }

    done(key: LoadChildren): void {
        const moduleState: ModuleLoadingState = this.getModuleState(key);
        moduleState.loaded = true;
        moduleState.state = 'loaded';
        this.modulesState$.next(true);
    }

    fail(key: LoadChildren): void {
        const moduleState: ModuleLoadingState = this.getModuleState(key);
        moduleState.fails++;
        moduleState.state = 'failed';
        this.modulesState$.next(true);
    }

    private observer(event: any): void {
        // Когда загрузка модуля инициирована по переходу, нужно сохранить индекс перехода,
        // чтобы потом обработать ошибку, связанную с загрузкой
        if ((event instanceof NavigationStart)) {
            this.currentEventId = event.id;
            this.currentEventKey = null;
        // Загрузка модуля
        } else if ((event instanceof RouteConfigLoadStart) || (event instanceof RouteConfigLoadEnd)) {
            const key: LoadChildren = event.route.loadChildren;
            // Загрузка модуля инициирована по переходу, нужно сохранить ключ
            if (this.currentEventId && !this.currentEventKey) {
                this.currentEventKey = key;
            // Так не должно происходить
            } else if (this.currentEventId && this.currentEventKey && this.currentEventKey !== key) {
                // throw new Error('Нарушение последовательности событий при загрузке модулей!');
            }
            if ((event instanceof RouteConfigLoadStart)) {
                this.load(key);
            } else if ((event instanceof RouteConfigLoadEnd)) {
                // событие RouteConfigLoadEnd вызывается до того, как конфиг парсится
                setTimeout(() => {
                    const loadedConfig = (<any>event).route._loadedConfig;
                    for (const route of loadedConfig.routes) {
                        if (route.hasOwnProperty('loadChildren')) {
                            this.getModuleState(route.loadChildren);
                        }
                    }
                    this.done(key);
                });
            }
        // Завершение перехода
        } else if ((event instanceof NavigationEnd) || (event instanceof NavigationCancel)) {
            this.currentEventId = null;
            this.currentEventKey = null;
        // Ошибка перехода
        } else if ((event instanceof NavigationError)) {
            if (event.error && event.error.hasOwnProperty('message') && event.error.message) {
                // Проверка текста ошибки на ошибку загрузки
                const matches = event.error.message.match(/Loading chunk (\d+) failed/)
                    || event.error.message.match(/Cannot read property 'routes' of undefined/);
                // Когда произошла ошибка загрузки и ключ загружаемого модуля был сохранён
                if (matches) {
                    if (this.currentEventKey && this.currentEventId === event.id) {
                        this.fail(this.currentEventKey);
                    }
                } else {
                    console.group('Navigation Error');
                    console.error(event.error);
                    console.groupEnd();
                    // throw new Error(event.error);
                }
            }
            // В любом случае ошибка завершает переход
            this.currentEventId = null;
            this.currentEventKey = null;
        }
    }

    /**
     * Возвращает объект состояния по ключу
     * @param key
     * @returns {any}
     */
    private getModuleState(key: LoadChildren): ModuleLoadingState {
        const moduleStates: ModuleLoadingState[] =
            this.modules.filter((state: ModuleLoadingState) => {
                return state.module === key;
            });
        if (moduleStates.length) {
            return moduleStates[0];
        }
        const moduleState = new ModuleLoadingState();
        moduleState.module = key;
        this.modules.push(moduleState);
        return moduleState;
    }
}

export class ModuleLoadingState {
    module: LoadChildren;
    loaded: boolean = false;
    attempts: number = 0;
    fails: number = 0;
    state: ModuleLoadingStates = 'init';
}

export type ModuleLoadingStates = 'init' | 'loading' | 'failed' | 'loaded';
