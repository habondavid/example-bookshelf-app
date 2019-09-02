import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HeaderComponent, children: [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: '', loadChildren: 'src/app/pages/books/books.module#BooksModule' },
    { path: '', loadChildren: 'src/app/pages/book-details/book-details.module#BookDetailsModule' },
    { path: '', loadChildren: 'src/app/pages/books-to-read/books-to-read.module#BooksToReadModule' },
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
