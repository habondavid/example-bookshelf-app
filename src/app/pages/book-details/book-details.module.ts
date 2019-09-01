import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './component/book-details.component';
import { BookDetailsRoutingModule } from './book-details-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    CommonModule,
    BookDetailsRoutingModule,
    FormsModule
  ]
})
export class BookDetailsModule { }
