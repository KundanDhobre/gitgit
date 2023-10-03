import { Component } from '@angular/core';
import { Employee, KundsService } from '../kunds.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent {

  employees: Employee[];
  constructor(private service: KundsService) {
    this.employees = service.getEmployees();
  }

}
