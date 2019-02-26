import { Component, OnInit } from '@angular/core';
import { slideInAnimation2 } from 'src/app/shared/animations/slide-animation2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // getPage(outlet) {
  //   //return outlet.activatedRouteData['page'] || 'one';

  //   // return outlet.activatedRouteData['page'] || 'one';

  //   console.log(outlet.activatedRouteData.page);
  //   return outlet.activatedRouteData.page;
    
    
  // }


}
