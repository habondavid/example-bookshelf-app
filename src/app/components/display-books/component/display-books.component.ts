import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  @Input() books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  addToReadList(book: Book) {
    this.bookService.saveBookToFavorites(book);
  }

}
