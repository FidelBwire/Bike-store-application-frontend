import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared-module/models/product';
import { ProductService } from 'src/app/shared-module/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService extends ProductService {

  // private baseUrl = 'http://localhost:9191/production/products';

  // constructor(private httpClient: HttpClient) { 
  //   super(httpClient);
  // }

  updateProduct(productId: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/` + productId, product);
  }

  deleteProduct(productId: number) {
    console.log("deleteProduct() called");
    this.http.delete(`${this.baseUrl}/` + productId);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}`, product);
  }
}
