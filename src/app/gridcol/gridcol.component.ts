import { Component } from '@angular/core';
import { Employee, GridcolService } from '../gridcol.service';

@Component({
  selector: 'app-gridcol',
  templateUrl: './gridcol.component.html',
  styleUrls: ['./gridcol.component.css']
})
export class GridcolComponent {
  priorities: string[];

  employees: Employee[];

  showHeaderFilter: boolean;

  editorOptions: any;

  searchExpr: any;

  constructor(service: GridcolService) {
    this.employees = service.getEmployees();
    this.showHeaderFilter = true;
    this.editorOptions = { placeholder: 'Search city or state' };
    this.searchExpr = ['City', 'State'];

    this.priorities = [
      'Registration Number',
      'Chassis Number',
      'Party Name',
      'Mobile Number',
      'Reference Number',
      'Pan Card Number',
    ];
    
    
  }
  

  
}



