import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageComponent} from "./components/product-page/product-page.component";

const routes: Routes = [
  {path: '', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
