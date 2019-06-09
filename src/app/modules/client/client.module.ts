import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';

// import { CoreModule } from '../../shared/shared.module';
import { SharedModule } from '../../shared/shared.module';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';

@NgModule({
    declarations: [ClientRoutingModule.components, CreateCampaignComponent, EditCampaignComponent],
    imports: [
        CommonModule,
        ClientRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ]
})

export class ClientModule { }
