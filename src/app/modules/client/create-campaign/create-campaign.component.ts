import { Component, OnInit } from '@angular/core';

import { ReadJsonService } from '../../../core/services/readjson.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../core/services/alert.service';
import { ManageCampaignService } from './../../../core/services/manageCampaign.service';
import { map } from 'rxjs/operators';


@Component({
    selector: 'app-create-campaign',
    templateUrl: './create-campaign.component.html',
    styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {
    private countryList;
    createForm: FormGroup;
    loading = false;

    constructor(
        private alertService: AlertService,
        private readJsonService: ReadJsonService,
        private formBuilder: FormBuilder,
        private manageCampaignService: ManageCampaignService
    ) { }

    ngOnInit() {
        this.createForm = this.formBuilder.group({
            inputCountry: ['', Validators.required],
            inputId: [''],
            inputName: ['', Validators.required],
            inputTraking: [''],
            inputCSS: ['']
        });

        this.readJsonService.getCountryList().subscribe(
            data => {
                this.countryList = data['countries'];
            });
    }

    onCreate() {

        if (this.createForm.invalid) {
            this.alertService.error( 'preencha todos os campos' );
            return;
        }
        this.loading = true;

        console.log(this.createForm.value.inputCountry);
        this.manageCampaignService.CreateCampaignComponent(
            this.createForm.value.inputCountry, this.createForm.value.inputId,
            this.createForm.value.inputName, this.createForm.value.inputTraking,
            this.createForm.value.inputCSS
            ).subscribe(            data => {
                console.log('aqui');
                console.log(data);
                this.loading = false;
                if ( data['success'] !== true ) {
                    this.alertService.error( data['result'] );
                } else {
                    this.alertService.success( data['result'] );
                }
            });
    }
}
