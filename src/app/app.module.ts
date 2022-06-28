import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrganizationChartComponent } from './OrganizationChart/organization-chart/organization-chart.component';
import { OrgChartModule } from 'angular13-organization-chart';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationChartComponent
  ],
  imports: [
    BrowserModule,
    OrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
