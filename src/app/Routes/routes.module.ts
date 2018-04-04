import { NgModule }             from '@angular/core'
import { RouterModule, Routes } from '@angular/router'


//Here you should import your component to route
//import { LoginComponent } from '../Components/login/login.component'



const routes: Routes =
[
  // This is the configuration of a route to be access for any component
  // { path: 'login',  component: LoginComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);

