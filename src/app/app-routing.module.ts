import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop/:id',component:ShopComponent},
  {path:'shop/:year',component:ShopComponent},
  {path:'shop',component:ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
