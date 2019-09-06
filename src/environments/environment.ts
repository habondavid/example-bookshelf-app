// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  bookSearchURL: 'https://www.googleapis.com/books/v1/volumes?q=',
  bookDetailsURL: 'https://www.googleapis.com/books/v1/volumes/',
  firebase: {
    apiKey: 'AIzaSyCqUos_d1rRFGk0wD5wtHxalmZXqcCPNZc',
    authDomain: 'example-bookshelf-app.firebaseapp.com',
    databaseURL: 'https://example-bookshelf-app.firebaseio.com',
    projectId: 'example-bookshelf-app',
    storageBucket: '',
    messagingSenderId: '6641015644',
    appId: '1:6641015644:web:be18576ec192201b'
  },
  booksToReadURL: '/booksToRead'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
