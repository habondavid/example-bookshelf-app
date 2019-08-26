import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  BOOKS: Book[] = [];

  constructor() { }

  getBooks() {
    // Todo...
  }

  getBook(id: string) {
    // Todo...
  }

  addNewBook(book: Book) {
    // Todo...
  }

  deleteBook(id: string) {
    // Todo...
  }
}
