import { Injectable } from '@angular/core';
import { IUser } from '../models/auth.model';
import { Router } from '@angular/router';
import { AuthRoutePaths } from '../models/routes.model';
import { YoutubeRoutePaths } from '../../youtube/models/routes.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  redirectUrl: string | null = null;

  private LoginPageRoute = AuthRoutePaths.LOGIN;

  private MainPageRoute = YoutubeRoutePaths.MAIN_PAGE;

  constructor(private router: Router) {}

  loginUser(username: string): void {
    const user: IUser = { username, token: this.generateToken() };
    localStorage.setItem('user', JSON.stringify(user));

    this.redirectToMainPage();
  }

  logoutUser(): void {
    localStorage.removeItem('user');

    this.redirectToLoginPage();
  }

  redirectToMainPage(): void {
    this.router.navigate([this.redirectUrl || this.MainPageRoute]);
  }

  redirectToLoginPage(): void {
    this.router.navigate([this.LoginPageRoute]);
  }

  redirectFromNotFoundPage(): void {
    if (this.isLoggedIn()) return this.redirectToMainPage();

    this.redirectToLoginPage();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  generateToken(): string {
    return '_' + Math.random().toString(36).substring(2, 9);
  }
}
