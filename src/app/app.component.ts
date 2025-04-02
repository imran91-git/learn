import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CrudComponent } from "./curd/curd.component";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LearnComponent } from "./learn/learn.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StandComponent } from './stand/stand.component';
@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {

  title = 'APP Component';
  
}
