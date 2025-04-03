import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, provideStore } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement } from '../counter.actions';
import { counterReducer } from '../counter.reducer';

@Component({
  selector: 'app-ngrx',
  standalone: true, // ✅ Standalone component
  imports: [CommonModule], // ✅ Correct fix
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
