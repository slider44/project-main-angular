import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({providedIn: 'root'})
export class DataService implements InMemoryDbService{
  constructor() { }
  createDb(){

    let  products =  [
      {  id:  1,  name:  'Classic BBQ', desc: "This is awesome BBQ", price: 250 },
      {  id:  2,  name:  'Sweet and Spicy', desc: "It is sweet and spicy" , price: 250 }
        
    ];

    return { products };

   }
}