import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';
import { Customers } from '../customers';
import { customersListe } from '../mock-customers';

@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.css']
})
export class CreateAnnonceComponent implements OnInit {

  private annonce: Annonce;
  private customer: Customers;
  customers: Customers[] = customersListe;

  constructor() { }

  ngOnInit() {
    this.annonce = new Annonce();
    this.customer = new Customers();
  }

}
