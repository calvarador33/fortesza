import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from 'src/app/core/http/http.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { StorageService } from 'src/app/core/storage/storage.service';
import { ReplaceNullPipe } from 'src/app/shared/pipes/replace-null.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailRoutingModule } from './detail-routing-module';
import { DetailComponent } from './detail.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  exports: [DetailComponent, StarRatingComponent],
  imports: [ CommonModule,
    FormsModule,DetailRoutingModule,SharedModule],
  declarations: [DetailComponent, StarRatingComponent],
  providers: [DashboardService, StorageService, HttpService, ReplaceNullPipe],
})
export class DetailModule {}
