import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartComponent } from './store/cart/cart.component';
import { CatalogComponent } from './store/catalog/catalog.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
