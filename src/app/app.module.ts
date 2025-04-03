import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LearnComponent } from './learn/learn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from '@angular/common/http'; // ✅ Fix: Use HttpClientModule
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { NgrxComponent } from './ngrx/ngrx.component';

@NgModule({
  declarations: [ 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RouterLink // ✅ Fix: Proper StoreModule registration
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
