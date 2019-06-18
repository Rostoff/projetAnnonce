import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private customer: Customers;

  constructor() { }

  ngOnInit() {
    this.customer =  new Customers();
    this.customer.dateCreation = '18/06/2019';
    this.customer.auth = true;
  }

}
