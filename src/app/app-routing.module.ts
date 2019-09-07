import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainNavComponent, children: [
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
