import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LearnComponent } from './learn/learn.component';
import { CrudComponent } from './curd/curd.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { StandComponent } from './stand/stand.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect empty path to login
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', 
  component: DashboardComponent,
  canActivate: [AuthGuard],
  children: [  // 👈 Define child routes inside Dashboard
    { path: 'curd', component: CrudComponent },
    { path: 'learn', component: LearnComponent },
    {path:'rxjs',component:RxjsOperatorsComponent},
    {path:'ngrx',component:NgrxComponent},
    {path:'stand',component:StandComponent}
    
  ]} 
  // Learn component route
];

export class AppRoutingModule {} // ✅ Corrected class structure
