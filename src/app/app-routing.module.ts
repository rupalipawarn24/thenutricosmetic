import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { ProductCatalogComponent } from './views/product-catalog/product-catalog.component';
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

    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
