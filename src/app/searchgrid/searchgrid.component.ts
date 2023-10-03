import { Component } from '@angular/core';

import { SearchgridService } from '../searchgrid.service';

@Component({
  selector: 'app-searchgrid',
  templateUrl: './searchgrid.component.html',
  styleUrls: ['./searchgrid.component.css']
})
export class SearchgridComponent {


  users:any;
  sub:any;
  constructor(private dataService: SearchgridService) { }

  ngOnInit(){
   
    this.dataService.getusers().subscribe((data:any)=>{
      this.users=data;
      
    
    })

  }



}


