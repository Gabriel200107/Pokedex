import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules Routing
import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";

//Pages
import { RoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';



@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        RoutingModule,
        SharedModule
    ]
})
export class PagesModule { }
