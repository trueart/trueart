import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { OffreComponent } from './offre/offre.component';

const routes: Routes = [
  {path:'' , component:WelcomeComponent},
  {path:'login/:username' , component:WelcomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'training', component:TrainingComponent, data:[{"cours1":"fvdv"}]},
  {path:'offre', component:OffreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
