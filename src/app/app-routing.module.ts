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
        path: 'privacy',
        component: PrivacyPolicyComponent
        // loadChildren: () => import('./views/brands-detail/product-details.module').then(m => m.ProductDetailsModule)

      },

    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
