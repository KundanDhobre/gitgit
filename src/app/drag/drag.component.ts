import { Component } from '@angular/core';
import { DragService, Employee } from '../drag.service';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent {
  dataSource: Employee[];

  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  customizeColumns(columns:any) {
    columns[0].width = 70;
  }

  get isCompactMode() {
    return this.displayMode === 'compact';
  }

  showDragIcons: boolean;


  constructor(service: DragService) {
    this.dataSource = service.generateData(100000);
  

    this.showDragIcons = true;

    this.onReorder = this.onReorder.bind(this);
  }
  onReorder(e:any) {
    const visibleRows = e.component.getVisibleRows();
    const toIndex = this.dataSource.findIndex((item) => item.id=== visibleRows[e.toIndex].data.id);
    const fromIndex = this.dataSource.findIndex((item) => item.id === e.itemData.id);

    this.dataSource.splice(fromIndex, 1);
    this.dataSource.splice(toIndex, 0, e.itemData);
  }
 
}
  

  



