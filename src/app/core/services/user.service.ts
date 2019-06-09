import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) {
    }

    getAll() {
        return 'cheguei aqui';
    }
    getById(id: number) {
        // return this.http.get(`${config.apiUrl}/users/${id}`);
        return 120;
    }

}
