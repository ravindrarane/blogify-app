import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ButtonModule } from '@progress/kendo-angular-buttons';

import { ChartsModule } from '@progress/kendo-angular-charts';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { RatingComponent } from './admin-dashboard/rating.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    GridModule,
    PDFModule,
    ExcelModule,
    ButtonModule,
    ChartsModule
  ]
})
export class AdminModule { }
