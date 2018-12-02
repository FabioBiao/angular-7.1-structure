import { Component, OnInit } from '@angular/core';


// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-manage-page',
    templateUrl: './manage-page.component.html',
    styleUrls: ['./manage-page.component.scss']
})
export class ManagePageComponent implements OnInit {

    productIdList: Array<{id: number, text: string}>;
    landingPage:  Array<{id: number, text: string}>;

    constructor(
    ) {}

    ngOnInit() {

        this.productIdList = [
            { id: 1, text: 'Sentence 1' },
            { id: 2, text: 'Sentence 2' },
            { id: 3, text: 'Sentence 3' },
            { id: 4, text: 'Sentence 4' },
        ];

    }

    onProductChange($event) {
        console.log($event);
        const newVal = $event.target.value;

        this.landingPage = this.productIdList;

        console.log('mudei');
    }
}
