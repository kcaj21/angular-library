import { Component } from '@angular/core';
import { BookService } from '../booklist/book.service';
import { IBook } from '../booklist/book.model';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-addbookform',
  templateUrl: './addbookform.component.html',
  styleUrls: ['./addbookform.component.css']
})
export class AddbookformComponent {
  newBook!: IBook;

  constructor(private bookSvc: BookService) {}

  onSubmit(f: NgForm) {
    this.newBook = {
      title: f.value.title,
      author: f.value.author,
      genre: f.value.genre
    }
    this.bookSvc.addBook(this.newBook).subscribe({});
  }

}
