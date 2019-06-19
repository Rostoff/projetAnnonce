import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';
import { AnnonceList } from '../mock-annonce';
import { AnnonceServiceService } from '../annonce-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {

  annonces: Annonce[] = [];
  //annonces = Observable<Annonce[]>;
  creationMode = false;
  //annonces: any[] = AnnonceList;

  constructor(private annonceServiceService: AnnonceServiceService) { 
    this.annonces = annonceServiceService.annonces;
  }

  ngOnInit() {
    
    // this.annonceServiceService.getAnnonces().subscribe({
    //     next(value) { console.log(value); },
    //     complete() { console.log('C\'est fini!'); }
    // });

    //this.annonces = this.annonceServiceService.getAnnonces();
    this.recupAnnonce();
  }



  recupAnnonce() {
     this.annonceServiceService.getAnnonces().subscribe((annonce: Annonce[]) => {
      for (let i in annonce) {
        this.annonceServiceService.ajoutAnnonces(annonce[i].id, annonce[i].title, annonce[i].content, annonce[i].price, annonce[i].localisation, annonce[i].image, annonce[i].customer);
        console.log(annonce[i].customer.customerName);
      }
    }
     );
  }

  

  onClick(i: number) {
    if (this.annonces[i].details === true) {
      this.annonces[i].details = false;
    } else {
      this.annonces[i].details = true;
    }

  }
}
