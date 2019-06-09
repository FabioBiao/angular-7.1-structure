import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/authentication.service';
import { User } from '../../../core/models';
import {TranslateService} from '@ngx-translate/core';
import { Globals } from '../../../core/global';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    private currentUser: User;
    userName: string;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router,
        private translate: TranslateService,
        private globals: Globals
    ) { }

    ngOnInit() {
        this.globals.currentUser = this.authenticationService.currentUserValue;

        console.log('this.currentUser ');
        console.log(this.currentUser);
        if ( this.globals.currentUser ) {
            this.globals.logged = true;
            this.globals.username = this.globals.currentUser.username;
            this.userName = this.globals.username;
        } else {
            this.globals.logged = false;
            this.globals.username = '';
        }
    }

    onLogout() {
        console.log('logout serviço');
        this.globals.logged = false;
        this.globals.username = '';
console.log(this.globals.logged);
        this.authenticationService.logout();
        this.router.navigate(['/auth/login'], { replaceUrl: true });

    }

    useLanguage(language: string) {
        this.translate.use(language);
    }
}
