import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminProductService } from 'src/app/admin/services/admin-product.service';
import { Brand } from 'src/app/shared-module/models/brand';
import { Category } from 'src/app/shared-module/models/category';
import { Product } from 'src/app/shared-module/models/product';
import { BrandService } from 'src/app/shared-module/services/brand.service';
import { CategoryService } from 'src/app/shared-module/services/category.service';
import { ProductService } from 'src/app/shared-module/services/product.service';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  loading: boolean = true;

  products: Product[] = [];  
  brands!: Brand[];
  brandsMap = new Map();
  categories!: Category[];
  categoriesMap = new Map();

  collectionSize!: number;
  pageSize: number = 10;
  page: number = 1;
  offset!: number;
  first!: number;
  last!: number;
  numberOfElements!: number;

  product!: Product;

  constructor(
      // private productService: ProductService,
      private productService: AdminProductService,
      private brandService: BrandService,
      private categoryService: CategoryService,      
      private modalService: NgbModal,
      private route: ActivatedRoute,
      private router: Router) 
  { 
    this.getBrands();
    this.getCategories();    
    // this.route.params.subscribe((params: Params) => {
      // console.log("Page: " + params['page']);
      // console.log("Size: " + params['size']);
    // });
    this.loadProducts();
  }

  ngOnInit(): void {
    
  }

  loadProducts(page?: number) {
    (page==0)?this.page = 0 : page = this.page-1;
    this.productService.getPaginatedProductsList(page, this.pageSize)
      .subscribe(
        response => {
          this.products = response.content;
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

  refreshProducts() {
    this.loadProducts();
  }

  getBrands() {
    this.brandsMap = this.brandService.getBrandsMap();
  }
  
  getCategories() {
    this.categoriesMap = this.categoryService.getCategoriesMap();
  }

  getBrandName(brandId:number): string {
    return this.brandsMap.get(brandId);
  }
  
  getCategoryName(categoryId:number): string {
    return this.categoriesMap.get(categoryId);
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product.id);
  }
  
  open(product?: Product) {
    const addEditModal = this.modalService.open(AddEditProductComponent, {size: 'lg'});
    addEditModal.componentInstance.product = product;
  }

}
