
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LearnComponent } from './learn/learn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Correctly imported
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClient } from '@angular/common/http';
import { counterReducer } from './counter.reducer';
import { StoreModule } from '@ngrx/store';
import { NgrxComponent } from './ngrx/ngrx.component';


@NgModule({
  declarations: [
    AppComponent,  // ✅ Added AppComponent
    LoginComponent,
    LearnComponent,
    DashboardComponent 
    ,NgrxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule, // ✅ Ensure RouterModule is present
    AppRoutingModule,
    HighlightDirective ,// ✅ Ensure AppRoutingModule is used correctly
    HttpClient  , StoreModule.forRoot({ count: counterReducer }) // Register reducer
  ],
  providers: [],
  bootstrap: [AppComponent] // ✅ Bootstrap AppComponent
})
export class AppModule { }
