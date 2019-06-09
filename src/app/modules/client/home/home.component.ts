import { User } from './../../../core/models/user';
import { Component, OnInit } from '@angular/core';

import { Globals } from '../../../core/global';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private globals: Globals
    ) { }

    ngOnInit() {
        console.log('home globals');
        console.log(this.globals.logged);
        console.log(this.globals.currentUser);
    }

}
