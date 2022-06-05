import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/admin/models/order';
import { AdminOrderService } from 'src/app/admin/services/admin-order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  loading: boolean = true;

  collectionSize!: number;
  pageSize: number = 10;
  page: number = 1;
  offset!: number;
  first!: number;
  last!: number;
  numberOfElements!: number;

  constructor(
    private orderService: AdminOrderService
  ) { 
    this.loadOrders();
  }

  ngOnInit(): void {
  }

  loadOrders(page?: number) {
    (page==0)?this.page = 0 : page = this.page-1;
    this.orderService.getOrders(page, this.pageSize).subscribe(data => {
      this.orders = data.content;
      this.collectionSize = data.totalElements;
      this.offset = data.pageable.offset;
      this.first= this.offset + 1;
      this.last = ((this.offset + this.pageSize) <= this.collectionSize)?
                        this.offset + this.pageSize:this.collectionSize;
      this.numberOfElements = data.numberOfElements;
      this.loading = false;
    });
  }

  refreshOrders() {

  }

  deleteOrder(orderId: number) {
    
  }

  open(order?: Order) {
  }

}
