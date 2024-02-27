import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartProducts: any[] = [];

  constructor(private productService: ProductsService) {}

  getCartProductIDs(): number[] {
    const ids = localStorage.getItem('cartProductIDs');
    return ids ? JSON.parse(ids) : [];
  }

  calculateTotal(): number {
    return this.cartProducts.reduce(
      (total, product) => total + product.price,
      0
    );
  }

  checkout() {
    console.log('Proceeding to checkout...');

    this.cartProducts = [];
    localStorage.removeItem('cartProductIDs');
  }
}
