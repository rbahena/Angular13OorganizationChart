import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrganizationChartComponent } from './OrganizationChart/organization-chart/organization-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
