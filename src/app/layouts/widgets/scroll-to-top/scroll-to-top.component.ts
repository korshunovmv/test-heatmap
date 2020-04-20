import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'widget-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.less']
})
export class ScrollToTopComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    goTop(): void {
        window.scrollTo(0, 0);
    }

}
