import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './store/cart/cart.component';
import { CatalogComponent } from './store/catalog/catalog.component';

const routes: Routes = [
  {path: '', component: CartComponent},
  {path: 'carrito', component: CartComponent},
  {path: 'catalogo', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
