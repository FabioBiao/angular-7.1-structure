// globals.ts
import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable()
export class Globals {
    logged = false;
    username = '';
    currentUser: User;
}
