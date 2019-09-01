import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(search?: string): Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=' + search);
  }

  getBook(id: string): Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes/' + id);
  }

  getConvertedGoogleBook(googleBook): Book {
    const volumeInfo = googleBook.volumeInfo;
    const book = new Book();
    book.id = googleBook.id;
    book.title = volumeInfo.title;
    book.subtitle = volumeInfo.subtitle;
    book.authors = volumeInfo.authors;
    book.publisher = volumeInfo.publisher;
    book.publicationDate = volumeInfo.publishedDate;
    book.language = volumeInfo.language;
    book.numberOfPages = volumeInfo.pageCount;
    book.categories = volumeInfo.categories;
    book.description = volumeInfo.description;
    this.setBookImageUrl(book, volumeInfo.imageLinks);
    return book;
  }

  setBookImageUrl(book: Book, imageLinks) {
    if (imageLinks) {
      if (imageLinks.medium) {
        book.imgUrl = imageLinks.medium;
      } else if (imageLinks.thumbnail) {
        book.imgUrl = imageLinks.thumbnail;
      } else if (imageLinks.smallThumbnail) {
        book.imgUrl = imageLinks.smallThumbnail;
      }
    }
  }
}
