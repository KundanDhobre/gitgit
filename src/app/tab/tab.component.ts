import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  selectedTab = 1;

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

  

  

}



