import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';  // ✅ Correct import
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule,RouterLink],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoginComponent {
  email: string = '';  // ✅ Define email property explicitly
  password: string = '';  // ✅ Define password property explicitly
  message: string = '';
  constructor(private router:Router,
    private shared:SharedService
  ){}
  @Output() loginUser = new EventEmitter<boolean>();
  onSubmit() {
    if (this.email === 'imranahmed1491@gmail.com' && this.password === '1') {
      this.message = 'Login Successful!';
      this.router.navigate(['/dashboard', this.email]);
      this.shared.setUsername(this.email);
    localStorage.setItem('isLoggedIn', 'true');
    } else {
      this.message = 'Invalid email or password!';
    }
  }
  handleLogin(event: any) {
    this.loginUser.emit(true);
  }
 
}
