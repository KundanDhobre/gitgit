import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  employee = {
    name: 'Kundan Dhobre',
    position: 'CEO',
    hireDate: new Date(2023, 4, 13),
    officeNumber: 901,
    phone: '+1(213) 555-9392',
    skype: 'kundan_DX_skype',
    email: 'kundan@gmail.com',
    notes: 'John has been in the Audio/Video industry since 1990.'
}

isFormReadOnly:boolean=false;

submitButtonOptions = {
    text: "Submit the Form",
    useSubmitBehavior: true
}

handleSubmit = function(e:any) {
    setTimeout(() => { 
        alert("Submitted");          
    }, 1000);
    
    e.preventDefault();
}
}


