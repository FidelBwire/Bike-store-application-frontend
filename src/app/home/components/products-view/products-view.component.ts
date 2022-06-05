import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared-module/models/product';
import { BrandService } from 'src/app/shared-module/services/brand.service';
import { CategoryService } from 'src/app/shared-module/services/category.service';
import { ProductService } from 'src/app/shared-module/services/product.service';

@Component({
  selector: 'products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  products: Product[] = [];
  brandsMap = new Map();
  categoriesMap = new Map();

  collectionSize: number = 300;
  page: number = 1;
  pageSize: number = 20;

  constructor(
    private productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe(brands => {
      brands.forEach(brand => {
        this.brandsMap.set(brand.id, brand.name);
      });
    });

    this.categoryService.getCategories().subscribe(categories => {
      categories.forEach(category => {
        this.categoriesMap.set(category.id, category.name);
      });
    });

    this.loadProducts();
  }

  loadProducts() {
    this.productService.getPaginatedProductsList(this.page - 1, this.pageSize).subscribe(data => {
      this.products = data.content;
      
    });
  }

  getBrandName(brandId: number): string {
    return this.brandsMap.get(brandId);
  }
  
  getCategoryName(categoryId: number): string {
    return this.categoriesMap.get(categoryId);
  }

}
