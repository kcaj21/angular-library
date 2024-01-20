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

  getBook(id: number): Observable<IBook> {
    return this.http.get<IBook>(`api/book/${id}`);
 }

  addBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>('api/book', book);
 }

 updateBook(book: IBook) {
  return this.http.put('api/book', book);
 }

 delete(id: number): Observable<any> {
  return this.http.delete<IBook>(`api/book?id=${id}`);
}


}
