import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  clientName: string = 'Ahmed Samy';
  products: Iproduct[];
  filteredProduct: Iproduct[] = [];

  togglePurchase(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (product) {
      product.sold = !product.sold;
      product.quantity -= 1;
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
      },
      {
        id: 2,
        name: 'iPhone X',
        quantity: 3,
        price: 899,
        img: 'https://cdn.dummyjson.com/product-images/2/1.jpg',
        category: 'Smartphone',
        sold: false,
      },
      {
        id: 3,
        name: 'Infinix INBOOK',
        quantity: 9,
        price: 1099,
        img: 'https://cdn.dummyjson.com/product-images/9/1.jpg',
        category: 'Laptop',
        sold: false,
      },
      {
        id: 4,
        name: 'HP Pavilion 15-DK1056WM',
        quantity: 8,
        price: 1099,
        img: 'https://cdn.dummyjson.com/product-images/10/1.jpg',
        category: 'Laptop',
        sold: false,
      },
      {
        id: 5,
        name: 'Tree Oil 30ml',
        quantity: 7,
        price: 12,
        img: 'https://cdn.dummyjson.com/product-images/17/1.jpg',
        category: 'Health & Beauty',
        sold: false,
      },
      {
        id: 6,
        name: 'Skin Beauty Serum.',
        quantity: 5,
        price: 46,
        img: 'https://cdn.dummyjson.com/product-images/19/1.jpg',
        category: 'Health & Beauty',
        sold: false,
      },
      {
        id: 7,
        name: '- Daal Masoor 500 grams',
        quantity: 1,
        price: 20,
        img: 'https://cdn.dummyjson.com/product-images/21/1.png',
        category: 'Grocery',
        sold: false,
      },
      {
        id: 8,
        name: 'Mornadi Velvet Bed',
        quantity: 4,
        price: 40,
        img: 'https://cdn.dummyjson.com/product-images/31/1.jpg',
        category: 'Furniture',
        sold: false,
      },
      {
        id: 9,
        name: '3 Tier Corner Shelves',
        quantity: 6,
        price: 700,
        img: 'https://cdn.dummyjson.com/product-images/33/1.jpg',
        category: 'Furniture',
        sold: false,
      },
    ];
    this.filteredProduct = this.products;
  }

  set filteredProducts(value: string) {
    this.filteredProduct = this.filterSelectedProduct(value);
  }

  filterSelectedProduct(value: string) {
    if (value === 'all') {
      return this.products;
    } else {
      return this.products.filter(
        (product: Iproduct) => product.category === value
      );
    }
  }
}
