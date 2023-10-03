import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  isPopupVisible: boolean;
 
  constructor() {
      this.isPopupVisible = true;
  }

  togglePopup(): void {
      this.isPopupVisible = !this.isPopupVisible;
  }


  @Input()sas:string='Kundan'
}
