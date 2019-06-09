import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// custom imports
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Country } from '../models';
import 'rxjs/operators';

import { AlertService } from '../services/alert.service';

@Injectable()
export class ReadJsonService {

    public countrList: Observable<Country>;
    configCountryUrl = 'http://backoffice-cg-backend/api/readJson.php';
    constructor(private http: HttpClient, private alertService: AlertService) {
    }

    getCountryList() {
        return this.http.get(this.configCountryUrl);
    }

}
