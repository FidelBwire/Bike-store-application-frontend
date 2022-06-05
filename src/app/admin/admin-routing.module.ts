import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared-module/components/not-found/not-found.component';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CustomersComponent } from './components/hr/customers/customers.component';
import { HrLandingPageComponent } from './components/hr/hr-landing-page/hr-landing-page.component';
import { StaffsComponent } from './components/hr/staffs/staffs.component';
import { BrandsComponent } from './components/production/brands/brands.component';
import { ProductionLandingPageComponent } from './components/production/production-landing-page/production-landing-page.component';
import { AddEditProductComponent } from './components/production/products/add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './components/production/products/product-details/product-details.component';
import { ProductsComponent } from './components/production/products/products.component';
import { OrderItemsComponent } from './components/sales/orders/order-items/order-items.component';
import { OrdersComponent } from './components/sales/orders/orders.component';
import { SalesLandingPageComponent } from './components/sales/sales-landing-page/sales-landing-page.component';
import { StoresComponent } from './components/sales/stores/stores.component';

const routes: Routes = [
  { 
    path: '', component: AdminComponent,
    children: [
      { path: '', component: AdminHomeComponent},

      { path: 'production', component: ProductionLandingPageComponent},
      { path: 'brands', component: BrandsComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'products/:id', component: ProductDetailsComponent},
      { path: 'products/create', component: AddEditProductComponent},

      { 
        path: 'hr', component: HrLandingPageComponent
        // children:[
        //   { path: 'customers', component: StaffsComponent },
        //   { path: 'staffs', component: StaffsComponent }
        // ]
      },
      { path: 'staffs', component: StaffsComponent },
      { path: 'customers', component: CustomersComponent },

      { path: 'sales', component: SalesLandingPageComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/:orderId', component: OrderItemsComponent }
    ]
  },
  { path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
