import { Injectable } from '@angular/core';
import { Annonce } from './annonce';
import {  HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {


  annonces: Annonce[] = [];
  private apiUrl: string = 'http://localhost:3000/bdd';

  constructor(private http: HttpClient) {
     // console.log(this.getAnnonces());
    //  console.log('yooo');
   }
  
   ajoutAnnonces( id: number, title: string, content: string, price: number, localisation: string, image: string, customer: Customers){
     let a: Annonce = { 
      id : id, 
      title: title,
      content: content,
      price: price,
      localisation: localisation,
      image: image,
      customer: customer
     }
     this.annonces.push(a);
   }

  getAnnonces() {
    return this.http.get('http://localhost:3000/bdd');
  }

}


