import { Component } from '@angular/core';

@Component({
  selector: 'app-devform',
  templateUrl: './devform.component.html',
  styleUrls: ['./devform.component.css']
})
export class DevformComponent {
  employee=[
    {Text: 'Date', dataType:'date'},
    {Text: "Partycode" , dataType:'selectbox'},
    {Text:"GST Transction", dataType:'String'},
    {Text: "ServiceTax", dataType:'selectbox1'},
    {Text: "shopping", dataType:'String'},
    {Text: "Branch", dataType:'selectbox3'},
    {Text: "party code", dataType:'selectbox'},
    {Text: "shopping", dataType:'String'},
    {Text: "credit", dataType:'String'},
    {Text: "VAT/cst transaction", dataType:'selectbox'},
    {Text: "Remarks", dataType:'String'},
    {Text: "Registration number", dataType:'Number'},
    {Text: "Party GST number", dataType:'Number'},
    {Text: "Price List", dataType:'selectbox'},
    
    
    ]

    partycode:string[]=['kunds','shubs','abhi','aju']
    branch:number[]=[1,2,3,4,5]
    ServiceTax:string[]=["jjkjkjk","dsgdfgs"]
}
