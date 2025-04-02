import { Component, EventEmitter, Input, Output, ViewEncapsulation, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  imports: [CommonModule, ReactiveFormsModule]
  
})
export class CrudComponent {
  userForm: FormGroup;
  users: User[] = [];
  editIndex: number | null = null;
  @Output() curd = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
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
}

