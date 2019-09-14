import { Injectable } from '@angular/core';
import { Book } from '../../models/book.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  lastSearch: string;

  constructor(private http: HttpClient, private auth: AuthService, private db: AngularFireDatabase) {}

  getBooks(search?: string): Observable<any> {
    return this.http.get(environment.bookSearchURL + search);
  }

  getBook(id: string): Observable<any> {
    return this.http.get(environment.bookDetailsURL + id);
  }

  getFavoriteBooks(): Observable<any> {
    return this.db.list(`${environment.bookshelfURL}/${this.auth.authState.uid}`).valueChanges();
  }

  saveBookToFavorites(book: Book) {
    book.favorite = true;
    return this.db.list(`${environment.bookshelfURL}/${this.auth.authState.uid}`).set(book.id, book);
  }

  deleteBookFromFavorites(bookId: string) {
    return this.db.list(`${environment.bookshelfURL}/${this.auth.authState.uid}/${bookId}`).remove();
  }

  getConvertedGoogleBook(googleBook): Book {
    const volumeInfo = googleBook.volumeInfo;
    const book = new Book();
    book.id = googleBook.id;
    book.title = volumeInfo.title;
    book.subtitle = volumeInfo.subtitle ? volumeInfo.subtitle : '';
    book.authors = volumeInfo.authors ? volumeInfo.authors : '';
    book.publisher = volumeInfo.publisher ? volumeInfo.publisher : '';
    book.publicationDate = volumeInfo.publishedDate ? volumeInfo.publishedDate : '';
    book.language = volumeInfo.language ? volumeInfo.language : '';
    book.numberOfPages = volumeInfo.pageCount ? volumeInfo.pageCount : '';
    book.categories = volumeInfo.categories ? volumeInfo.categories : '';
    book.description = volumeInfo.description ? volumeInfo.description : '';
    this.setBookIsFavoriteProperty(book);
    this.setBookImageUrl(book, volumeInfo.imageLinks);
    return book;
  }

  setBookIsFavoriteProperty(book: Book): void {
    this.db.list(`${environment.bookshelfURL}/${this.auth.authState.uid}`).valueChanges().subscribe(bookList => {
      const index = bookList.findIndex((element: any) => element.id === book.id);
      book.favorite = (index > -1);
    });
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
