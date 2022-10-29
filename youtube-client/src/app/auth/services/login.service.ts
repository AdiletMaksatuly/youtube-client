import { Injectable } from '@angular/core';
import { IUser } from '../models/auth.model';
import { Router } from '@angular/router';
import { AuthRoutePaths } from '../models/routes.model';
import { YoutubeRoutePaths } from '../../youtube/models/routes.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  redirectUrl: string | null = null;

  private LoginPageRoute = AuthRoutePaths.LOGIN;

  private MainPageRoute = YoutubeRoutePaths.MAIN_PAGE;

  private isLoggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('user'));

  constructor(private router: Router) {}

  loginUser(email: string): void {
    const user: IUser = { email, token: this.generateToken() };
    localStorage.setItem('user', JSON.stringify(user));
    this.isLoggedIn$.next(true);

    this.redirectToMainPage();
  }

  logoutUser(): void {
    localStorage.removeItem('user');
    this.isLoggedIn$.next(false);

    this.redirectToLoginPage();
  }

  redirectToMainPage(): void {
    this.router.navigate([this.redirectUrl || this.MainPageRoute]);
  }

  redirectToLoginPage(): void {
    this.router.navigate([this.LoginPageRoute]);
  }

  redirectFromNotFoundPage(): void {
    if (this.getIsLoggedIn()) return this.redirectToMainPage();

    this.redirectToLoginPage();
  }

  generateToken(): string {
    return '_' + Math.random().toString(36).substring(2, 9);
  }

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn$.getValue();
  }

  public getIsLoggedIn$(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }
}
