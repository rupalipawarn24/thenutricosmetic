import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addcart } from '../models/cart';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addProductToCart(cart: addcart)
  {
    return this.http.post('https://tncapi.tanajidinde.com/api/cart',  cart );
  }
  getProductToCart(id:any)
  {
    let endPoints = "https://tncapi.tanajidinde.com/api/cart?id"
    return this.http.get("https://tncapi.tanajidinde.com/api/cart");
  }

  getCartItems(): Observable<addcart[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<addcart[]>("https://tncapi.tanajidinde.com/api/cart").pipe(
      map((result: any[]) => {
        let cartItems: addcart[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].product_id === item.product.id) {
              cartItems[i].quantity++
              productExists = true
              break;
            }
          }

          // if (!productExists) {
          //   cartItems.push(new CartItem(item.id, item.product));
          // }
        }

        console.log(cartItems);
        return cartItems;
      })
    );
  }
}
