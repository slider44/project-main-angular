import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { slideInAnimation } from 'src/app/shared/animations/slide-animation';
import { simpleAnimation } from 'src/app/shared/animations/simple-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [simpleAnimation]
})
export class HomeComponent implements OnInit {


  
  constructor() { }

  ngOnInit() {
   
  }

}
