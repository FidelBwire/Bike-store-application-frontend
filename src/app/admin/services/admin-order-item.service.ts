import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminOrderItemService {

  baseUrl: string = "http://localhost:8989/sales/orderItems";

  constructor(private http: HttpClient) { }

  // getOrderItem(orderId: number): Observable<OrderItem> {
  //   // return this.baseUrl.get<>
  // }
}
