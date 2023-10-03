import { Component } from '@angular/core';

@Component({
  selector: 'app-usepassword',
  templateUrl: './usepassword.component.html',
  styleUrls: ['./usepassword.component.css']
})
export class UsepasswordComponent {
  password: string = '';
  confirmPassword: string = '';
  isButtonDisabled: boolean = true;

  checkPasswordMatch() {
    this.isButtonDisabled = this.password !== this.confirmPassword;
  }

}
