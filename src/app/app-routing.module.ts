import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { CartComponent } from './main/cart/cart.component';
import { AlljwelryComponent } from './main/alljwelry/alljwelry.component';
import { RingComponent } from './main/ring/ring.component';
import { EarringComponent } from './main/earring/earring.component';
import { NecklaceComponent } from './main/necklace/necklace.component';
import { AllcosmeticComponent } from './main/allcosmetic/allcosmetic.component';
import { MascaraComponent } from './main/mascara/mascara.component';
import { LipstickComponent } from './main/lipstick/lipstick.component';
import { CleanserComponent } from './main/cleanser/cleanser.component';
import { LoginComponent } from './main/login/login.component';
import { SignupComponent } from './main/signup/signup.component';
import { DetailComponent } from './main/detail/detail.component';
import { ProductmenuComponent } from './main/productmenu/productmenu.component';
import { Productmenu2Component } from './main/productmenu2/productmenu2.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "cart", component: CartComponent },
  { path: "alljwelry", component: AlljwelryComponent },
  { path: "alljwelry/ring", component: RingComponent },
  { path: "alljwelry/earring", component: EarringComponent },
  { path: "alljwelry/necklace", component: NecklaceComponent },
  { path: "allcosmetic/mascara", component: MascaraComponent },
  { path: "allcosmetic/lipstick", component: LipstickComponent },
  { path: "allcosmetic/cleanser", component: CleanserComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "allcosmetic", component: AllcosmeticComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "productmenu", component: ProductmenuComponent },
  { path: "productmenu2", component: Productmenu2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
