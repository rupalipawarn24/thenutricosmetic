import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deletewishlist, getwishlist } from 'src/app/models/wishlist';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-iwish',
  templateUrl: './iwish.component.html',
  styleUrls: ['./iwish.component.css']
})
export class IwishComponent implements OnInit {

  wishlistData: any;
  res:any;
  wishlistid:number;
  noresults=false;
  catlogLayout = [
    "mt-3", "col-12", "col-md-3", "card-slider"
  ]
  activeIds: any = ["tab-1", "tab-2", "tab-3", "tab-4", "tab-5", "tab-6", "tab-7",];
 
 

  constructor(private wish: WishListService, private router: Router) { }

  changeLayout(data: any) {
    if (data == 'small') {
      this.catlogLayout = [
        "mt-3", "col-12", "col-md-3", "card-slider"
      ]
    } else {
      this.catlogLayout = [
        "mt-3", "col-12", "col-md-6", "card-slider"
      ]
    }
  }

  ngOnInit(): void {
    this.getWishList();
  }

  getWishList() {
    let user = localStorage.getItem('user');
    let customer_id = user && JSON.parse(user).data[0].id;
    
    let getwishData: getwishlist = {
      customer_id,
    }
    console.log(customer_id)

    this.wish.getWishlist(customer_id).subscribe((result) => {
      this.res=result;
      this.wishlistData=this.res.data;
      
      console.log(this.wishlistData);
    });
  }
  deleteToWishlist(wishlist_id:deletewishlist){
    // this.wishlistid=id;
      console.log(wishlist_id);

      this.wish.removeFromWishlist(wishlist_id).subscribe((result) => {
        if(result){
          this.getWishList();
        }
        console.log(result);
      });
   
  }

}
