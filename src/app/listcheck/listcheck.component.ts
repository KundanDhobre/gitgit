import { Component } from '@angular/core';
import {  AjayService } from '../ajay.service';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';


@Component({
  selector: 'app-listcheck',
  templateUrl: './listcheck.component.html',
  styleUrls: ['./listcheck.component.css']
})
export class ListcheckComponent {

  tasks: DataSource;

  selectAllModeValue = 'page';

  selectionModeValue = 'all';

  selectByClick = false;

  constructor(service: AjayService) {
    this.tasks = new DataSource({
      store: new ArrayStore({
        key: 'text',
        data: service.getTasks(),
      }),
    });
  }
}



