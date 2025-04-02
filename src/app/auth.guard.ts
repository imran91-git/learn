import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check login status

    if (isLoggedIn === 'true') {
      return true; // Allow access
    } else {
      console.log("here")
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
  }
}