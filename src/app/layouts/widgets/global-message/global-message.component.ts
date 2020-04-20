import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

// import { AuthService } from "app/core/service/auth.service";

@Component({
    selector: 'widget-global-message',
    templateUrl: './global-message.component.html',
    styleUrls: ['./global-message.component.less'],
    animations: [
        trigger('blindInOut', [
            transition('void => *', [ //  ngif  false => true
                style({height: 0, opacity: 0}), // style only for transition transition (after transiton it removes)
                animate(300, style({height: '*', opacity: 1})) // the new state of the transition(after transiton it removes)
            ]),
            transition('* => void', [ //  ngif  true => false
                style({height: '*', opacity: 1}),
                animate(300, style({height: 0, opacity: 0})) // the new state of the transition(after transiton it removes)
            ])
        ])
    ]

})
export class GlobalMessageComponent implements OnInit {

    message: string;

    constructor(/*private authService:AuthService*/) {}

    ngOnInit() {
        // this.authService.globalMessage.subscribe(message => { this.message = message });
    }
}
