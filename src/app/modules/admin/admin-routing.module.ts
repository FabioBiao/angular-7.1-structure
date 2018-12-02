import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAuthGuard } from '../../core/guards/admin.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
    {
        path: '',
        component: AdminHomeComponent,
        data: { title: 'Home' },
        canActivate: [AdminAuthGuard]
    }
];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],  // [RouterModule.forChild(routes)]
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {
    static components = [
        AdminHomeComponent
    ];

}
