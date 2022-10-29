import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthRoutePaths } from '../models/routes.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> {
    return this.checkLogin(state.url);
  }

  constructor(private loginService: LoginService, private router: Router) {}

  checkLogin(url: string): Observable<true | UrlTree> {
    return this.loginService.getIsLoggedIn$().pipe(
      map((isLoggedIn) => {
        if (isLoggedIn) return true;

        this.loginService.redirectUrl = url;
        return this.router.parseUrl(AuthRoutePaths.LOGIN);
      }),
    );
  }
}
