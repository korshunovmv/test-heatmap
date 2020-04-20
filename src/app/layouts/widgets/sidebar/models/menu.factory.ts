import { Injectable } from '@angular/core';

import {
    ShopMenuItem,
    ShopMenuItemConfig,
    TradeShopMenuItem,
    ITradeShopMenuItem,
    InvoiceShopMenuItem,
    KassaShopMenuItem,
} from './shops/shops.menu';

@Injectable()
export class MenuFactory {

    createShopMenu(menuItemConfig: ShopMenuItemConfig): ShopMenuItem {
        switch (menuItemConfig.code) {
            case 'shops': {
                if (menuItemConfig.subMenuItems.length) {
                    const shopMenuItem = new ShopMenuItem(menuItemConfig);
                    const subMenuItems = menuItemConfig.subMenuItems.map(el => this.createShopMenu(el));
                    shopMenuItem.subMenuItems = subMenuItems;
                    return shopMenuItem;
                }
                return new ShopMenuItem(menuItemConfig);
            }
            case 'TRADE': {
                return new TradeShopMenuItem(menuItemConfig);
            }
            case 'ITRADE': {
                return new ITradeShopMenuItem(menuItemConfig);
            }
            case 'INVOICE': {
                return new InvoiceShopMenuItem(menuItemConfig);
            }
            case 'KASSA': {
                return new KassaShopMenuItem(menuItemConfig);
            }
        }
    }
}
