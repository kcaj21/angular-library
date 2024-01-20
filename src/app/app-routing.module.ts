import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookformComponent } from './addbookform/addbookform.component';

const routes: Routes = [
  { path: 'booklist', component: BooklistComponent, title: "booklist"},
  { path: 'addbookform', component: AddbookformComponent, title: "addbookform"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
