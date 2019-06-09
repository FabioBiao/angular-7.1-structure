import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        HeaderComponent,
        FooterComponent
    ],
    providers: [

    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ]
})

export class SharedModule {
}

export function TRANSLATE(str: string) {
    return str;
}
