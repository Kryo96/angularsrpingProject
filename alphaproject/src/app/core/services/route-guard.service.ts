import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core';

import { AuthappService } from './authapp.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private BasicAuth: AuthappService, private route: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!this.BasicAuth.isLogged()) {
      console.log("Accesso NON Consentito");

      this.route.navigate(['login']);
      return false;
    }
    else {
      return true;
    }
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(RouteGuardService).canActivate(next, state);
}
