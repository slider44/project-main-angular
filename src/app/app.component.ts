import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-main';

  toState = 'state1';

  changeState(state: any) {
    this.toState = state;
  }

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }

}
