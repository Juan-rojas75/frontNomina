import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from "./home/home.module";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
