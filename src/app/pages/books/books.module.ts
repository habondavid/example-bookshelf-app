import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './component/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatButtonModule,
    RouterModule
  ]
})
export class BooksModule { }
