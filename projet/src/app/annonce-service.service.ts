import { Injectable } from '@angular/core';
import { Annonce } from './annonce';
import {  HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {


  annonces: Annonce[] = [];
  private apiUrl: string = 'http://localhost:3000/bdd';

  constructor(private http: HttpClient) {
     // console.log(this.getAnnonces());
     console.log('yooo');
   }
  
   ajoutAnnonces( id: number, title: string){
     let a: Annonce = { 
      id : id, 
      title: title
     }
     this.annonces.push(a);
   }

  getAnnonces() {
    return this.http.get('http://localhost:3000/bdd');
  }

}


