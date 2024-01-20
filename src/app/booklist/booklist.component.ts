import { Component } from '@angular/core';
import { IBook } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  books: any;

  constructor(private bookSvc: BookService) {}

  ngOnInit() {
    this.bookSvc.getBooks().subscribe(books => {
      this.books = books;
    })
  }

  getBookList() {
    return this.books;
  }
}

