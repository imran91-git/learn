import { Component, EventEmitter, Input, Output, ViewEncapsulation, output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { concatMap, delay, exhaustMap, from, mergeMap, observable, of, pipe, switchAll, switchMap } from 'rxjs';
import { SharedService } from '../shared.service';
import { LearnComponent } from "../learn/learn.component";

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-curd',
  standalone: true,  // ✅ Mark as standalone
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, LearnComponent]

})
export class CrudComponent {
  delete1(_t57: number) {
    throw new Error('Method not implemented.');
  }

  userForm: FormGroup;
  users: User[] = [];
  editIndex: number | null = null;
  @Output() curd = new EventEmitter<boolean>();
  learn: any;
  constructor(private fb: FormBuilder,private SharedService :SharedService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
 
  sendatatoSibling(){
    this.SharedService.sendDatatoSibling("Imran from Sibling")
  }
  // Add or Update User
  saveUser() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;

      if (this.editIndex === null) {
        // Add New User
        const newUser: User = {
          id: this.users.length + 1,
          ...formData
        };
        this.users.push(newUser);
      } else {
        // Update Existing User
        this.users[this.editIndex] = { ...this.users[this.editIndex], ...formData };
        this.editIndex = null;
      }
      const status = true; // Example: setting it to false
      this.curd.emit(status); // Emit status to parent
      //this.curd.emit(true);
      this.userForm.reset();
    }
  }

  // Edit User
  editUser(index: number) {
    this.editIndex = index;
    const user = this.users[index];
    this.userForm.setValue({
      name: user.name,
      email: user.email
    });
  }

  // Delete User
  deleteUser(index: number) {
    this.users.splice(index, 1);
    if (this.editIndex === index) {
      this.editIndex = null;
      this.userForm.reset();
    }
  }

  li2=[1,2,3,4];
  li: { "learn": "" }[] = [];
  observables = from(this.li2);
  checkRxjs() {
    // this.observables.pipe(mergeAll(val => {

    //   console.log("exhaustMap received:", val);
    //   return of(val);
    // //  return of('Response after 2 seconds').pipe(delay(2000));
    // })).subscribe(results => {
    //   return of(results);
    // }

  //  )
  }
  observable = from(this.li);
  check(lit: string) {
    const data = { learn: lit };

    this.observable.pipe(exhaustMap(val => {

      console.log("exhaustMap received:", val);
      return of('Response after 2 seconds').pipe(delay(2000));
    })).subscribe(results => {
      return of(results);
    }

    )
  }

  edit1(index: any) {
    const data = this.li[index]
    this.learn = data.learn;

  }
  update1(index: any, val: any) {
    this.li[index].learn = val;
  }
  delete2(index: number) {
    this.li.splice(index, 1);
    throw new Error('Method not implemented.');
  }
}

