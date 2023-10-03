import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Company, } from '../app.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-ABCbutton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ABCButtonComponent {

  showMessage = () => {
    notify("The button was clicked");
}

users:any;
sub:any;
constructor(private services: Company) {}
 

// employees: AppService[];
// constructor(private service: AppService) {
//     this.employees = service['getEmployees']();
// }

}
