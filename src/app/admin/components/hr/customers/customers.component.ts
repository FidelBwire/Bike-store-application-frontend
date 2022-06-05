import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/admin/models/customer';
import { AdminCustomerService } from 'src/app/admin/services/admin-customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  loading: boolean = true;

  customers: Customer[] = [];

  collectionSize!: number;
  pageSize: number = 10;
  page: number = 1;
  offset!: number;
  first!: number;
  last!: number;
  numberOfElements!: number;

  constructor(
    private customerService: AdminCustomerService
  ) { 
    this.loadCustomers();
  }

  ngOnInit(): void {
    
  }

  loadCustomers(page?: number) {
    (page==0)?this.page = 0 : page = this.page-1;
    this.customerService.getPaginatedCustomersList(page, this.pageSize).subscribe(data => {
      this.customers = data.content;
      this.collectionSize = data.totalElements;
      this.offset = data.pageable.offset;
      this.first= this.offset + 1;
      this.last = ((this.offset + this.pageSize) <= this.collectionSize)?
                        this.offset + this.pageSize:this.collectionSize;
      this.numberOfElements = data.numberOfElements;
      this.loading = false;
    });
  }

  deleteCustomer(customerId: number) {

  }

  refreshProducts() {
    
  }
  
  open(customer?: Customer) {
    
  }

}
