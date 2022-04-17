import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './main/animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'DevA2Z';

  constructor(private contexts: ChildrenOutletContexts) {}

    getRouteAnimationData() {
      return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
          }


}