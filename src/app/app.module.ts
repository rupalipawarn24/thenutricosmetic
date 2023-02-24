import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BreadcrumbComponent } from './layouts/breadcrumb/breadcrumb.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbAccordionModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCatalogComponent } from './views/product-catalog/product-catalog.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterPagesComponent } from './views/footer-pages/footer-pages.component';
import { ContactUsComponent } from './views/footer-pages/contact-us/contact-us.component';
import { HowToShopComponent } from './views/footer-pages/how-to-shop/how-to-shop.component';
import { OrdersShippingComponent } from './views/footer-pages/orders-shipping/orders-shipping.component';
import { PaymentPricingComponent } from './views/footer-pages/payment-pricing/payment-pricing.component';
import { ReturnExchangesComponent } from './views/footer-pages/return-exchanges/return-exchanges.component';
import { FaqComponent } from './views/footer-pages/faq/faq.component';
import { TermConditionsComponent } from './views/footer-pages/term-conditions/term-conditions.component';
import { PrivacyPolicyComponent } from './views/footer-pages/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './views/footer-pages/cookie-policy/cookie-policy.component';
import { DisclaimerComponent } from './views/footer-pages/disclaimer/disclaimer.component';
import { GiftCardsFaqComponent } from './views/footer-pages/gift-cards-faq/gift-cards-faq.component';
import { ReferFriendTermsConditionsComponent } from './views/footer-pages/refer-friend-terms-conditions/refer-friend-terms-conditions.component';
import { COVIDInformationComponent } from './views/footer-pages/covid-information/covid-information.component';
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
    ProductDetailsComponent,
    ProductCatalogComponent,
    FooterPagesComponent,
    ContactUsComponent,
    HowToShopComponent,
    OrdersShippingComponent,
    PaymentPricingComponent,
    ReturnExchangesComponent,
    FaqComponent,
    TermConditionsComponent,
    PrivacyPolicyComponent,
    CookiePolicyComponent,
    DisclaimerComponent,
    GiftCardsFaqComponent,
    ReferFriendTermsConditionsComponent,
    COVIDInformationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxGalleryModule,
    NgbModule,
    NgbAccordionModule,
    NgbDropdownModule,
    NgxSliderModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
