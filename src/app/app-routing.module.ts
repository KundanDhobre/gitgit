import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  DxButtonModule } from 'devextreme-angular';
import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';
import { AboutComponent } from './about/about.component';
import { DevformComponent } from './devform/devform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DevtaComponent } from './devta/devta.component';
import { OptioComponent } from './optio/optio.component';
import { BoxComponent } from './box/box.component';
import { AccordianComponent } from './accordian/accordian.component';
import { ListComponent } from './list/list.component';
import { ListcheckComponent } from './listcheck/listcheck.component';
import { DragComponent } from './drag/drag.component';

const routes: Routes = [
  {path:'' ,redirectTo:"home", pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path:'devform', component:DevformComponent},
  {path:'devta', component:DevtaComponent},
  {path:'optio', component:OptioComponent},
  {path:'box', component:BoxComponent},
  {path:'drag', component:DragComponent},
  {path:'listcheck', component:ListcheckComponent},
  {path:'Accordian', component:AccordianComponent},
  

 {path:'**',component:PagenotfoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
