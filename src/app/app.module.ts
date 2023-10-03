import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { DxButtonModule, DxDataGridModule, DxDateBoxModule, DxTextBoxModule, DxValidationGroupComponent, DxValidationSummaryModule, DxValidatorComponent, DxValidatorModule } from 'devextreme-angular';
import { DxFormModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DevformComponent } from './devform/devform.component';
import { PopupComponent } from './popup/popup.component';
import { DxPopupModule } from 'devextreme-angular';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { FormsModule, Validators } from '@angular/forms';

import { DxCalendarModule } from 'devextreme-angular';


import {HttpClientModule} from '@angular/common/http';
import { TabComponent } from './tab/tab.component';
import { TabpComponent } from './tabp/tabp.component';


import {  Component, enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
​
import { DxTabsModule } from 'devextreme-angular';

import { DxTabPanelModule, DxCheckBoxModule, DxTemplateModule, DxAccordionModule ,DxTextAreaModule,DxRadioGroupModule, DxTreeListModule} from 'devextreme-angular';
import { DevAccoundianComponent } from './dev-accoundian/dev-accoundian.component';
import { DevtaComponent } from './devta/devta.component';
import { AppService } from './app.service';
import { OptioComponent } from './optio/optio.component';
import { DxoGridModule } from 'devextreme-angular/ui/nested';
import { BoxComponent } from './box/box.component';
import { AccordianComponent } from './accordian/accordian.component';

import { ListComponent } from './list/list.component';
import dxList from 'devextreme/ui/list';
import { DxListModule } from "devextreme-angular";

import dxTreeList from 'devextreme/ui/tree_list';
import { ValidfrmComponent } from './validfrm/validfrm.component';
import { ListcheckComponent } from './listcheck/listcheck.component';
import { DragComponent } from './drag/drag.component';
import { UsepasswordComponent } from './usepassword/usepassword.component';
import { ReactfrmComponent } from './reactfrm/reactfrm.component';
import dxSelectBox from 'devextreme/ui/select_box';
import dxValidationGroup from 'devextreme/ui/validation_group';
import { ReactiveComponent } from './reactive/reactive.component';
import { RadiofrmComponent } from './radiofrm/radiofrm.component';


import {
   DxDropDownBoxModule, DxTagBoxModule,
} from 'devextreme-angular';
import { DxLoadPanelModule } from 'devextreme-angular';
import { SearchgridComponent } from './searchgrid/searchgrid.component';
import { GridcolComponent } from './gridcol/gridcol.component';
import { SearchgridService } from './searchgrid.service';
import { TaskgridComponent } from './taskgrid/taskgrid.component';
import { TaskservicesService } from './taskservices.service';
import { ColumComponent } from './colum/colum.component';







 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    DevformComponent,
    PopupComponent,
    NavComponent,
    AboutComponent,
    PagenotfoundComponent,
    IfdemoComponent,
    TabComponent,
    TabpComponent,
    DevAccoundianComponent,
    DevtaComponent,
    OptioComponent,
    BoxComponent,
    AccordianComponent,

    ListComponent,
    
    ValidfrmComponent,
         ListcheckComponent,
         DragComponent,
         UsepasswordComponent,
         ReactfrmComponent,
         ReactiveComponent,
         RadiofrmComponent,
         SearchgridComponent,
         GridcolComponent,
         TaskgridComponent,
         ColumComponent,
    
         
         
         
         
         
    
    
    

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxFormModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxPopupModule,
    DxButtonModule,
    FormsModule,
    DxCalendarModule,
    DxAccordionModule,
    HttpClientModule,
    DxTabsModule,
    DxSelectBoxModule,
    DxTabPanelModule,
    DxCheckBoxModule,
    DxTemplateModule,
    DxButtonModule,
    DxTabPanelModule,
    DxTextAreaModule,
    DxRadioGroupModule,
    DxDataGridModule,
    DxListModule,FormsModule,
    DxValidatorModule,DxValidationSummaryModule,
    DxTagBoxModule,DxDropDownBoxModule,DxLoadPanelModule
    
    
    
    
    
    


  
    
  
    
       

    
    
    
    ],
  providers: [AppService,SearchgridService,TaskservicesService ],
  
  
  
  bootstrap: [AppComponent]
})
export class AppModule {

  

  
 }
//  platformBrowserDynamic().bootstrapModule(AppModule);


// import { NgModule, Component, enableProdMode } from '@angular/core';
// import { BrowserModule} from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { DxTabPanelModule, DxCheckBoxModule, DxTemplateModule } from 'devextreme-angular';

// import { Company, Service } from './app.service';

// if (!/localhost/.test(document.location.host)) {
//   enableProdMode();
// }

// @Component({
//   selector: 'demo-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [Service],
//   preserveWhitespaces: true,
// })
// export class AppComponent {
//   companies: Company[];

//   itemCount: number;

//   constructor(service: Service) {
//     this.companies = service.getCompanies();
//     this.itemCount = this.companies.length;
//   }
// }

// @NgModule({
//   imports: [
//     BrowserModule,
    
//     DxTabPanelModule,
//     DxCheckBoxModule,
//     DxTemplateModule,
//   ],
//   declarations: [AppComponent],
//   bootstrap: [AppComponent],
// })
// export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
