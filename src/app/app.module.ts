import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    AngularFireModule.initializeApp(
      {
        apiKey: 'AIzaSyCqUos_d1rRFGk0wD5wtHxalmZXqcCPNZc',
        authDomain: 'example-bookshelf-app.firebaseapp.com',
        databaseURL: 'https://example-bookshelf-app.firebaseio.com',
        projectId: 'example-bookshelf-app',
        storageBucket: '',
        messagingSenderId: '6641015644',
        appId: '1:6641015644:web:be18576ec192201b'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
