import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from 'src/app/core/http/http.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing-module';

import { CategoryComponent } from './category.component';

@NgModule({
  exports: [CategoryComponent],
  imports: [CommonModule,
    FormsModule, CategoryRoutingModule, SharedModule],
  providers: [DashboardService, HttpService],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
