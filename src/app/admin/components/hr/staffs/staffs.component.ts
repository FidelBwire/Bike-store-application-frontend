import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/admin/models/staff';
import { AdminStaffService } from 'src/app/admin/services/admin-staff.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit {

  loading: boolean = true;

  staffs: Staff[] = [];

  collectionSize!: number;
  pageSize: number = 10;
  page: number = 1;
  offset!: number;
  first!: number;
  last!: number;
  numberOfElements!: number;

  constructor(private staffsService: AdminStaffService) { 
    this.loadStaffs();
  }

  ngOnInit(): void {
    
  }

  loadStaffs(page?: number) {
    (page==0)?this.page = 0 : page = this.page-1;
    this.staffsService.getStaffs(page, this.pageSize).subscribe(data => {
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

  // getStaffName(staffId: number): any {
  //   this.staffsService.getStaffName(staffId).subscribe(data => {
  //     return data;
  //   })
  // }

  refreshProducts() {

  }

  open(staff?: Staff) {

  }

  deleteStaff(staffId: number) {

  }

}
