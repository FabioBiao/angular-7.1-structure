import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientAuthGuard } from '../../core/guards/client-auth.guard';

import { HomeComponent } from './home/home.component';
import { PageGenerationComponent } from './page-generation/page-generation.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home' },
        canActivate: [ClientAuthGuard]
    },
    {
        path: 'generate',
        component: PageGenerationComponent,
        data: { title: 'Generates Page' },
        canActivate: [ClientAuthGuard]
    },
    {
        path: 'manage',
        component: ManagePageComponent,
        data: { title: 'Manage Page' },
        canActivate: [ClientAuthGuard]
    },
    {
        path: 'create',
        component: CreateCampaignComponent,
        data: { title: 'Manage Page' },
        canActivate: [ClientAuthGuard]
    },
    {
        path: 'edit',
        component: EditCampaignComponent,
        data: { title: 'Manage Page' },
        canActivate: [ClientAuthGuard]
    }
];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],  // [RouterModule.forChild(routes)]
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientRoutingModule {
    static components = [
        HomeComponent,
        PageGenerationComponent,
        ManagePageComponent
    ];

}
