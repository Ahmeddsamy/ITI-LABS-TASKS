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
export class CartComponent implements OnInit {
  cartProducts: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.loadCartProducts();
  }

  loadCartProducts() {
    const productIDs = this.getCartProductIDs();
    if (productIDs.length) {
      productIDs.forEach((id) => {
        this.productService.getProductByID(id).subscribe((product) => {
          this.cartProducts.push(product);
        });
      });
    }
  }

  getCartProductIDs(): number[] {
   
    const ids = localStorage.getItem('cartProductIDs');
    return ids ? JSON.parse(ids) : [];
  }

  removeFromCart(productId: number) {

    this.cartProducts = this.cartProducts.filter(
      (product) => product.id !== productId
    );
   
    localStorage.setItem(
      'cartProductIDs',
      JSON.stringify(this.cartProducts.map((product) => product.id))
    );

    this.loadCartProducts();
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
