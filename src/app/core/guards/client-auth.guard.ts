import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services';

@Injectable({ providedIn: 'root' })
export class ClientAuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.chekUser(route, state);

    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.chekUser(route, state);
    }

    private chekUser(route, state): boolean {
        const currentUser = this.authenticationService.currentUserValue;
        // const userType = this.authenticationService.getUserType();
        if (currentUser) {
            // authorised so return true
            console.log('true auth');
            console.log(currentUser);
            return true;
        }

        // not logged in so redirect to login page with the return url
        console.log('false auth');
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }

}
