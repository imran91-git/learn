import { Component, ViewEncapsulation } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
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
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
constructor(private router :Router){}
  ngOnInit() {
    // Set flag when app is opened
    if (localStorage.getItem('app_opened')) {
      alert('App is already open in another tab!');
      this.router.navigate(['/login']);
    } else {
      localStorage.setItem('app_opened', 'true');
    }

    // Clear flag when tab is closed
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('app_opened');
    });
    // Clear flag when tab is closed
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('app_opened');
    });
  }
}
