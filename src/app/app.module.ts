import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { CartComponent } from './main/cart/cart.component';
import { SignupComponent } from './main/signup/signup.component';
import { LoginComponent } from './main/login/login.component';
import { AlljwelryComponent } from './main/alljwelry/alljwelry.component';
import { AllcosmeticComponent } from './main/allcosmetic/allcosmetic.component';
import { AboutComponent } from './main/about/about.component';
import { NecklaceComponent } from './main/necklace/necklace.component';
import { RingComponent } from './main/ring/ring.component';
import { EarringComponent } from './main/earring/earring.component';
import { CleanserComponent } from './main/cleanser/cleanser.component';
import { LipstickComponent } from './main/lipstick/lipstick.component';
import { MascaraComponent } from './main/mascara/mascara.component';
import { DetailComponent } from './main/detail/detail.component';
import { ProductmenuComponent } from './main/productmenu/productmenu.component';
import { Productmenu2Component } from './main/productmenu2/productmenu2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    SignupComponent,
    LoginComponent,
    AlljwelryComponent,
    AllcosmeticComponent,
    AboutComponent,
    NecklaceComponent,
    RingComponent,
    EarringComponent,
    CleanserComponent,
    LipstickComponent,
    MascaraComponent,
    DetailComponent,
    ProductmenuComponent,
    Productmenu2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
export class SomeModule { }

