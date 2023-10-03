import { Component } from '@angular/core';
import DataSource from "devextreme/data/data_source";
import { ShubsService, Product } from "../shubs.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  dataSource: DataSource;
  products: Product[];

  constructor(private service: ShubsService) {
      this.products = service.getProducts();
      this.dataSource = new DataSource({
          store: this.products,
          group: "Category"
      });
  }

}
