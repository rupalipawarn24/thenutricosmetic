import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getwishlist } from 'src/app/models/wishlist';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-iwish',
  templateUrl: './iwish.component.html',
  styleUrls: ['./iwish.component.css']
})
export class IwishComponent implements OnInit {

  constructor(private wish: WishListService, private router: Router) { }

  ngOnInit(): void {
    this.getWishList();
  }

  getWishList() {
    let user = localStorage.getItem('user');
    let customer_id = user && JSON.parse(user).data[0].id;

    let getwishData: getwishlist = {
      customer_id,
    }

    this.wish.getWishlist(getwishData).subscribe((result) => {
      
      console.log(result);
    });
  }

}
