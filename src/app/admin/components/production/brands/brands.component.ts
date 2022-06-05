import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Brand } from 'src/app/shared-module/models/brand';
import { BrandService } from 'src/app/shared-module/services/brand.service';
import { AddEditBrandComponent } from './add-edit-brand/add-edit-brand.component';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  loading: boolean = true;

  brands!: Brand[];

  collectionSize!: number;
  pageSize: number = 10;
  page: number = 1;
  offset!: number;
  first!: number;
  last!: number;
  numberOfElements!: number;

  constructor(
    private brandService: BrandService,
    private modalService: NgbModal
  ) { 
    this.loadBrands();
  }

  ngOnInit(): void {
  }

  loadBrands(page?: number) {
    (page==0)?this.page = 0 : page = this.page-1;
    this.brandService.getBrands(page, this.pageSize)
      .subscribe(
        response => {
          this.brands = response.content;
          this.collectionSize = response.totalElements;
          this.offset = response.pageable.offset;
          this.first= this.offset + 1;
          this.last = ((this.offset + this.pageSize) <= this.collectionSize)?
                            this.offset + this.pageSize:this.collectionSize;
          this.numberOfElements = response.numberOfElements;
          this.loading = false;
        }
      );
  }

  open(brand?: Brand) {
    const addEditModal = this.modalService.open(AddEditBrandComponent, {size: 'sm'});
    addEditModal.componentInstance.brand = brand;
  }

  deleteBrand(brand: Brand) {

  }

  refreshProducts() {

  }

}
