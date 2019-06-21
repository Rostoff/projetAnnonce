import { Component, OnInit } from '@angular/core';
import { Annonce } from '../annonce';
import { AnnonceList } from '../mock-annonce';
import { AnnonceServiceService } from '../annonce-service.service';
import { Observable } from 'rxjs';
import { CustomersServiceService } from '../customers-service.service';
import { Customers } from '../customers';


@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {

  annonces: Annonce[] = [];
  customers: Customers[] = [];
  customerById: Customers;
  creationMode = false;

  constructor(private annonceServiceService: AnnonceServiceService, private customersServiceService: CustomersServiceService) { 
    this.annonces = annonceServiceService.annonces;
    this.customers = customersServiceService.customers;
    this.customerById = {customerEmail:"",customerName:"",customerPassword:"",customerPhone:""};
  }

  ngOnInit() {
    this.recupAnnonce();
  }



  recupAnnonce() {
     this.annonceServiceService.getAnnonces().subscribe((annonce: Annonce[]) => {
        for (let i in annonce) {
          this.annonceServiceService.ajoutAnnonces(annonce[i].id, annonce[i].title, annonce[i].content, annonce[i].price, annonce[i].localisation, annonce[i].image, annonce[i].customer);
          //console.log(annonce[i].customer.customerName);
          this.annonceServiceService.addCustomerToAnnonce(i,this.recupIdCustomer("5d0a42b31ac7652258841571"));
        }
      });
  }

  recupCustomer() {
    this.customersServiceService.getCustomers().subscribe((customer: Customers[]) => {
      for(let i in customer) {
        this.customersServiceService.ajoutCustomers(customer[i].customerName, customer[i].customerPassword, customer[i].customerEmail, customer[i].customerPhone);
        //console.log()
      }
    });
  }

  recupIdCustomer(id: number) {
    this.customersServiceService.getCustomerById(id).subscribe((customer: Customers) =>{
        let customerById = {customerName : customer.customerName, customerEmail :customer.customerName, 
        customerPassword: customer.customerPassword,customerPhone : customer.customerPhone};
        return customerById
    });
  }


  onClick(i: number) {
    if (this.annonces[i].details === true) {
      this.annonces[i].details = false;
    } else {
      this.annonces[i].details = true;
    }

  }
}
