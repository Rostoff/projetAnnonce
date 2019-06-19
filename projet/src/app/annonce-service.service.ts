import { Injectable } from '@angular/core';
import { Annonce } from './annonce';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {

  private annonces: Annonce[];
  private apiUrl: string = 'http:localhost:3000/bdd';

  constructor(private http: HttpClient) {
     // console.log(this.getAnnonces());

   }

  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.apiUrl}`);
  };
}


