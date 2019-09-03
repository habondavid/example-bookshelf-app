import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/models/book.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  searchForm: FormGroup;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.initSearchForm();
    if (this.bookService.lastSearch) {
      this.searchForm.controls.searchInput.setValue(this.bookService.lastSearch);
      this.search();
    }
  }

  initSearchForm() {
    this.searchForm = new FormGroup({ searchInput: new FormControl('') });
  }

  search() {
    const searchText = this.searchForm.controls.searchInput.value;
    if (searchText) {
      this.bookService.lastSearch = searchText;
      this.bookService.getBooks(searchText).subscribe(response => this.bindBookInfoFromResponse(response));
    }
  }

  bindBookInfoFromResponse(response): void {
    this.books = [];
    response.items.forEach(element => this.books.push(this.bookService.getConvertedGoogleBook(element)));
  }
}
