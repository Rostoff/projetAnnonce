import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from '../customers';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }
  private customer: Customers;
  
  ngOnInit() {

    this.customer = new Customers();
    // this.customer.customerEmail = '' ;
  }


}
