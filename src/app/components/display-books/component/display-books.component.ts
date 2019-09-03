import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  @Input() books: Book[] = [];

  constructor(private bookService: BookService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  addToReadList(book: Book) {
    book.favorite = true;
    this.bookService.saveBookToFavorites(book);
    this.openSnackBar('Mentve az elolvasandó könyvek közé.');
  }

  removeFromReadList(bookId: string) {
    this.bookService.deleteBookFromFavorites(bookId).then(data => console.log(data));
    this.openSnackBar('Eltávolítva az elolvasandó könyvek közül.');
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 3000,
    });
  }

}
