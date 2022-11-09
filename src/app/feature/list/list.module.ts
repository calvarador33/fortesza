import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from 'src/app/core/http/http.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { ReplaceNullPipe } from 'src/app/shared/pipes/replace-null.pipe';
import { ListRoutingModule } from './list-routing-module';

import { ListComponent } from './list.component';

import { BrowserModule } from '@angular/platform-browser'
import { StorageService } from 'src/app/core/storage/storage.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  exports: [ListComponent],
  imports: [CommonModule,
    FormsModule, ListRoutingModule, SharedModule],
  providers: [DashboardService, StorageService, HttpService, ReplaceNullPipe],
  declarations: [ListComponent]
})
export class ListModule { }
