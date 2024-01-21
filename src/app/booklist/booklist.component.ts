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
  newBook!: IBook;

  constructor(private bookSvc: BookService) {

    // this.books = [
    //   {
    //     id: 0,
    //     title: 'Gary Potter',
    //     author: 'Jk Rowlin',
    //     genre: 'fantasy'
    //   },
    //   {
    //     id: 1,
    //     title: 'Gary Potter 2',
    //     author: 'Jk Rowlin',
    //     genre: 'fantasy'
    //   },
    //   {
    //     id: 2,
    //     title: 'Gary Potter 3',
    //     author: 'Jk Rowlin',
    //     genre: 'fantasy'
    //   },
    //   {
    //     id: 3,
    //     title: 'Gary Potter 3',
    //     author: 'Jk Rowlin',
    //     genre: 'fantasy'
    //   },
    //   {
    //     id: 4,
    //     title: 'Gary Potter 3',
    //     author: 'Jk Rowlin',
    //     genre: 'fantasy'
    //   }
    // ];
  }

  ngOnInit() {
    this.bookSvc.getBooks().subscribe(books => {
      this.books = books;
    })
  }

  getBookList() {
    return this.books;
  }

  deleteBook(id: number) {
    this.bookSvc.delete(id).subscribe(() => this.bookSvc.getBooks().subscribe(books => {
      this.books = books;
    }))
  }


}

