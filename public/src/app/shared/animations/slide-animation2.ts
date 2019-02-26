import { trigger, transition, style, query, animateChild, group, animate } from "@angular/animations";

export const slideInAnimation2 =
trigger('routeAnimations', [
    transition('* <=> *', [
      group([
        query(':enter', [
          style({transform: 'translateX(100%)'}),
          animate('0.4s ease-in-out', style({transform: 'translateX(0%)'}))
        ], {optional: true}),
        query(':leave', [
          style({transform: 'translateX(0%)'}),
          animate('0.4s ease-in-out', style({transform: 'translateX(100%)'}))
        ], {optional: true}),
      ])
    ]),
  ]);
