import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminProductService } from 'src/app/admin/services/admin-product.service';
import { Brand } from 'src/app/shared-module/models/brand';
import { Category } from 'src/app/shared-module/models/category';
import { Product } from 'src/app/shared-module/models/product';
import { BrandService } from 'src/app/shared-module/services/brand.service';
import { CategoryService } from 'src/app/shared-module/services/category.service';
import { ProductService } from 'src/app/shared-module/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  @Input() product!: Product;

  brands!: Brand[];
  categories!: Category[];
  productForm!: FormGroup;
  brandName!: string;
  categoryName!: string;
  updatedProduct: Product = new Product();

  constructor(
    private productService: AdminProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) 
  { 
    this.brandService.getAllBrands().subscribe(
      response => {
        this.brands = response;
      }
    );
    
    this.categoryService.getCategories().subscribe(
      response => {
        this.categories = response;
      }
    );
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: [(this.product)?this.product.name:'', Validators.required],
      modelYear: [(this.product)?this.product.modelYear:'', Validators.required],
      listPrice: [(this.product)?this.product.listPrice:'', Validators.required],
      description: [(this.product)?this.product.description:'', Validators.required]
      // brand: [(this.product)?this.product.brandId:'', Validators.required],
      // category: [(this.product)?this.product.categoryId:'', Validators.required]
    });

    if(this.product) {
      this.setBrandName(this.product.brandId);
      this.setCategoryName(this.product.categoryId);
    }
    else {
      this.product = new Product();
      this.brandName = '*Not selected';
      this.categoryName = '*Not selected';
    }
  }

  saveProduct() {
    if(this.product.id) {
      this.productService.updateProduct(this.product.id, this.getUpdatedProduct()).subscribe(response => {});
    } else {
      this.productService.createProduct(this.getUpdatedProduct()).subscribe(response => {});
    }
  }

  setMargin(formControlName: string): string {
    return (this.productForm.get(formControlName)?.touched && 
    this.productForm.get(formControlName)?.invalid)?'0rem':'1rem'
  }

  setBrandName(brandId: number) {
    // this.brandService.getBrand(brandId).subscribe(
    //   data => {
    //     this.brandName = data.name;
    //   }
    // );
    this.brandName = "Sample test data";
  }

  setBrand(brandId: number) {
    this.productForm.value.brand = brandId;
    this.updatedProduct.brandId = brandId;
    this.setBrandName(brandId);
  }

  setCategoryName(categoryId: number) {
    // this.categoryService.getCategory(categoryId).subscribe(
    //   data => {
    //     this.categoryName = data.name;
    //   }
    // );
    this.categoryName = "Sample test data";
  }

  setCategory(categoryId: number) {
    this.productForm.value.category = categoryId;
    this.updatedProduct.categoryId = categoryId;
    this.setCategoryName(categoryId);
  }

  getUpdatedProduct(): Product {
    this.updatedProduct.name = this.productForm.value.name;
    this.updatedProduct.modelYear = this.productForm.value.modelYear;
    this.updatedProduct.listPrice = this.productForm.value.listPrice;
    this.updatedProduct.description = this.productForm.value.description;
    
    // Come back later
    this.updatedProduct.brandId = this.product.brandId;
    this.updatedProduct.categoryId = this.product.categoryId;

    return this.updatedProduct;
  }

}
