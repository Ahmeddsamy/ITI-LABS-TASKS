import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { InsertProductComponent } from './components/insertproduct/insertproduct.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/:id', component: ProductdetailsComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'insertproduct', component: InsertProductComponent }, // Child route under admin
    ],
  },
  //  wild card route
  { path: '**', component: PagenotfoundComponent },
];
