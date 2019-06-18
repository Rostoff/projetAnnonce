import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';
import { AppComponent } from './app.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: ListeAnnonceComponent},
  {path: 'listeAnnonce', component: ListeAnnonceComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signIn', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


