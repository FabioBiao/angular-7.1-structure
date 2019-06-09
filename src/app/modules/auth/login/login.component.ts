import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../../core/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../../core/services/alert.service';
import { Globals } from '../../../core/global';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loading = false;
    logged = false;
    submitted = false;
    loginForm: FormGroup;
    returnUrl: string;

    constructor(
        private alertService: AlertService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private globals: Globals,
        private translate: TranslateService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['example@gmail.com', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onLogin() {
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        console.log(this.loginForm.value.email);
        // console.log(this.loginForm.value.password);

        this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
            .pipe(first())
            .subscribe(
                data => {
                    console.log('login success data');
                    // console.log(data);
                    this.loading = false;
                    this.logged = true;

                    this.globals.logged = true;
                    this.globals.currentUser = data;
                    this.globals.username = data.username;

                    console.log('teste globals login');
                    // console.log(this.globals.logged);
                    // console.log(this.globals.currentUser);
                    // console.log(this.logged);
                    console.log('lalaal');

                    this.alertService.success( this.translate.instant('auth.sucessLogin') );
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log('login error');
                    console.log(error);
                    // this.alertService.error(error);
                    this.loading = false;
                    this.logged = false;
                    this.alertService.error('Failed Login');
                });
    }
}
