import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router for navigation
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss'],
})
export class ProductdetailsComponent implements OnInit {
  product: any;

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.productService.getProductByID(id).subscribe((product) => {
        this.product = product;
      });
    });
  }

  addToCart(productId: number) {
    this.cartService.addToCart(productId);
    console.log(`Product ${productId} added to cart`);
  }

  backToProducts() {
    this.router.navigate(['/products']);
  }
}
