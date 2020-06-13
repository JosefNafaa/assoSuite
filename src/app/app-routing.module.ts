import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AdherantComponent } from'./adherant/adherant.component';
import {AddAdherantComponent } from'./add-adherant/add-adherant.component';
import {DetailAdherantComponent} from './detail-adherant/detail-adherant.component';
const routes: Routes = [
 
 
   {
      path: 'login',
    component: LoginComponent
    },
    {
      path:'adherant',
      component:AdherantComponent
    },
    {
      
      path:'detailAdherant',
      component:DetailAdherantComponent
    },
    {
      path: 'addAdherant',
    component: AddAdherantComponent
    },

    {
      path: 'home',
      component: HomeComponent
    },
    {path: '', redirectTo: '/detailAdherant', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
