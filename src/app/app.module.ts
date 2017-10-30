import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookService } from './books/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
