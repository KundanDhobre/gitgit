import { Component } from '@angular/core';
import { ColumService, Customer } from '../colum.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-colum',
  templateUrl: './colum.component.html',
  styleUrls: ['./colum.component.css']
})
export class ColumComponent {
  customers: Customer[];

  constructor(service: ColumService) {
    this.customers = service.getCustomers();
  }
  dataSource = ["ID"]
  dataItems = [
    { text: "ID", color: "grey" }];
    
}



