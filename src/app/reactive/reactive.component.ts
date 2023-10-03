import { Component ,enableProdMode, ViewChild,} from '@angular/core';
import { FormBuilder, FormGroup, Validators 
  } from '@angular/forms';
import { ReactiveService } from '../reactive.service';
import notify from 'devextreme/ui/notify';
import { DxValidatorComponent } from 'devextreme-angular';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

  @ViewChild('targetValidator', { static: false })
  validator!: DxValidatorComponent;

  password = '';

  confirmPassword = '';

  passwordMode = 'password';

  confirmPasswordMode = 'password';

  maxDate: Date = new Date();

  cityPattern = '^[^0-9]+$';

  namePattern: any = /^[^0-9]+$/;

  phonePattern: any = /^[02-9]\d{9}$/;

  countries: string[];

  phoneRules: any = {
    X: /[02-9]/,
  };

  passwordButton: any = {
    icon: 'images/icons/eye.png',
    type: 'default',
    onClick: () => {
      this.passwordMode = this.passwordMode === 'text' ? 'password' : 'text';
    },
  };

  confirmPasswordButton: any = {
    icon: 'images/icons/eye.png',
    type: 'default',
    onClick: () => {
      this.confirmPasswordMode = this.confirmPasswordMode === 'text' ? 'password' : 'text';
    },
  };

  constructor(service: ReactiveService) {
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
    this.countries = service.getCountries();
  }

  passwordComparison = () => this.password;

  checkComparison() {
    return true;
  }

  asyncValidation(params:any) {
    return sendRequest(params.value);
  }

  onPasswordChanged() {
    if (this.confirmPassword) {
      this.validator.instance.validate();
    }
  }

  onFormSubmit = function (e:any) {
    notify({
      message: 'You have submitted the form',
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);

    e.preventDefault();
  };
}

 



function sendRequest(value: any) {
  throw new Error('Function not implemented.');
}

