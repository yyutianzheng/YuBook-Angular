import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Book } from './book';


@Injectable()
export class BookService{
  private booksUrl = 'http://localhost:3000/books.json';

  constructor(
    private http: Http
  ) {}

  getBooks(): Observable<Book[]> {
    return this.http.get(this.booksUrl)
                    .map((response: Response) => <Document[]>response.json())
  }

}
