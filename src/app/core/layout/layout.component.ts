import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate, group, query, animateChild } from '@angular/animations';
import { slideInAnimation2 } from 'src/app/shared/animations/slide-animation2';
import { slideInAnimation } from 'src/app/shared/animations/slide-animation';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    slideInAnimation2]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPage(outlet) {
    //return outlet.activatedRouteData['page'] || 'one';

    // return outlet.activatedRouteData['page'] || 'one';
  
    return outlet.activatedRouteData.page;
    
  }

}
