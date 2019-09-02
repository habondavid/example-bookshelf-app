import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared-components/header/header.component';


const routes: Routes = [
  { path: '', component: HeaderComponent, children: [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: '', loadChildren: 'src/app/pages/books/books.module#BooksModule' },
    { path: '', loadChildren: 'src/app/pages/book-details/book-details.module#BookDetailsModule' },
    {
      path: '**',
      redirectTo: '/books'
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
