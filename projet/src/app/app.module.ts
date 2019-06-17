import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailAnnonceComponent,
    ListeAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
