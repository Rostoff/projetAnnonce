import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';
import { AnnonceList } from '../mock-annonce';


@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {

  annonces: Annonce[] = AnnonceList;

  constructor() { }

  ngOnInit() {
  }

  onClick(i: number) {
    if(this.annonces[i].details == true){
      this.annonces[i].details = false;
    }
    else {
      this.annonces[i].details = true;
    }

  }
}
