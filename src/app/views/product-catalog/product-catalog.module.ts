import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogRoutingModule } from './product-catalog-routing.module';
import { ProductCatalogComponent } from './product-catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ProductCatalogRoutingModule,
  ],
  declarations: [
    // ProductCatalogComponent
  ]
})
export class ProductDetailsModule { }
