import { Component, OnInit } from '@angular/core';
import { addcart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems = [];

  cartTotal = 0

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    ///this.handleSubscription();
    this.loadCartItems();
    this.getcartlist();
  }

  // handleSubscription() {
  //   this.msg.getMsg().subscribe((product: Product) => {
  //     this.loadCartItems();
  //   })
  // }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: addcart[]) => {
      console.log(items);
      //this.calcCartTotal();
    })
  }

  getcartlist(){
    let id:any;
    this.cartService.getProductToCart(id).subscribe((result) => {
      console.log(result);


    })
    
  }

  // calcCartTotal() {
  //   this.cartTotal = 0
  //   this.cartItems.forEach(item => {
  //     this.cartTotal += (item.qty * item.price)
  //   })
  // }

}


 
 