import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';
import { AppComponent } from './app.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';

const routes: Routes = [
  {path: '', component: ListeAnnonceComponent},
  {path: 'details', component: DetailAnnonceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
