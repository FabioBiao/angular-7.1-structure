import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { HeaderComponent } from './shared/layouts/header/header.component';
// import { FooterComponent } from './shared/layouts/footer/footer.component';

// import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthenticationService } from './core/services/authentication.service';
import { ReadJsonService } from './core/services/readjson.service';
import { ManageCampaignService } from './core/services/manageCampaign.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './core/interceptors/index';
import { AlertComponent } from './shared/alert/alert.component';

// translations
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { Globals } from './core/global';
@NgModule({
    declarations: [
        AppComponent,

        AlertComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // CoreModule,
        SharedModule,

        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        AuthenticationService,
        ReadJsonService,
        ManageCampaignService,
        Globals,
        { provide: TranslateModule },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
    // return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
