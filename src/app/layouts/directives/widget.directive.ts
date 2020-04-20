import { ComponentRef, Directive, Input, OnChanges, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { WidgetService } from '../services/widget.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Directive({
    selector: '[widgetComponent]'
})
export class WidgetComponentDirective implements OnChanges, OnInit, OnDestroy {
    @Input()
    widgetComponent: string;

    componentRef: ComponentRef<any>;

    private component: any;
    private unsubscriber$: Subject<any> = new Subject();

    constructor(
        private widgetService: WidgetService,
        private container: ViewContainerRef
    ) {
    }

    ngOnChanges(): void {
        // if (this.component) {
        //     this.component.instance.options = this.options;
        //     this.component.instance.group = this.group;
        // }
    }

    ngOnInit(): void {
        this.widgetService.widgets$
            .pipe(takeUntil(this.unsubscriber$))
            .subscribe((widgets: any[]) => {
                const widget = widgets.filter(w => w.name === this.widgetComponent);
                if (widget && widget.length) {
                    const component = widget[0].component;
                    const resolver = widget[0].resolver;
                    if (component !== this.component) {
                        this.component = component;
                        const resolvedComponent = resolver.resolveComponentFactory(this.component);
                        this.componentRef = this.container.createComponent(resolvedComponent) as ComponentRef<any>;
                        // this.component.instance.options = this.options;
                        // this.component.instance.group = this.group;
                    }
                } else {
                    if (this.componentRef) {
                        this.container.clear();
                        this.componentRef.destroy();
                        this.component = null;
                        this.componentRef = null;
                    }
                }
            });
    }

    ngOnDestroy(): void {
        this.unsubscriber$.next();
        this.unsubscriber$.complete();
    }

}
