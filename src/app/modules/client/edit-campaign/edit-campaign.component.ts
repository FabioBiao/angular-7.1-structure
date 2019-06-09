import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReadJsonService } from '../../../core/services/readjson.service';
import { AlertService } from '../../../core/services/alert.service';
import { ManageCampaignService } from './../../../core/services/manageCampaign.service';

@Component({
    selector: 'app-edit-campaign',
    templateUrl: './edit-campaign.component.html',
    styleUrls: ['./edit-campaign.component.scss']
})
export class EditCampaignComponent implements OnInit {
    private countryList;
    private campaignList;
    private country;

    public loading = false;
    selectCampaignForm: FormGroup;

    // variables for fields
    public cssField;

    constructor(
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private readJsonService: ReadJsonService,
        private manageCampaignService: ManageCampaignService
    ) { }

    ngOnInit() {
        this.selectCampaignForm = this.formBuilder.group({
            inputCss: ['', Validators.required]
        });

        this.readJsonService.getCountryList().subscribe(
            data => {
                this.countryList = data['countries'];
            });
    }

    onCountryChange($event) {
        console.log('mudei pais');
        this.country = $event.target.value;
        console.log(this.country);
        this.manageCampaignService.getCampaigns(this.country).subscribe(
            data => {
                console.log(data);
                this.campaignList = data['data'];
                if ( data['success'] === false) {
                    this.alertService.error( 'No campaigns on this country' );
                }
            });
    }

    onCampaignChange($event) {
        console.log('mudei');
        this.loading = true;
        const campaign = $event.target.value;

        this.manageCampaignService.getCampaignInfo(this.country, campaign).subscribe(
            data => {
                this.loading = false;
                console.log('campaign Info');

                this.selectCampaignForm.value.inputCss = data['data']['mainCss'];
                console.log('this.selectCampaignForm.value.inputCss');
                console.log(this.selectCampaignForm.value.inputCss);
                this.cssField = data['data']['mainCss'];

            },
            error => {
                this.loading = false;
                console.log( error );
            });
    }

    onEdit() {

        if (this.selectCampaignForm.invalid) {
            this.alertService.error( 'preencha todos os campos' );
            return;
        }
        this.loading = true;

        console.log(this.selectCampaignForm.value.inputCountry);
        this.manageCampaignService.EditCampaignComponent(
            this.selectCampaignForm.value.inputCss, this.selectCampaignForm.value.inputId,
            this.selectCampaignForm.value.inputCSS
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
