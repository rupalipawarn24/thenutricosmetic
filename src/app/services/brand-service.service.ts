import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandList } from '../models/brand-list.model';

const baseUrl = 'https://demo.thenutricosmeticcompany.co.uk/api/public/api/getAllBrandsForCustomSite';


@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }
}
