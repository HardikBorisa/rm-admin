import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // Check if the token is present in the local storage
    const token = localStorage.getItem('token');

    if (token) {
      // If token is present, user is authenticated
    //   this.router.navigate(['/']);
      return true;
    } else {
      // If token is not present, redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}

