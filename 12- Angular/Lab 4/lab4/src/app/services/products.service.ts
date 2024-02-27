import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private addProductUrl =
    'https://ahmed-samy-node-project-iti.onrender.com/product';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<any> {
    return this.http.get<any>('https://fakestoreapi.com/products');
  }
  getProductByID(prodID: number): Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products/${prodID}`);
  }
  getProductByyID(productId: string): Observable<any> {
    return this.http.get<any>(
      `https://ahmed-samy-node-project-iti.onrender.com/product/${productId}`
    );
  }
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.addProductUrl, product);
  }
  updateProduct(productId: string, productData: FormData): Observable<any> {
    return this.http.patch(
      `https://ahmed-samy-node-project-iti.onrender.com/product/${productId}`,
      productData
    );
  }
  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(
      `https://ahmed-samy-node-project-iti.onrender.com/product/${productId}`
    );
  }
  getProductsPaginate(page: number, limit: number): Observable<any> {
    return this.http.get<any>(
      `https://ahmed-samy-node-project-iti.onrender.com/product?page=${page}&limit=${limit}`
    );
  }
}
