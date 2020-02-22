import { sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild } from '@angular/animations';
const query = (s, a, o = { optional: true }) => q(s, a, o);

export const routerTransition = trigger('routerTransition', [
  // when transitioning ever
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter', style({ transform: 'scale(0)', opacity: 0 })),
    query(':leave', animateChild()),
    sequence([
      group([
        query(':leave', [
          style({ transform: 'scale(1)', opacity: 1 }),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
          style({ transform: 'scale(0.9)', opacity: 0 }))
        ]),
        query(':enter', [
          style({ transform: 'scale(0.9)', opacity: 0 }),
          animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
          style({ transform: 'scale(1)', opacity: 1 })),
        ]),
      ]),
    ]),
    query(':enter', animateChild()),
  ])
]);