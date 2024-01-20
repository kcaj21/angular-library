import { Component, Input } from '@angular/core';
import { IBook } from '../booklist/book.model';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent {
@Input() book!: IBook;

}
