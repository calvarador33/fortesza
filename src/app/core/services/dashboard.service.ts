import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { DashboardEndPoint  as endpoint} from '../endpoints/dashboard.endpoint';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private httpService: HttpService,
  ) {
  }

  getAllCats(page?: string, per_page?: string): Observable<any> { 
    let params = new HttpParams();
    if(page) params = params.set("page", page);
    if(per_page) params = params.set("limit", per_page);
    return this.httpService.get(endpoint.getAllCats,  params);
  }

  getDetailCat(id: string): Observable<any> {
    return this.httpService.get(endpoint.getDetailCat + id)
  }

  getCategories(): Observable<any> { 
    return this.httpService.get(endpoint.getCategories);
  }

  getAllImages(page?: string, per_page?: string, category_ids?: string): Observable<any> { 
    let params = new HttpParams();
    if(page) params = params.set("page", page);
    if(per_page) params = params.set("limit", per_page);
    if(category_ids) params = params.set("category_ids", category_ids);
    params =  params.set("order", "Random");
    params =  params.set("size", "med");
    return this.httpService.get(endpoint.getAllImages,  params);
  }
}
