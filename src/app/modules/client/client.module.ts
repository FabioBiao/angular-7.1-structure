import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';


@NgModule({
    declarations: [ClientRoutingModule.components],
    imports: [
        CommonModule,
        ClientRoutingModule,
        ReactiveFormsModule
    ]
})
export class ClientModule { }
