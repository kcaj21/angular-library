import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { HttpClientModule } from '@angular/common/http';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { AddbookformComponent } from './addbookform/addbookform.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdatebookformComponent } from './updatebookform/updatebookform.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookdetailsComponent,
    AddbookformComponent,
    NavbarComponent,
    UpdatebookformComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
