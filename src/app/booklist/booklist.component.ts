import { Component } from '@angular/core';
import { IBook } from './book.model';
import { BookService } from './book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  books: any;
  // booksSubscription!: Subscription;

  constructor(private bookSvc: BookService) {

  }

  ngOnInit() {
    this.bookSvc.getBooks().subscribe(books => {
      this.books = books;
    })
  }

  // ngOnInit() {
  //   this.booksSubscription = this.bookSvc.getBooks().subscribe(books => {
  //     this.books = books;
  //   })
  // }

  getBookList() {
    return this.books;
  }

  deleteBook(id: number) {
    this.bookSvc.delete(id).subscribe(books => {
      this.books = books;
    })
  }

  // ngOnDestroy() {
  //   this.booksSubscription.unsubscribe()
  // }


}

