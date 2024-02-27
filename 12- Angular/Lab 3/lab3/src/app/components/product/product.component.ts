import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../models/iproduct';
import { ProductlistComponent } from '../productlist/productlist.component';
import { CommonModule } from '@angular/common';
import { CardPipe } from '../../pipes/card.pipe';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductlistComponent, CardPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  cart: Iproduct[] = [];
  filterPrice!: number;
  addProducttoCart(addedProduct: Iproduct) {
    let inCart = this.cart.find((product) => product.id === addedProduct.id);
    if (inCart) {
      inCart.cartQuantity += 1;
    } else {
      addedProduct.cartQuantity = 1;
      this.cart.push(addedProduct);
    }
  }

  totalCost() {
    return this.cart.reduce(
      (total, product) => total + product.price * product.cartQuantity,
      0
    );
  }
}
