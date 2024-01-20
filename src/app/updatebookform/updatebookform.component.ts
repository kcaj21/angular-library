import { Component } from '@angular/core';
import { BookService } from '../booklist/book.service';
import { IBook } from '../booklist/book.model';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatebookform',
  templateUrl: './updatebookform.component.html',
  styleUrls: ['./updatebookform.component.css']
})
export class UpdatebookformComponent {
  book!: IBook;

  constructor(
    private bookSvc: BookService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

    ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.bookSvc.getBook(id).subscribe(book => this.book = book);
   }

   onSubmit() {
    this.bookSvc.updateBook(this.book).subscribe(() => this.router.navigate(['/booklist']));
   }

}
