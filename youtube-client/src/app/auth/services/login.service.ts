import { Injectable } from '@angular/core';
import { IUser } from '../models/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  redirectUrl: string | null = null;

  constructor(private router: Router) {}

  loginUser(username: string): void {
    const user: IUser = { username, token: this.generateToken() };
    localStorage.setItem('user', JSON.stringify(user));

    this.router.navigate([this.redirectUrl || 'main']);
  }

  logoutUser(): void {
    localStorage.removeItem('user');

    this.router.navigate(['login']);
  }

  generateToken(): string {
    return '_' + Math.random().toString(36).substring(2, 9);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
