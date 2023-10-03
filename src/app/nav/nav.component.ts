import { Component } from '@angular/core';
import { AppService,  } from '../app.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

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

