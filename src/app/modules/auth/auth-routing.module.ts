import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: { title: 'Log In' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Log In' }
    },
    {
        path: '404',
        component: NotFoundComponent,
        data: { title: '404' }
    }
];

@NgModule({
    // imports: [RouterModule.forRoot(routes)],  // [RouterModule.forChild(routes)]
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AuthRoutingModule {
    static components = [
        LoginComponent,
        NotFoundComponent
    ];

}
