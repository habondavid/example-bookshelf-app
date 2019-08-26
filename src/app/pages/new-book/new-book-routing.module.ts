import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookComponent } from './component/new-book.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'new-book', component: NewBookComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NewBookRoutingModule { }
