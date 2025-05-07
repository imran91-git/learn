import { CommonModule } from '@angular/common';
import { Component, OnInit, signal ,WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-signals',
  imports: [FormsModule, CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent implements OnInit {
  count = signal(0);
  count2=signal(5);
 
  spreadOperator: WritableSignal<string[]> = signal(['1', '2']);
  ngOnInit(): void {
    this.count.update(value => value + 1);
    this.spreadOperator();
    this.count2.update(val => val*30);
  }


  
  signals() {
    this.count.update(value => value + 1);
  }
  decrement() {
    this.count.update(value => value -1);
  }

  reset(){
    this.count.set(0);
  }
  exspreadOperator=['1','2'];
  exspreadOperator2=['3','4'];
  newop: any[] = [];
  message:any;
  spreadoperatorexample(){

   //this.newop=[...this.exspreadOperator,...this.exspreadOperator2];
   this.message="'<h2>copy the array in new Array,merge ,combine and add new value to it<h2>'";
   this.newop=['5',...this.exspreadOperator,...this.exspreadOperator2,'34'];
  }

  
}
