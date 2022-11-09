import { environment } from '../../../environments/environment';


export class DashboardEndPoint  {
    public static getAllCats = `${environment.URL_API}/breeds`;
 
    public static getDetailCat = `${environment.URL_API}/breeds/`;

    public static getCategories = `${environment.URL_API}/categories`;

    public static getAllImages = `${environment.URL_API}/images/search`;
}