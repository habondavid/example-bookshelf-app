import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayBooksComponent } from './component/display-books.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DisplayBooksComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    DisplayBooksComponent
  ]
})
export class DisplayBooksModule { }
