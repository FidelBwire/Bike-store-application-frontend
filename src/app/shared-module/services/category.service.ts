import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8989/production/categories';
  categoriesMap = new Map();

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}`);
  }

  getCategory(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/` + categoryId);
  }

  getCategoriesMap(): Map<number, string> {
    this.getCategories().subscribe(response => {
      response.forEach(category => {
        this.categoriesMap.set(category.id, category.name);
      });
    });
    return this.categoriesMap;
  }

}
