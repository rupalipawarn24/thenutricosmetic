import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';



@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,    
    BrowserModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule  

           
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
