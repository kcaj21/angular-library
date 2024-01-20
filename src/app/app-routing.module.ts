import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { AddbookformComponent } from './addbookform/addbookform.component';
import { UpdatebookformComponent } from './updatebookform/updatebookform.component';

const routes: Routes = [
  { path: 'booklist', component: BooklistComponent, title: "booklist"},
  { path: 'addbookform', component: AddbookformComponent, title: "addbookform"},
  { path: 'update/:id', component: UpdatebookformComponent, title: "updatebook" },
  { path: '', redirectTo: '/booklist', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
