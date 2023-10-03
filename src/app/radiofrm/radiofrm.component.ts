import { Component } from '@angular/core';
import { Customer, RadiofrService } from '../radiofr.service';
import { DxRadioGroupModule } from "devextreme-angular";




@Component({
  selector: 'app-radiofrm',
  templateUrl: './radiofrm.component.html',
  styleUrls: ['./radiofrm.component.css']
})
export class RadiofrmComponent {
  
  dataSource = ["Low", "Normal", "Urgent", "High"]
  

  customers: Customer[];
  priorities: string[];

  constructor(service: RadiofrService) {
    this.customers = service.getCustomers();
    this.priorities = [
      'Registration Number',
      'Chassis Number',
      'Party Name',
      'Mobile Number',
      'Reference Number ',
      'Pan Card Number',
    ];
  }

  






}



