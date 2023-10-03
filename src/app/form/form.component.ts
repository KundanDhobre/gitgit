import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  employee = {
    name: 'John Heart',
    position: 'CEO',
    Date: new Date(),
    officeNumber: 901,
    phone: '+1(213) 555-9392',
    skype: 'jheart_DX_skype',
    email: 'jheart@dx-email.com',
}

}
