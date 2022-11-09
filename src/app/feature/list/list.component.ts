import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from 'src/app/core/models/cat.interface';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { StorageService } from 'src/app/core/storage/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  result:Cat[] = [];
  data:Cat[] = [];
  origins = [];

  origin = "";
  name = "";


  constructor(private _dashboardService: DashboardService,  private _storageService: StorageService,   private router: Router,) {
    this.result = [];
  }

  ngOnInit() {
    const that = this;
    that.getAllCats().then((res: Cat[]) => {
      this.data = res; 
      this.result = res.slice(0,environment.NUMBER_CAT);
      this.origins = [...new Set(this.data.map(item => item.origin))];
    });
  }

  getAllCats() {
    return new Promise((resolve, reject) => {
      this._dashboardService
        .getAllCats()
        .subscribe(resolve, reject);
    });
  }

  filter(){
    this.result = [];

    this.result = this.data.filter(function (el) {
      if(this.origin !== '' && this.name === '')
        return el.origin === this.origin
      if(this.origin === '' && this.name !== '')
        return el.name === this.name
      if(this.origin !== '' && this.name !== '')
        return el.origin === this.origin  && el.name === this.name      
    }, this);
  }

  goToDetail(item: Cat){
   this._storageService.setItem('url', item.image.url);
   return this.router.navigate([`detail/${item.id}`]);
  }
}
