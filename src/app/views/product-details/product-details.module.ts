import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
// import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ProductDetailsRoutingModule,
    
    // NgxGalleryModule,
    // NgbModule

  ],
  declarations: [
    //  ProductDetailsComponent
  ]
})
export class ProductDetailsModule { }
