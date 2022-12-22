import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  articulos: any;

  constructor(){
    this. articulos = localStorage.getItem("articulos");
    this.articulos = JSON.parse(this.articulos);

  }

  hayRegistros() {
    return this.articulos.length > 0;
  }
  
}
