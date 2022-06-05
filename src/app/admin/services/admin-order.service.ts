import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared-module/pagination/page';
import { Order } from '../models/order';
import { OrderItem } from '../models/order-item';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderService {

  baseUrl: string = "http://localhost:8989/sales/orders";

  constructor(private http: HttpClient) { }

  getOrders(page: number, size: number): Observable<Page<Order>> {
    return this.http.get<Page<Order>>(`${this.baseUrl}?page=` + page + '&size=' + size);
  }

  getOrderItems(orderId: number): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(`${this.baseUrl}` + '/' + orderId + '/items')
  }
}
