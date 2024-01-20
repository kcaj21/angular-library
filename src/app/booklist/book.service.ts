import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from './book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]>  {
    return this.http.get<IBook[]>('api/book');
  }

  addBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>('api/book', book);
 }


}
