import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category.interface';
import { ImageCategory } from 'src/app/core/models/image.interface';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  result:ImageCategory[] = [];
  categories:Category[] = [];

  categorie = '';

  isFilter = false;


  constructor(private _dashboardService: DashboardService) {
    this.result = [];
  }

  ngOnInit() {
    const that = this;
    that.getCategories().then((res: Category[]) => {
      this.categories = res; 
    });
  }

  getCategories() {
    return new Promise((resolve, reject) => {
      this._dashboardService
        .getCategories()
        .subscribe(resolve, reject);
    });
  }

  filter(){
    this.getAllImages().then((res: ImageCategory[]) => {
      this.result = res; 
      this.isFilter = false;
    });
  }

  getAllImages(){
    this.isFilter = true;
    return new Promise((resolve, reject) => {
      this._dashboardService
        .getAllImages(environment.DEFAULT_PAGE,environment.PER_PAGE, this.categorie)
        .subscribe(resolve, reject);
    });
  }
}
