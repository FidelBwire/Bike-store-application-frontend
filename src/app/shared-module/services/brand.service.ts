import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Page } from '../pagination/page';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private baseUrl = 'http://localhost:8989/production/brands';
  brandsMap = new Map();

  constructor(private http: HttpClient) { }

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.baseUrl}` + "/all");
  }

  getBrands(page: number, size: number): Observable<Page<Brand>> {
    return this.http.get<Page<Brand>>(`${this.baseUrl}?page=` + page + '&size=' + size);
  }

  getBrand(brandId: number): Observable<Brand> {
    return this.http.get<Brand>(`${this.baseUrl}` + "/" + brandId);
  }

  getBrandsMap(): Map<number, string> {
    this.getAllBrands().subscribe(response => {
      response.forEach(brand => {
        this.brandsMap.set(brand.id, brand.name);
      });
    });
    return this.brandsMap;
  }

}
