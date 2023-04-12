import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandList, addReview } from '../models/brand-list.model';

const baseUrl = 'https://demo.thenutricosmeticcompany.co.uk/api/public/api/getAllBrandsForCustomSite';
const brandlisturl ='https://thenutricosmeticcompany.co.uk/live-api/API/public/api/getProductDetailsByBrandForCustomSite?brand_id';


@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }
  
  getbrandlistById(id: number) {
    return this.http.get(`${brandlisturl}=${id}`);
  }

  getproductlistById(id: number) {
    let endPoints = "https://thenutricosmeticcompany.co.uk/live-api/API/public/api/getProductDetailsByProductIdForCustomSite?product_id"
    return this.http.get(`${endPoints}=${id}`);
  }

  getmenuList(){
    return this.http.get('https://demo.thenutricosmeticcompany.co.uk/api/public/api/getNavigationMenusForCustomSite');
  }
  addReview(data: addReview) {
    return this.http.post(' https://tncapi.tanajidinde.com/public/api/givereview', data);
  }
  getReview(id:number){
    //return this.http.get(' https://tncapi.tanajidinde.com/public/api/getreviews', data);

     let endPoints = "https://tncapi.tanajidinde.com/public/api/getreviews?product_id"
     return this.http.get(`${endPoints}=${id}`);
  }
}
