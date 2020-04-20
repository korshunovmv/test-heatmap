import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class WidgetService {
    private widgets: any[] = [];

    public widgets$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

    registerWidget(name: string, componentRef: any, resolverRef: ComponentFactoryResolver) {
        this.deleteWidget(name);
        this.widgets.push({
            name: name,
            component: componentRef,
            resolver: resolverRef
        });
        this.widgets$.next(this.widgets);
    }

    deleteWidget(name: string) {
        this.widgets = this.widgets.filter(w => w.name !== name);
    }
}
