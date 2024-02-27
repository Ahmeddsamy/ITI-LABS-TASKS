import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { CategoryService } from '../../services/category.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insertproduct',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './insertproduct.component.html',
  styleUrl: './insertproduct.component.scss',
})
export class InsertProductComponent implements OnInit {
  productForm: FormGroup;
  categories: any[] = [];
  products: any[] = [];
  currentPage: number = 1;
  totalProducts: number = 0;
  editingProductId: string | null = null;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private categoryService: CategoryService
  ) {
    this.productForm = this.fb.group({
      image: null,
      productName: '',
      slug: '',
      priceAfterDiscount: null,
      finalPrice: null,
      category: '',
      stock: null,
    });
  }

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchProducts(this.currentPage);
  }

  fetchCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => (this.categories = data.categories),
    });
  }

  fetchProducts(page: number): void {
    this.productService.getProductsPaginate(page, 5).subscribe({
      next: (data) => {
        console.log('Fetched products:', data);
        this.products = data.products;
        this.totalProducts = data.totalProducts;
      },
      error: (error) => console.error('Error getting products', error),
    });
  }

  loadProductData(productId: string): void {
    this.editingProductId = productId;
    this.productService.getProductByyID(productId).subscribe({
      next: (product) => {
        this.productForm.patchValue({
          productName: product.productName,
          slug: product.slug,
          priceAfterDiscount: product.priceAfterDiscount,
          finalPrice: product.finalPrice,
          category: product.category,
          stock: product.stock,
        });
      },
      error: (error) => console.error('Error fetching product', error),
    });
  }

  deleteProduct(productId: string): void {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this product?'
    );

    if (isConfirmed) {
      this.productService.deleteProduct(productId).subscribe({
        next: (response) => {
          console.log('Product deleted successfully', response);
          this.fetchProducts(this.currentPage);
        },
        error: (error) => console.error('Error deleting product', error),
      });
    }
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productForm.patchValue({ image: file });
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    Object.keys(this.productForm.controls).forEach((key) => {
      formData.append(key, this.productForm.get(key)!.value);
    });

    this.productService.addProduct(formData).subscribe({
      next: (response) => console.log('Product added successfully', response),
      error: (error) => console.error('Error adding product', error),
    });
  }

  onUpdate(): void {
    if (!this.editingProductId) {
      console.error('No product selected for updating');
      return;
    }

    const formData = new FormData();
    Object.keys(this.productForm.controls).forEach((key) => {
      formData.append(key, this.productForm.get(key)!.value);
    });
    console.log(this.productForm.value);

    this.productService
      .updateProduct(this.editingProductId, this.productForm.value)
      .subscribe({
        next: (response) => {
          console.log('Product updated successfully', response);

          this.fetchProducts(this.currentPage);
          this.editingProductId = null;
          this.productForm.reset();
        },
        error: (error) => console.error('Error updating product', error),
      });
  }
}
