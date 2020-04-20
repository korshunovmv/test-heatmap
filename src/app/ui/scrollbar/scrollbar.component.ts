import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

@Component({
    selector: 'ui-scrollbar',
    templateUrl: './scrollbar.component.html',
    styleUrls: ['./scrollbar.component.less']
})
export class ScrollbarComponent implements OnInit {
    @Input()
    disabled: boolean;

    @ViewChild(PerfectScrollbarComponent) public componentRef?: PerfectScrollbarComponent;

    constructor(public elementRef: ElementRef) {
    }
    ngOnInit() {
    }

    getElement(querySelector: string): HTMLElement {
        if (this.componentRef) {
            return this.componentRef.directiveRef.elementRef.nativeElement.querySelector(querySelector);
        }
    }
}
