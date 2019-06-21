import { Injectable } from '@angular/core';
import { Customers } from './customers';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersServiceService {

  customers: Customers[] = [];
  private apiUrl: string = 'http://localhost:3000/customers/';


  constructor(private http: HttpClient) { }

  ajoutCustomers(customerName: string, customerPassword: string, customerEmail: string, customerPhone: string){
    let c : Customers = {
      customerName : customerName,
      customerPassword : customerPassword,
      customerEmail : customerEmail,
      customerPhone : customerPhone

    }
    this.customers.push(c);
  }

  getCustomers() {
    return this.http.get(this.apiUrl);
  }

  getCustomerById(id: number) {
    // return this.http.get("http://localhost:3000/customers", {params})
    return this.http.get("http://localhost:3000/customers/"+ id);
  }



}
