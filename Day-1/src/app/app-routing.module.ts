import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Order', component: OrderParentComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'Details/:prodId', component: ProductDetailsComponent },
  { path: 'Admin/NewProduct', component: AddNewProductComponent },
  { path: 'Admin/NewProduct/:prodId', component: AddNewProductComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
