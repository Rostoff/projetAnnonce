import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { CreateAnnonceComponent } from './create-annonce/create-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailAnnonceComponent,
    ListeAnnonceComponent,
    LoginPageComponent,
    SignInComponent,
    CreateAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
