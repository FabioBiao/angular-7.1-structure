import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
// custom imports
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    baseUrl = 'http://angularapi/';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login( username: string, password: string ) {
        const headerOptions = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        const body = {'username' : 'example@gmail.com', 'password' : 'abcd' };

        return this.http.post<any>(`${this.baseUrl}/test.php`, body , { headers: headerOptions } )
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log('auth user:');
                console.log(user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        console.log('logout serviço');
        localStorage.removeItem('currentUser');
        return true;
    }


}
