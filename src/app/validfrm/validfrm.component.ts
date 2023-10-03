import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validfrm',
  templateUrl: './validfrm.component.html',
  styleUrls: ['./validfrm.component.css']
})
export class ValidfrmComponent  implements OnInit {
  userForm:any= FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  onSubmit() {
    if (this.userForm.valid) {
      // Handle form submission here
      console.log('Form submitted with valid data:', this.userForm.value);
    }
  }


}


