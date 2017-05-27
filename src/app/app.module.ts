import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule,DataTableModule,ButtonModule,DialogModule } from 'primeng/primeng';
import { NgxChartsModule }  from '@swimlane/ngx-charts';
import 'rxjs/add/operator/toPromise';

import { appRoutingProviders, routing }     from './app.routing';
import { AppComponent } from './app.component';
import { SomeComponent } from './components/some/some.component';
import { ChartComponent } from './components/chart/chart.component';

import { SomeService }  from './components/some/some.service';
import { ChartService } from './components/chart/chart.service';


@NgModule({
  declarations: [
    AppComponent,
    SomeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    //PrimeNg Modules
    InputTextModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    //Swimlane Charts
    NgxChartsModule
  ],
  providers: [
    appRoutingProviders,
    SomeService,
    ChartService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
