import { Component } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent {

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  collection=["Kundan", "Shubs", "Ajay", "Abhi"];

  status: string = 'active'; 

}
