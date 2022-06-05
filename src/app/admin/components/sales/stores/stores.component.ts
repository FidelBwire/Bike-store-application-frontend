import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/admin/models/store';
import { AdminStoreService } from 'src/app/admin/services/admin-store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  loading: boolean = true;

  stores: Store[] = [];

  collectionSize!: number;
  pageSize: number = 10;
  page: number = 1;
  offset!: number;
  first!: number;
  last!: number;
  numberOfElements!: number;

  constructor(
    private storeService: AdminStoreService
  ) { }

  ngOnInit(): void {
    this.loadStores();
  }

  loadStores(page?: number) {
    (page==0)?this.page = 0 : page = this.page-1;
    this.storeService.getStores(page, this.pageSize).subscribe(data => {
      this.stores = data.content;
      this.collectionSize = data.totalElements;
      this.offset = data.pageable.offset;
      this.first= this.offset + 1;
      this.last = ((this.offset + this.pageSize) <= this.collectionSize)?
                        this.offset + this.pageSize:this.collectionSize;
      this.numberOfElements = data.numberOfElements;
      this.loading = false;
    });
  }

  refreshProducts() {

  }

  deleteStore(storeId: number) {

  }

  open(store?: Store) {

  }

}
