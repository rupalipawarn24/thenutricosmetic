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
import { ProductDetailsModule } from './views/product-details/product-details.module';
import { BreadcrumbComponent } from './layouts/breadcrumb/breadcrumb.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbAccordionModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCatalogComponent } from './views/product-catalog/product-catalog.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BrandsDetailComponent } from './views/brands-detail/brands-detail.component';
import { LoginPageComponent } from './views/account-pages/login-page/login-page.component';
import { RegisterPageComponent } from './views/account-pages/register-page/register-page.component';
import { AccessibilityComponent } from './views/footer-pages/accessibility/accessibility.component';
import { AccountPageComponent } from './views/account-pages/account-page/account-page.component';
import { EditAddressComponent } from './views/account-pages/edit-address/edit-address.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CollectionsComponent } from './views/collections/collections.component';
import { CareersComponent } from './views/footer-pages/careers/careers.component';
import { AdvertisingComponent } from './views/footer-pages/advertising/advertising.component';
import { AboutUsComponent } from './views/footer-pages/about-us/about-us.component';
import { CustomerPromiseComponent } from './views/footer-pages/customer-promise/customer-promise.component';
import { GiftCardsComponent } from './views/footer-pages/gift-cards/gift-cards.component';
import { ReferAFriendComponent } from './views/footer-pages/refer-a-friend/refer-a-friend.component';
import { BeautyBeneathTheSurfaceComponent } from './views/footer-pages/beauty-beneath-the-surface/beauty-beneath-the-surface.component';
import { AffiliatesComponent } from './views/footer-pages/affiliates/affiliates.component';
import { InvestorsComponent } from './views/footer-pages/investors/investors.component';
import { AffiliatesFaqsComponent } from './views/footer-pages/affiliates-faqs/affiliates-faqs.component';
import { GetInTouchComponent } from './views/footer-pages/get-in-touch/get-in-touch.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { IwishComponent } from './views/iwish/iwish.component';
import { CreateCollectionComponent } from './views/manual_collection/create-collection/create-collection.component';
import { ShowCollectionsComponent } from './views/manual_collection/show-collections/show-collections.component';



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
    BrandsDetailComponent,
    LoginPageComponent,
    RegisterPageComponent,
    AccessibilityComponent,
    AccountPageComponent,
    EditAddressComponent,
    ShoppingCartComponent,
    CollectionsComponent,
    CareersComponent,
    AdvertisingComponent,
    AboutUsComponent,
    CustomerPromiseComponent,
    GiftCardsComponent,
    ReferAFriendComponent,
    BeautyBeneathTheSurfaceComponent,
    AffiliatesComponent,
    InvestorsComponent,
    AffiliatesFaqsComponent,
    GetInTouchComponent,
    NotfoundComponent,
    IwishComponent,
    CreateCollectionComponent,
    ShowCollectionsComponent,
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
    ReactiveFormsModule,
    // ProductDetailsModule,
    FormsModule,
    HttpClientModule,

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
