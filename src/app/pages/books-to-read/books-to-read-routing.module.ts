import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BooksToReadComponent } from './component/books-to-read.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: 'books-to-read', component: BooksToReadComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BooksToReadRoutingModule { }
