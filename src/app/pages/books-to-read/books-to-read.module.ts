import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksToReadComponent } from './component/books-to-read.component';
import { BooksToReadRoutingModule } from './books-to-read-routing.module';
import { DisplayBooksModule } from 'src/app/components/display-books/display-books.module';



@NgModule({
  declarations: [BooksToReadComponent],
  imports: [
    CommonModule,
    BooksToReadRoutingModule,
    DisplayBooksModule
  ]
})
export class BooksToReadModule { }
