import { Injectable } from '@angular/core';

import { get as _get } from 'lodash';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';

import { map } from 'rxjs/operators';
import { MenuItem, PERSONAL_MENU, MenuItemConfig } from '../widgets/sidebar/models';
import { AppService } from 'app/service/app.service';

@Injectable()
export class MenuService {
    private dataSource: BehaviorSubject<any> = new BehaviorSubject<any>({status: {}});
    private menuList$: BehaviorSubject<MenuItem[]> = new BehaviorSubject([]);
    private reportingState: BehaviorSubject<'none' | 'active'> = new BehaviorSubject<'none' | 'active'>('none');

    public readonly data$$ = this.dataSource;
    public readonly reportingState$$ = this.reportingState.asObservable();
    public readonly menuListSource: Observable<MenuItem[]> = this.menuList$.asObservable();

    private get menuList(): MenuItem[] {
        return this.menuList$.getValue() || [];
    }

    constructor(
        private appService: AppService,
    ) {
        this.appService.build$
        .pipe(
            map(build => getCustomMenuList(build))
        )
        .subscribe((menuList: MenuItem[]) => {
            this.updateMenuList(menuList);
        });
    }

    removeMenuItemByCode(code: string) {
        const removeIndex = this.findIndex(code);

        if (removeIndex >= 0) {
            this.removeMenuItem(removeIndex);
        }
    }

    insertOrUpdateMenuItem(menuItem: MenuItem, index: number) {
        if (menuItem && index >= 0) {
            const currentIndex = this.findIndex(menuItem.code);

            if (currentIndex >= 0) {
                this.updateMenuItem(menuItem, index);
            } else {
                this.insertMenuItem(menuItem, index);
            }
        }
    }

    private insertMenuItem(newItem: MenuItem, newItemIndex: number) {
        this.menuList.splice(newItemIndex, 0, newItem);
        this.updateMenuList(this.menuList);
    }

    private updateMenuItem(menuItem: MenuItem, index: number) {
        this.menuList[index] = menuItem;
    }

    private findIndex(code: string): number {
        if (code) {
            return this.menuList.findIndex(el => el.code === code);
        }
    }

    private removeMenuItem(removeIndex: number) {
        this.menuList.splice(removeIndex, 1);
        this.updateMenuList(this.menuList);
    }

    private updateMenuList(list: MenuItem[]) {
        this.menuList$.next(list);
    }

    /** @deprecated */
    changeData(newData: any): void {
        this.dataSource.next(newData);
    }

    /** @deprecated */
    setReportingState(reportingState: 'none' | 'active'): void {
        this.reportingState.next(reportingState);
    }
}

/**
 * Сформировать элементы левого меню на основе CustomersState и EnvironmentState
 */
const getCustomMenuList = (build: string): MenuItem[] => {

      const showMenuItem = (i: MenuItemConfig) =>
          (!i.onlyDelo || build === 'delo') &&
          (!i.notGeb || ['delo', 'skb'].includes(build));

      const menuList: MenuItemConfig[] = PERSONAL_MENU.filter(showMenuItem)
      return menuList.map(el => new MenuItem(el));
};
