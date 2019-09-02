import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './component/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DisplayBooksModule } from 'src/app/components/display-books/display-books.module';


@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    DisplayBooksModule
  ]
})
export class BooksModule { }
