import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared-module/pagination/page';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminCustomerService {

  private baseUrl:string ='http://localhost:8989/hr/customers';

  constructor(private http:HttpClient) { }

  getAllCustomersList() {

  }

  getPaginatedCustomersList(page: number, size: number): Observable<Page<Customer>> {
    return this.http.get<Page<Customer>>(`${this.baseUrl}?page=` + page + '&size=' + size);
  }
}
