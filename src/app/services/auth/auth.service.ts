import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;
  authState = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.afAuth.authState;
    this.user$.subscribe(userAuth => {console.log(userAuth); this.authState = userAuth; });
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this. afAuth.auth.signInWithPopup(provider);
    return credential.user;
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/login']);
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

}
