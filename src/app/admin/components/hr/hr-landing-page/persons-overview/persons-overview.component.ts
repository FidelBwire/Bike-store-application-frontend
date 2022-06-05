import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/admin/models/customer';
import { Staff } from 'src/app/admin/models/staff';
import { AdminCustomerService } from 'src/app/admin/services/admin-customer.service';
import { AdminStaffService } from 'src/app/admin/services/admin-staff.service';

@Component({
  selector: 'persons-overview',
  templateUrl: './persons-overview.component.html',
  styleUrls: ['./persons-overview.component.css']
})
export class PersonsOverviewComponent implements OnInit {

  @Input() personsType: string = 'customers';

  loading: boolean = true;

  customers: Customer[] = [];
  staffs: Staff[] = [];

  collectionSize!: number;
  pageSize: number = 10;
  page: number = 1;
  offset!: number;
  first!: number;
  last!: number;
  numberOfElements!: number;

  constructor(
    private customerService: AdminCustomerService,
    private staffService: AdminStaffService
  ) { this.loadCustomers(); }

  ngOnInit(): void {
    
  }

  load() {
    
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

  loadStaffs(page?: number) {
    (page==0)?this.page = 0 : page = this.page-1;
    this.staffService.getStaffs(page, this.pageSize).subscribe(data => {
      this.staffs = data.content;
      this.collectionSize = data.totalElements;
      this.offset = data.pageable.offset;
      this.first= this.offset + 1;
      this.last = ((this.offset + this.pageSize) <= this.collectionSize)?
                        this.offset + this.pageSize:this.collectionSize;
      this.numberOfElements = data.numberOfElements;
      this.loading = false;
    });
  }

}
