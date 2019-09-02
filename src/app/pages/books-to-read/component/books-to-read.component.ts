import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-books-to-read',
  templateUrl: './books-to-read.component.html',
  styleUrls: ['./books-to-read.component.scss']
})
export class BooksToReadComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getFavoriteBooks().subscribe(books => this.books = books);
  }

}
