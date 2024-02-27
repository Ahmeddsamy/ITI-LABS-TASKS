import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { CardPipe } from '../../pipes/card.pipe';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule, CardPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(productId: number) {
    this.cartService.addToCart(productId);
  }
  goToProductDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
