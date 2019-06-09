import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReadJsonService } from '../../../core/services/readjson.service';
import { AlertService } from '../../../core/services/alert.service';
import { ManageCampaignService } from './../../../core/services/manageCampaign.service';


@Component({
    selector: 'app-page-generation',
    templateUrl: './page-generation.component.html',
    styleUrls: ['./page-generation.component.scss']
})
export class PageGenerationComponent implements OnInit {
    private countryList;
    private campaignList;
    private country;

    public loading = false;
    generateCampaignForm: FormGroup;

    // variables for fields
    private cssField;

    constructor(
        private formBuilder: FormBuilder,
        private alertService: AlertService,
        private readJsonService: ReadJsonService,
        private manageCampaignService: ManageCampaignService
    ) { }

    ngOnInit() {
        this.generateCampaignForm = this.formBuilder.group({
            inputCountry: ['', Validators.required],
            inputName: ['', Validators.required]
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
                if (data['success'] === false) {
                    this.alertService.error('No campaigns on this country');
                }
            });
    }

    onGenerate() {
        if (this.generateCampaignForm.invalid) {
            this.alertService.error('preencha todos os campos');
            return;
        }
        this.loading = true;

        console.log(this.generateCampaignForm.value.inputCountry);
        this.manageCampaignService.generateCampaignInfo(
            this.generateCampaignForm.value.inputCountry, this.generateCampaignForm.value.inputName
        ).subscribe(data => {
            console.log('aqui');
            console.log(data);
            this.loading = false;
            if (data['success'] !== true) {
                this.alertService.error(data['result']);
            } else {
                this.alertService.success(data['result']);
            }
        },
        error => {
            console.log('generate error');
            console.log( error );
            this.loading = false;
            this.alertService.error('Failed generation of page');
        });
    }

}
