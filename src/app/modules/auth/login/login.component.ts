import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../../core/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

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
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['example@mail.com', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onLogin() {
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
            .pipe(first())
            .subscribe(
                data => {
                    console.log('login success data');
                    console.log(data);
                    this.loading = false;
                    this.logged = true;
                    // this.router.navigate([home]);
                    this.router.navigate(['/']);
                },
                error => {
                    console.log('login error');
                    console.log(error);
                    this.loading = false;
                    this.logged = false;
                });
    }
}
