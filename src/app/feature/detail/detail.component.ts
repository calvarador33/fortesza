import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/core/models/cat.interface';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { StorageService } from 'src/app/core/storage/storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data: Cat;
  url = '';


  constructor(private _dashboardService: DashboardService, private _storageService: StorageService, private activatedRoute: ActivatedRoute,) {
  }

  ngOnInit() {
    const that = this;
    this.url = this._storageService.getItem('url');
    if (this.activatedRoute.snapshot.params?.id) {
      const id = this.activatedRoute.snapshot.params?.id;
      that.getDetailCat(id).then((res: any) => {
        this.data = res;
      });
    }
  }

  getDetailCat(id: string) {
    return new Promise((resolve, reject) => {
      this._dashboardService
        .getDetailCat(id)
        .subscribe(resolve, reject);
    });
  }
}
