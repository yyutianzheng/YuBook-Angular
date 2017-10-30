import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ BookService ]
})
export class BooksComponent implements OnInit {
  pageTitle: string = "Book Dashboard";
  books: Book[];
  errorMessage: string;

  constructor(
    private bookService: BookService
    ){}

  ngOnInit() {
    let timer = Observable.timer(0,5000);
    timer.subscribe(() => this.getBooks());
  }

  getBooks() {
    this.bookService.getBooks()
        .subscribe(
         books => this.books = books,
         error => this.errorMessage = <any>error
        );
  }
}
