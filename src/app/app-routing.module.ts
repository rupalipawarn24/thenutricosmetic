import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { ProductCatalogComponent } from './views/product-catalog/product-catalog.component';
import { FooterPagesComponent } from './views/footer-pages/footer-pages.component';
import { BrandsDetailComponent } from './views/brands-detail/brands-detail.component';
import { FaqComponent } from './views/footer-pages/faq/faq.component';
import { HowToShopComponent } from './views/footer-pages/how-to-shop/how-to-shop.component';
import { DisclaimerComponent } from './views/footer-pages/disclaimer/disclaimer.component';
import { PrivacyPolicyComponent } from './views/footer-pages/privacy-policy/privacy-policy.component';
import { LoginPageComponent } from './views/account-pages/login-page/login-page.component';
import { RegisterPageComponent } from './views/account-pages/register-page/register-page.component';
import { ContactUsComponent } from './views/footer-pages/contact-us/contact-us.component';
import { CookiePolicyComponent } from './views/footer-pages/cookie-policy/cookie-policy.component';
import { AccountPageComponent } from './views/account-pages/account-page/account-page.component';
import { EditAddressComponent } from './views/account-pages/edit-address/edit-address.component';
import { ShoppingCartComponent } from './views/shopping-cart/shopping-cart.component';
import { CollectionsComponent } from './views/collections/collections.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
        // loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'product-details',
        component: ProductDetailsComponent
        // loadChildren: () => import('./views/product-details/product-details.module').then(m => m.ProductDetailsModule)

      },
      {
        path: 'product-catalog',
        component: ProductCatalogComponent
        // loadChildren: () => import('./views/product-details/product-details.module').then(m => m.ProductDetailsModule)

      },
      {
        path: 'pages',
        component: FooterPagesComponent
        // loadChildren: () => import('./views/product-details/product-details.module').then(m => m.ProductDetailsModule)

      },
      {
        path: 'brands-detail',
        component: BrandsDetailComponent
        // loadChildren: () => import('./views/brands-detail/product-details.module').then(m => m.ProductDetailsModule)

      },
      {
        path: 'login',
        component: LoginPageComponent

      },
      {
        path: 'register',
        component: RegisterPageComponent

      },
      {
        path: 'contact-us',
        component: FooterPagesComponent

      },
      {
        path: 'How-To-Shop',
        component: FooterPagesComponent
      },
      {
        path: 'orders-shipping',
        component: FooterPagesComponent
      },
      {
        path: 'payment-pricing',
        component: FooterPagesComponent
      },
      {
        path: 'returns-exchanges',
        component: FooterPagesComponent
      },
      {
        path: 'term-conditions',
        component: FooterPagesComponent
      },
      {
        path: 'faqs',
        component: FooterPagesComponent
      },
      {
        path: 'about',
        component: FooterPagesComponent
      },
      {
        path: 'privacy-policy',
        component: FooterPagesComponent
      },
      {
        path: 'cookie',
        component: FooterPagesComponent
      },
      {
        path: 'disclaimer',
        component: FooterPagesComponent
      },
      {
        path: 'accessibility',
        component: FooterPagesComponent
      },
      {
        path: 'gift-card',
        component: FooterPagesComponent
      },
      {
        path: 'refer-friend-terms-conditions',
        component: FooterPagesComponent
      },
      {
        path: 'covid-information',
        component: FooterPagesComponent
      },
      {
        path: 'account-page',
        component: AccountPageComponent
      },
      {
        path: 'edit-address',
        component: EditAddressComponent
      },
      {
        path: 'checkout-page',
        component: ShoppingCartComponent
      },
      {
        path: 'collections/:id',
        component: CollectionsComponent
      },
     
     
      
      
    

    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
