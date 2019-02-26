import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({providedIn: 'root'})
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb(){

    let  skills =  [
      {    name:  'Java', years: 5},
      {   name:  'JavaScript', years: 2 },
      {   name:  'Angular', years: 1 } ,
      {   name:  'Powerbuilder', years: 1},
      {   name:  'Node.js', years: 1 }
    ];

    return { skills };
   
  }
}
