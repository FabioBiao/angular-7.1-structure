import { Country } from './../models/country';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ManageCampaignService {
    baseUrl = 'http://backoffice-cg-backend/api';

    constructor(private http: HttpClient) {
    }

    CreateCampaignComponent(country: string, id: string, name: string, Traking: string, cssField: string) {
        console.log(country, id, name, Traking);
        const headerOptions = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        const result = this.http.post<any>(`${this.baseUrl}/createCampaign.php`, {
            country: country, name: name, cssField: cssField
        }, { headers: headerOptions });
        console.log(result);

        return result;
    }

    EditCampaignComponent(country: string, id: string, cssField: string) {
        console.log(country, name, cssField);
        const headerOptions = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        const result = this.http.post<any>(`${this.baseUrl}/createCampaign.php`, {
            country: country, name: name, cssField: cssField
        }, { headers: headerOptions });
        console.log(result);

        return result;
    }

    getCampaigns(country: string) {
        const headerOptions = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        const campaignsList = this.http.post<any>(`${this.baseUrl}/getAllCampaigns.php`, {
            country: country
        }, { headers: headerOptions });

        return campaignsList;
    }

    getCampaignInfo(country: string, campaignName: string) {
        const headerOptions = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        const campaignInfo = this.http.post<any>(`${this.baseUrl}/getCampaignInfo.php`, {
            country: country, campaignName: campaignName
        }, { headers: headerOptions });

        return campaignInfo;
    }

    generateCampaignInfo(country: string, campaignName: string) {
        const headerOptions = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        const generationAnswer = this.http.post<any>(`${this.baseUrl}/generateCampaign.php`, {
            country: country, campaignName: campaignName
        }, { headers: headerOptions });

        return generationAnswer;
    }

}
