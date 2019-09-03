import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayBooksComponent } from './component/display-books.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [DisplayBooksComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatSnackBarModule
  ],
  exports: [
    DisplayBooksComponent
  ]
})
export class DisplayBooksModule { }
