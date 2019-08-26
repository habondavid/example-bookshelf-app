import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './component/book-details.component';

const routes: Routes = [
  { path: 'book-details/:id', component: BookDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookDetailsRoutingModule { }
