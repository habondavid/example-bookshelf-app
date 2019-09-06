import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

const LOADING_MESSAGE = 'Felhasználói adatok betöltése...';
const MUST_LOGIN_MESSAGE = 'Be kell jelentkezned!';
const GREETINGS_MESSAGE = 'Üdvözlünk ';
const LOGOUT_MESSAGE = 'Kijelentkezés...';
const MESSAGE_WAITING_TIME = 800;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pageIsLoading = true;
  loadingStatusMessage = LOADING_MESSAGE;

  constructor(public auth: AuthService, private router: Router) {
    this.auth.user$.subscribe(user => this.handleUserInfoChange(user));
  }

  ngOnInit() { }

  handleUserInfoChange(user) {
    if (user) {
      this.welcomeTheUser(user);
    } else if (!user && this.auth.loggingOut) {
      this.showLogoutMessage();
    } else {
      this.askUserToLogin();
    }
  }

  welcomeTheUser(user) {
    this.pageIsLoading = true;
    this.loadingStatusMessage = GREETINGS_MESSAGE + user.displayName + '!';
    setTimeout(() => this.router.navigate(['books']), MESSAGE_WAITING_TIME);
  }

  askUserToLogin() {
    this.pageIsLoading = true;
    this.loadingStatusMessage = MUST_LOGIN_MESSAGE;
    setTimeout(() => this.pageIsLoading = false, MESSAGE_WAITING_TIME);
  }

  showLogoutMessage() {
    this.pageIsLoading = true;
    this.loadingStatusMessage = LOGOUT_MESSAGE;
    setTimeout(() => this.pageIsLoading = false, MESSAGE_WAITING_TIME);
  }

  login() {
    this.auth.googleSignin();
  }
}
