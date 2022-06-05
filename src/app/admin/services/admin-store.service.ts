import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared-module/pagination/page';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class AdminStoreService {

  private baseUrl = "http://localhost:8989/sales/stores";
  
  constructor(private http: HttpClient) { }

  getStores(page: number, size: number): Observable<Page<Store>> {
    return this.http.get<Page<Store>>(`${this.baseUrl}?page=` + page + '&size=' + size);
  }
}
