import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './component/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
