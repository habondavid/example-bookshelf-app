import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookComponent } from './component/new-book.component';
import { NewBookRoutingModule } from './new-book-routing.module';



@NgModule({
  declarations: [NewBookComponent],
  imports: [
    CommonModule,
    NewBookRoutingModule
  ]
})
export class NewBookModule { }
