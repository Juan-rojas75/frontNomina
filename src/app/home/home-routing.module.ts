import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';


const routes: Routes = [
  { path: "", component: HomeComponentComponent },
  { path: "contactus", component: ContactComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
