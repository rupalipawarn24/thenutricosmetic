import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ProductDetailsModule } from './views/product-details/product-details.module';
import { BreadcrumbComponent } from './layouts/breadcrumb/breadcrumb.component';
import { BrandsDetailComponent } from './views/brands-detail/brands-detail.component';
const APP_CONTAINERS = [
  DefaultLayoutComponent
];
@NgModule({
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        HeaderComponent,
        FooterComponent,
        BreadcrumbComponent,
        BrandsDetailComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        ProductDetailsModule,
      
    ]
})
export class AppModule { }
