import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './layouts/header/header.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', loadChildren:()=>import('./modules/admin/admin.module').then((m)=>m.AdminModule)},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
