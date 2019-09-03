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
    this.bookService.saveBookToFavorites(book).then(data => {
      if (data) {
        this.openSnackBar('Mentve az elolvasom listára');
      }
    });
  }

  removeFromReadList(bookId: string) {
    this.bookService.deleteBookFromFavorites(bookId);
    this.openSnackBar('Eltávolítva az elolvasom listáról');
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 3000,
    });
  }

}
