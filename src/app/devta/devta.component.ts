import { Component } from '@angular/core';
import { AppService,  } from '../app.service'

@Component({
  selector: 'app-devta',
  templateUrl: './devta.component.html',
  styleUrls: ['./devta.component.css']
})
export class DevtaComponent {

  employeeData = {
    name: 'Kundan',
    position: 'CEO',
    hireDate: new Date(2012, 4, 13),
    officeNumber: 901,
    notes: 'John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.',
    roles: ['Chief Officer', 'Administrator', 'Manager']
}
labelTemplates = [
    {name: 'name', icon: 'dx-icon-info'},
    {name: 'position', icon: 'dx-icon-group'},
    {name: 'officeNumber', icon: 'dx-icon-info'}
]
columnsss=['id','name','username','email']

tabNames = [
  {tab:'emp'}
]



 
selectedTabIndex = 0;

onValueChanged(e:any){
    this.selectedTabIndex = this.tabNames.indexOf(e.value);
}


sas1:string=''

users:any;
sub:any;
constructor(private services: AppService) {}
ngOnInit(){
  this.services.getusers().subscribe((data: any, ) =>{
    this.users=data;
  }
  )}




}
