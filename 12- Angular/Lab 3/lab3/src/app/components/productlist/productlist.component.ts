import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductcardDirective } from '../../directives/productcard.directive';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductcardDirective],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
})
export class ProductlistComponent {
  clientName: string = 'Ahmed Samy';
  products: Iproduct[];
  filteredProduct: Iproduct[] = [];
  @Input() set filterPrice(value: number) {
    this._filterPrice = value;
    this.filterProducts();
  }

  private _filterPrice!: number;

  @Output() addProductEvent = new EventEmitter<Iproduct>();
  togglePurchase(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (product) {
      product.sold = !product.sold;
      product.quantity -= 1;
      this.addProductEvent.emit(product);
    }
  }

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Microsoft Surface Laptop 4',
        quantity: 6,
        price: 1499,
        img: 'https://cdn.dummyjson.com/product-images/8/1.jpg',
        category: 'Laptop',
        sold: false,
        cartQuantity: 1,
        dateOfPurchase: new Date(),
      },
      {
        id: 2,
        name: 'iPhone X',
        quantity: 3,
        price: 899,
        img: 'https://cdn.dummyjson.com/product-images/2/1.jpg',
        category: 'Smartphone',
        sold: false,
        cartQuantity: 1,
        dateOfPurchase: new Date(),
      },
      {
        id: 3,
        name: 'Infinix INBOOK',
        quantity: 9,
        price: 1099,
        img: 'https://cdn.dummyjson.com/product-images/9/1.jpg',
        category: 'Laptop',
        sold: false,
        cartQuantity: 1,
        dateOfPurchase: new Date(),
      },
      {
        id: 4,
        name: 'HP Pavilion 15-DK1056WM',
        quantity: 8,
        price: 1099,
        img: 'https://cdn.dummyjson.com/product-images/10/1.jpg',
        category: 'Laptop',
        sold: false,
        cartQuantity: 1,
        dateOfPurchase: new Date(),
      },
      {
        id: 5,
        name: 'Tree Oil 30ml',
        quantity: 7,
        price: 12,
        img: 'https://cdn.dummyjson.com/product-images/17/1.jpg',
        category: 'Health & Beauty',
        sold: false,
        cartQuantity: 1,
        dateOfPurchase: new Date(),
      },
      {
        id: 6,
        name: 'Skin Beauty Serum.',
        quantity: 5,
        price: 46,
        img: 'https://cdn.dummyjson.com/product-images/19/1.jpg',
        category: 'Health & Beauty',
        sold: false,
        cartQuantity: 1,
        dateOfPurchase: new Date(),
      },
      {
        id: 7,
        name: '- Daal Masoor 500 grams',
        quantity: 1,
        price: 20,
        img: 'https://cdn.dummyjson.com/product-images/21/1.png',
        category: 'Grocery',
        sold: false,
        cartQuantity: 1,
        dateOfPurchase: new Date(),
      },
      {
        id: 8,
        name: 'Mornadi Velvet Bed',
        quantity: 4,
        price: 40,
        img: 'https://cdn.dummyjson.com/product-images/31/1.jpg',
        category: 'Furniture',
        sold: false,
        cartQuantity: 1,
        dateOfPurchase: new Date(),
      },
      {
        id: 9,
        name: '3 Tier Corner Shelves',
        quantity: 6,
        price: 700,
        img: 'https://cdn.dummyjson.com/product-images/33/1.jpg',
        category: 'Furniture',
        sold: false,
        cartQuantity: 1,
        dateOfPurchase: new Date(),
      },
    ];
    this.filteredProduct = this.products;
  }
  filterProducts() {
    if (this._filterPrice !== undefined) {
      this.filteredProduct = this.products.filter(
        (product) => product.price <= this._filterPrice
      );
    }
  }
}
