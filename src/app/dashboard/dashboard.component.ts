import { Component,Input } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { CrudComponent } from '../curd/curd.component';
import { LearnComponent } from '../learn/learn.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
