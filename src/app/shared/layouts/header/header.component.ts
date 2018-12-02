import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onLogout() {
        console.log('logout serviço');

        this.authenticationService.logout();
        this.router.navigate(['/auth/login'], { replaceUrl: true });
        /**
    this.authenticationService.logout().subscribe((res) => {

        window.location.reload();
        this.router.navigate(['/auth/login'], { replaceUrl: true });
    }); */
    }
}
