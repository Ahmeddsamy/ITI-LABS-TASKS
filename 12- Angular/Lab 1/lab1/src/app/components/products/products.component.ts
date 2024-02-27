import { Component } from '@angular/core';
import { Store } from '../../models/store';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  ahmedStore: Store = new Store(
    'ahmedStore',
    ['new Cairo', 'cairo', 'Egypt'],
    'storeImg'
  );
  ahmedProduct: Iproduct = {
    id: 1,
    name: 'Ahmed Store',
    quantity: 22,
    price: 23,
    img: 'src/ff',
    categoryId: 1,
  };
}
