import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Page } from '../pagination/page';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseUrl = 'http://localhost:9191/production/products';
  // public baseUrl = 'http://localhost:8989/production/products';

  constructor(public http:HttpClient) { }

  getAllProductsList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/all`);
  }
  
  getPaginatedProductsList(page: number, size: number): Observable<Page<Product>> {
    return this.http.get<Page<Product>>(`${this.baseUrl}?page=` + page + '&size=' + size);
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/` + productId);
  }
}
