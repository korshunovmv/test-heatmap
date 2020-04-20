import { MenuItem, MenuItemConfig } from '../menu-item';

export type MenuItemConfigType = MenuItemConfig | ShopMenuItemConfig;

export const isShopMenuItem = (menuItem: MenuItemConfigType): menuItem is ShopMenuItemConfig => {
    return ['shops', 'TRADE', 'ITRADE', 'INVOICE', 'KASSA'].includes(menuItem.code);
};

export interface ShopMenuItemConfig extends MenuItemConfig {

    /** Состояние (ожидает активации, активна и т.д.) */
    state?: string;

    /** Дочернии элементы меню */
    subMenuItems: ShopMenuItemConfig[];

    /** Путь - куда маршрутизировать пользователя при клике на иконку "шестеренка" */
    gearIconPath?: string;
}

// tslint:disable-next-line: no-empty-interface
export interface IShopMenuItem {
    /** Состояние (ожидает активации, активна и т.д.) */
    state: string;

    /** Дочернии элементы меню */
    subMenuItems: ShopMenuItem[];

    /** Путь - куда маршрутизировать пользователя при клике на иконку "шестеренка" */
    gearIconPath: string;
}

export class ShopMenuItem extends MenuItem implements IShopMenuItem {

    state: string;
    subMenuItems: ShopMenuItem[];
    gearIconPath: string;

    isShowGearIcon: boolean;

    /**
     * Доступность шестеренки для данного вида меню
     */
    isGearIconEnabled: boolean;

    constructor(config: ShopMenuItemConfig) {
        super(config);
    }

    showGearIconForSubmenu(code: string) {
        const subMenu = this.findMenuItem(code);

        if (subMenu) {
            subMenu.showGearIcon();
        }
    }

    hideGearIconForSubmenu(code: string) {
        const subMenu = this.findMenuItem(code);

        if (subMenu) {
            subMenu.hideGearIcon();
        }
    }

    /**
     * Показать шестеренку
     */
    showGearIcon() {
        if (this.isGearIconEnabled) {
            this.isShowGearIcon = true;
        }
    }

    /**
     * Скрыть шестеренку
     */
    hideGearIcon() {
        if (this.isGearIconEnabled) {
            this.isShowGearIcon = false;
        }
    }

    private findMenuItem(code: string): ShopMenuItem {
        return this.subMenuItems.find(el => el.code === code);
    }
}

export class TradeShopMenuItem extends ShopMenuItem {
    get isGearIconEnabled(): boolean {
        return this.state === 'work';
    }
}

export class ITradeShopMenuItem extends ShopMenuItem {
    get isGearIconEnabled(): boolean {
        return this.state === 'work';
    }
}

export class InvoiceShopMenuItem extends ShopMenuItem {
    isGearIconEnabled = false;
}

export class KassaShopMenuItem extends ShopMenuItem {
    get isGearIconEnabled(): boolean {
        return this.state === 'work';
    }
}
