import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optio',
  templateUrl: './optio.component.html',
  styleUrls: ['./optio.component.css']
})
export class OptioComponent implements OnInit{
  ngOnInit(): void {
    this.serviceData()
  }


  tabColumnData:any[]=[
    {id:1, tabName: 'Tab1', singleRow: true, subData:[
      {columnName: "Date", caption: "Date",  dataType: "date"},
      {columnName: "Branch", caption: "Branch", dataType: "MasterId"},
      {columnName: "remark", caption: "Remark", dataType: "string"},
      ],
    },
    {id:2, tabName: 'Tab2', singleRow: false, subData:[
      {columnName: "Date", caption: "Date", dataType: "date"},
      {columnName: "Branch", caption: "Branch", dataType: "MasterId"},
      {columnName: "remark", caption: "Remark", dataType: "string"},
      ]
    },
    {id:3, tabName: 'Tab3', singleRow: false, subData:[
      {columnName: "Date", caption: "Date", dataType: "date"},
      {columnName: "Branch", caption: "Branch", dataType: "MasterId"},
      {columnName: "Branch", caption: "Branch", dataType: "MasterId"},
      {columnName: "remark", caption: "Remark", dataType: "string"},
      ]
    },
    {id:4, tabName: 'Tab4', singleRow: false, subData:[
      {columnName: "Date", caption: "Date", dataType: "date"},
      {columnName: "Branch", caption: "Branch", dataType: "MasterId"},
      {columnName: "Branch", caption: "Branch", dataType: "MasterId"},
      {columnName: "remark", caption: "Remark", dataType: "string"},
      ]
    },
    {id:5, tabName: 'Tab5', singleRow: true, subData:[
      {columnName: "Date", caption: "Date", dataType: "date"},
      {columnName: "Branch", caption: "Branch", dataType: "MasterId"},
      {columnName: "Branch", caption: "Branch", dataType: "MasterId"},
      {columnName: "remark", caption: "Remark", dataType: "string"},
      ]
    },
    {id:6, tabName: 'Tab6', singleRow: false, subData:[
      {columnName: "Date", caption: "Date", dataType: "date"},
      {columnName: "Branch", caption: "Branch", dataType: "MasterId"},
      {columnName: "Branch", caption: "Branch", dataType: "MasterId"},
      {columnName: "remark", caption: "Remark", dataType: "string"},
      ]
    },

  ];
  tabDataSource: any[]=[];

  serviceData(){
    this.tabDataSource =[
        {Date: "as",Branch: "SBI",remark: "s1"},
        {Date: "a1",Branch: "HDFC",remark: "s2"},
        {Date: "a2",Branch: "AXIS",remark: "s3"},
        {Date: "a3",Branch: "BOI",remark: "s4"},
        {Date: "a4",Branch: "r",remark: "s5"},
        {Date: "as",Branch: "s",remark: "s1"},
        {Date: "a1",Branch: "v",remark: "s2"},
        {Date: "a2",Branch: "A",remark: "s3"},
        {Date: "a3",Branch: "c",remark: "s4"},
        {Date: "a4",Branch: "r",remark: "s5"},
  
      ]
    }
     
  
}
