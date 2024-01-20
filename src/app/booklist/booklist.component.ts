import { Component } from '@angular/core';
import { IBook } from './book.model';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  books: any;

  constructor() {
    this.books = [
      {
        "id": 1,
        "title": "MacBeth",
        "author": "William Shakespeare",
        "genre": "Tragedy"
      },
      {
        "id": 2,
        "title": "The Inebriate",
        "author": "Walt Whitman",
        "genre": "Temperance"
      }
    ];
  }

  getBooks() {
    return this.books;
  }
}

