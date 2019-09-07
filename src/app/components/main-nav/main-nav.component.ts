import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  @ViewChild('sidenav', {static: false}) sidenav;

  navList = [
    {
      link: '/books',
      icon: 'search',
      text: 'Böngésző'
    },
    {
      link: '/books-to-read',
      icon: 'favorite',
      text: 'Könyvespolcom'
    }
  ];

  user: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService) {
    authService.user$.subscribe(user => this.user = user);
  }

  onSidenavClick(): void {
    this.sidenav.toggle();
  }

}
