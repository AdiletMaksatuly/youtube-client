import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUser(username: string): void {
    localStorage.setItem('user', JSON.stringify({ username, token: this.generateToken() }));
  }

  logoutUser(): void {
    localStorage.removeItem('user');
  }

  generateToken(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
