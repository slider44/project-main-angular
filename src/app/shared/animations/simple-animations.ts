import { trigger, transition, style, query, animateChild, group, animate, state } from "@angular/animations";

export const simpleAnimation =
trigger('changeState', [
    state('state1', style({
      backgroundColor: 'green',
      transform: 'scale(1)'
    })),
    state('state2', style({
      backgroundColor: 'red',
      transform: 'scale(1.5)'
    })),
    transition('*=>state1', animate('300ms')),
    transition('*=>state2', animate('2000ms'))
  ])

  ;