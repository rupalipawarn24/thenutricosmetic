import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { addwishlist, deletewishlist, getwishlist } from '../models/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(  
    private router: Router,
    private http: HttpClient
    ) { }
  
  // getWishlist() {
  //   return this.http.get(wishlistUrl).pipe(
  //     map((result: any[]) => {
  //       let productIds = []

  //       result.forEach(item => productIds.push(item.id))

  //       return productIds;
  //     })
  //   )
  // }

  addToWishlist(data:addwishlist) {
    let endPoints = "/addwishlist"
    return this.http.post(environment.apiUrl + endPoints, data)
  }

  getWishlist(data:getwishlist) {
    let endPoints = "/getwishlist"
    return this.http.post(environment.apiUrl + endPoints, data)
  }

  removeFromWishlist(data:deletewishlist) {
     let endPoints = "/deletewishlist"
     return this.http.post(environment.apiUrl + endPoints, data);
    console.log(data);
  }

}
