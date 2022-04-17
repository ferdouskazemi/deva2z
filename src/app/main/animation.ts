import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";
export const slideInAnimation = trigger('routeAnimations', [

      transition('* => team', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            height: '100vh',
            position: 'fixed',
            width: '100%',
          })
        ]),
        query(':enter', [
          style({
            transform: 'translateY(100%)'
          })
        ]),
        group([
          query(':enter', [
            animate('400ms ease-out', style({
              transform: 'translateY(0%)'
            }))
          ])
        ]),
        query(':enter', animateChild()),
      
      ]),
      transition('team => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            height: '100vh',
            position: 'fixed',
            width: '100%',
          })
        ]),
        query(':enter', [
          style({
            transform: 'translateY(-100%)'
          })
        ]),
        group([
          query(':enter', [
            animate('400ms ease-out', style({
              transform: 'translateY(0%)'
            }))
          ])
        ]),
        query(':enter', animateChild()),]),
        transition('* => aboutUs', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        
        ]),
        transition('aboutUs => *', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(-100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        ]),
        transition('* => contact', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        
        ]),
        transition('contact => *', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(-100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        ]),
        transition('* => faq', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        
        ]),
        transition('faq => *', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(-100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        ]),
        transition('* => service', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        
        ]),
        transition('service => *', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(-100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        ]),
        transition('* => team', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        
        ]),
        transition('team => *', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(-100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        ]),
        transition('* => feedback', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        
        ]),
        transition('feedback => *', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              height: '100vh',
              position: 'fixed',
              width: '100%',
            })
          ]),
          query(':enter', [
            style({
              transform: 'translateY(-100%)'
            })
          ]),
          group([
            query(':enter', [
              animate('400ms ease-out', style({
                transform: 'translateY(0%)'
              }))
            ])
          ]),
          query(':enter', animateChild()),
        ]),
    ])


    



  


    


    
  
  