import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';
import { Customers } from '../customers';
import { customersListe } from '../mock-customers';
import { CustomersServiceService } from '../customers-service.service';

@Component({
  selector: 'app-create-annonce',
  templateUrl: './create-annonce.component.html',
  styleUrls: ['./create-annonce.component.css']
})
export class CreateAnnonceComponent implements OnInit {

  private annonce: Annonce;
  customers: Customers[] = [];

  constructor(private customersServiceService : CustomersServiceService) {
    this.customers = customersServiceService.customers;
   }

  ngOnInit() {
    this.annonce = new Annonce();
    this.recupCustomers();
  }



  recupCustomers() {
     this.customersServiceService.getCustomers().subscribe((customer: Customers[]) => {
      for (let i in customer) {
        this.customersServiceService.ajoutCustomers(customer[i].customerName, customer[i].customerPassword, customer[i].customerEmail, customer[i].customerPhone);
      }
    }
     );
  }
}
