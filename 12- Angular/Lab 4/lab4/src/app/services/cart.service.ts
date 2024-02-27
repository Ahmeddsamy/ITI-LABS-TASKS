import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: number[] = []; 

  constructor() {}

  addToCart(productId: number) {
    let cartProductIDs = [];
    const storedCart = localStorage.getItem('cartProductIDs');
    if (storedCart) {
      cartProductIDs = JSON.parse(storedCart);
    }
    if (!cartProductIDs.includes(productId)) {
      cartProductIDs.push(productId);
      localStorage.setItem('cartProductIDs', JSON.stringify(cartProductIDs));
    }
  }

  getCartProducts(): number[] {
    return this.cartProducts;
  }

}
