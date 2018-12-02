import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

import { RouterModule, Routes, PreloadAllModules, NoPreloading, ExtraOptions } from '@angular/router';

const app_routes: Routes = [
    {
        path: '',
        loadChildren: './modules/client/client.module#ClientModule'
    },
    {
        path: 'login',
        loadChildren: './modules/auth/auth.module#AuthModule'
    },
    {
        path: 'auth',
        loadChildren: './modules/auth/auth.module#AuthModule'
    },
    {
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule'
    },
    { // if path not found redirect to 404 page
        path: '**',
        redirectTo: '/auth/404'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules })], // [RouterModule.forRoot(routes)]
    exports: [RouterModule]
})
export class AppRoutingModule { }
