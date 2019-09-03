import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksToReadComponent } from './component/books-to-read.component';
import { BooksToReadRoutingModule } from './books-to-read-routing.module';
import { DisplayBooksModule } from 'src/app/components/display-books/display-books.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BooksToReadComponent],
  imports: [
    CommonModule,
    BooksToReadRoutingModule,
    DisplayBooksModule,
    MatProgressSpinnerModule,
    RouterModule
  ]
})
export class BooksToReadModule { }
