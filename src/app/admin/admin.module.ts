import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { BrandsComponent } from './components/production/brands/brands.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { PageTopComponent } from './components/page-top/page-top.component';
import { ProductsComponent } from './components/production/products/products.component';
import { CategoriesComponent } from './components/production/categories/categories.component';
import { AddEditProductComponent } from './components/production/products/add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './components/production/products/product-details/product-details.component';
import { StaffsComponent } from './components/hr/staffs/staffs.component';
import { CustomersComponent } from './components/hr/customers/customers.component';
import { StoresComponent } from './components/sales/stores/stores.component';
import { OrdersComponent } from './components/sales/orders/orders.component';
import { OrderItemsComponent } from './components/sales/orders/order-items/order-items.component';
import { ProductionLandingPageComponent } from './components/production/production-landing-page/production-landing-page.component';
import { HrLandingPageComponent } from './components/hr/hr-landing-page/hr-landing-page.component';
import { SalesLandingPageComponent } from './components/sales/sales-landing-page/sales-landing-page.component';
import { PersonsOverviewComponent } from './components/hr/hr-landing-page/persons-overview/persons-overview.component';
import { AddEditBrandComponent } from './components/production/brands/add-edit-brand/add-edit-brand.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    BrandsComponent,
    PageTopComponent,
    ProductsComponent,
    CategoriesComponent,
    AddEditProductComponent,
    ProductDetailsComponent,
    StaffsComponent,
    CustomersComponent,
    StoresComponent,
    OrdersComponent,
    OrderItemsComponent,
    ProductionLandingPageComponent,
    HrLandingPageComponent,
    SalesLandingPageComponent,
    PersonsOverviewComponent,
    AddEditBrandComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModuleModule
  ]
})
export class AdminModule { }
