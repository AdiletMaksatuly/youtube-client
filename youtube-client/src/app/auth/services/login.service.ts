import { Injectable } from '@angular/core';
import { IUser } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  redirectUrl: string | null = null;

  loginUser(username: string): void {
    const user: IUser = { username, token: this.generateToken() };
    localStorage.setItem('user', JSON.stringify(user));
  }

  logoutUser(): void {
    localStorage.removeItem('user');
  }

  generateToken(): string {
    return '_' + Math.random().toString(36).substring(2, 9);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
