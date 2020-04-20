import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';

export const blindInOut = [
    trigger('blindInOut', [
        transition('void => firstLoad', [ // Самое первое отображение елемента ngif  false => true
            style({ height: '*', opacity: 1 })// style only for transition transition (after transiton it removes)
            // animate(5000, style({opacity: 1})) // the new state of the transition(after transiton it removes)
        ]),
        transition('void => *', [ //  ngif  false => true
            style({ height: 0, opacity: 0 }), // style only for transition transition (after transiton it removes)
            // tslint:disable-next-line:max-line-length
            animate(200, style({ height: '*', opacity: 1 })) // the new state of the transition(after transiton it removes)
        ]),
        transition('* => void', [ //  ngif  true => false
            style({ height: '*', opacity: 1 }),
            // tslint:disable-next-line:max-line-length
            animate(200, style({ height: 0, opacity: 0 })) // the new state of the transition(after transiton it removes)

        ])
    ])
];

export const cardCarouselAnimations = [
    trigger('cardCarouselAnimations', [
        transition('firstLoad => leftmost', [
            style({ width: '*' }),
        ]),
        transition('firstLoad => rightmost', [
            style({ width: '*' }),
        ]),

        transition('void => leftmost', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(0)' }))
        ]),
        transition('void => rightmost', [
            style({ transform: 'translateX(0)' }),
            animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(-100%)' }))
        ]),

        transition('leftmost => void', [
            style({ transform: 'translateX(0)' }),
            animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(-100%)' }))
        ]),
        transition('rightmost => void', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(0)' }))
        ]),

        transition('* => moveRight', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(0)' }))
        ]),
        transition('* => moveLeft', [
            style({ transform: 'translateX(0)' }),
            animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(-100%)' }))
        ]),
    ])
];

export const carouselAnimations = [
    trigger('carouselAnimations', [
        transition('* => moveRight', [
            style({ transform: 'translateX(0)' }),
            animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(-{{offset}}px)' }))
        ]),
        transition('* => moveLeft', [
            style({ transform: 'translateX(-{{offset}}px)' }),
            animate('0.4s cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateX(0)' }))
        ]),
    ])
];
