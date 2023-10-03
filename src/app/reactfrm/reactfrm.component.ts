import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactfrm',
  templateUrl: './reactfrm.component.html',
  styleUrls: ['./reactfrm.component.css']
})
export class ReactfrmComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({});
  passwordMismatch = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const { username, password, confirmPassword } = this.registrationForm.value;

      if (password !== confirmPassword) {
        this.passwordMismatch = true;
        return;
      }

      // Save data to local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // Clear form and error message
      this.registrationForm.reset();
      this.passwordMismatch = false;
    }
  }


}
