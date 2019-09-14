import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const SUCCESSFUL_SAVE_MESSAGE = 'Mentve a könyvespolcodra!';
const SUCCESFUL_DELETE_MESSAGE = 'Eltávolítva a könyvespolcodról!';
const UNSUCCESSFUL_OPERATION_MESSAGE = 'Sikertelen művelet!';

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

  addToBookshelf(book: Book) {
    this.bookService.saveBookToFavorites(book)
      .then(() => this.openSnackBarWith(SUCCESSFUL_SAVE_MESSAGE))
      .catch(() => this.openSnackBarWith(UNSUCCESSFUL_OPERATION_MESSAGE));
  }

  removeFromBookshelf(bookId: string) {
    this.bookService.deleteBookFromFavorites(bookId)
      .then(() => this.openSnackBarWith(SUCCESFUL_DELETE_MESSAGE))
      .catch(() => this.openSnackBarWith(UNSUCCESSFUL_OPERATION_MESSAGE));
  }

  openSnackBarWith(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 3000,
    });
  }

}
