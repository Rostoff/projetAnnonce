import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';
import { AnnonceList } from '../mock-annonce';
import { AnnonceServiceService } from '../annonce-service.service';


@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {

  annonces: Annonce[] = AnnonceList;
  creationMode = false;
  //annonces: any[] = AnnonceList;

  constructor(private annonceServiceService: AnnonceServiceService) { }

  ngOnInit() {
    //this.annonces = this.annonceServiceService.getAnnonces();
  }

  onClick(i: number) {
    if (this.annonces[i].details === true) {
      this.annonces[i].details = false;
    } else {
      this.annonces[i].details = true;
    }

  }
}
