import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductcardDirective } from '../../directives/productcard.directive';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductcardDirective],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data.results;
        console.log(data);
      },
    });
  }
}
