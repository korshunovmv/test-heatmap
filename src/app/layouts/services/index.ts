import { LayoutModalService } from './modal.service';
import { PartnerInfoService } from './partner-info.service';
import { WidgetService } from './widget.service';
import { MenuService } from './menu.service';

export * from './modal.service';
export * from './partner-info.service';
export * from './widget.service';

export const layoutServices = [
    LayoutModalService,
    PartnerInfoService,
    WidgetService,
    MenuService,
];
