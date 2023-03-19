import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidemenuComponent } from './Components/sidemenu/sidemenu.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormsModule } from '@angular/forms';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { BorderStyleDirective } from './Directives/border-style.directive';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NationalIdPipe } from './Pipes/national-id.pipe';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    ProductsComponent,
    OrderParentComponent,
    NotFoundComponent,
    BorderStyleDirective,
    HomeComponent,
    ProductDetailsComponent,
    NationalIdPipe,
    CreditCardPipe,
    AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
