import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  BOOKS: Book[] = [
    {
      id: '1',
      title: 'A Suttogó',
      author: 'Alex North',
      publisher: 'Gabo könyvkiadó és keresk.kft.',
      language: 'magyar',
      publicationDate: new Date('2019'),
      numberOfPages: 416,
      format: 'Füles, kartonált',
      description: 'A felesége halálától összeroppant Tom Kennedy egy új élet reményében költözik át az álmos Featherbanks városkába a kisfiával, Jake-kel. Ám Featherbanksnek sötét múltja van. Tizenöt éve egy szociopata bűnöző elrabolt és meggyilkolt öt kisfiút. Amíg el nem fogták, a tettest mindenki csak úgy emlegette: a Suttogó. Természetesen egy régi bűntől Tom és Jake még nyugodtan berendezkedhetnének új házukban. Ám ekkor eltűnik egy újabb kisfiú, és Jake is valahogy különösen kezd viselkedni...',
      url: undefined,
    },
    {
      id: '2',
      title: 'Ed Sheeran',
      author: 'Sean Smith',
      publisher: '21. Század Kiadó',
      language: 'magyar',
      publicationDate: new Date('2019'),
      numberOfPages: 351,
      format: 'Flexi',
      description: 'Egyetlen dal volt, amely mindent megváltoztatott - és amelyben Taylor Swift keze is benne volt egy kicsit. Tizenhárom éves korában egy iskolai rockbandában gitározott, aztán eldöntötte, hogy énekes és dalszerző lesz, bár akkor még szinte nem is tudott tisztán énekelni és még életében nem írt saját dalt. Egy éven belül a szobájában felvett egy teljes albumot. Nehezen tudta kezelni, hogy az egész világ a lába előtt hever, de aztán megismerkedett egy lánnyal a szülővárosából és ketten megtalálták a boldogságot. Ed bámulatos utat járt be, melynek során a szégyenlős, dadogó kisfiúból, aki kerüli a felvágós showmankedést, globális jelenség lett. Ed Sheeran jelenleg a világ legsikeresebb szólóművésze: nincs még egy olyan sztár a világon, mint ő: Ed maga az inspiráció. Megindító, felemelő dalai több millió embert kötnek össze egymással, a világon mindenütt. A szerzőről: Sean Smith profi életrajzíró, aki rengeteg háttérinformációt gyűjtött be és interjúk sorát folytatta le, hogy elmesélhesse Ed történetét. Szülők, barátok, mentorok és szerelmek rajzolódnak ki a szívbemarkoló történetből, melynek során Ed Sheeran valóra váltotta álmát és megírta leghíresebb dalait.',
      url: 'https://i.harperapps.com/hcanz/covers/9780008267551/y648.jpg',
    },
    {
      id: '3',
      title: 'Harry Potter és a bölcsek köve',
      author: 'J. K. Rowling',
      publisher: 'Animus Kiadó',
      language: 'magyar',
      publicationDate: new Date('2018'),
      numberOfPages: 336,
      format: 'Keménytábla',
      description: 'Harry Potter tizenegy éves, amikor megtudja, hogy ő bizony varázslónak született, és felvételt nyert a Roxfort Boszorkány- és Varázslóképző Szakiskolába. Az új iskolában és a csupa újdonsággal szolgáló varázslóvilágban töltött első tanév kemény erőpróba a számára. Ráadásul nem csupán a vizsgákon kell megfelelnie, de egy életre-halálra szóló küzdelemnek is részese lesz.',
      url: 'https://ewedit.files.wordpress.com/2016/09/9781408855652-png.jpg?w=409',
    },
    {
      id: '4',
      title: 'A Suttogó',
      author: 'Alex North',
      publisher: 'Gabo könyvkiadó és keresk.kft.',
      language: 'magyar',
      publicationDate: new Date('2019'),
      numberOfPages: 416,
      format: 'Füles, kartonált',
      description: 'A felesége halálától összeroppant Tom Kennedy egy új élet reményében költözik át az álmos Featherbanks városkába a kisfiával, Jake-kel. Ám Featherbanksnek sötét múltja van. Tizenöt éve egy szociopata bűnöző elrabolt és meggyilkolt öt kisfiút. Amíg el nem fogták, a tettest mindenki csak úgy emlegette: a Suttogó. Természetesen egy régi bűntől Tom és Jake még nyugodtan berendezkedhetnének új házukban. Ám ekkor eltűnik egy újabb kisfiú, és Jake is valahogy különösen kezd viselkedni...',
      url: 'https://moly.hu/system/covers/big/covers_562815.jpg',
    },
    {
      id: '5',
      title: 'Ed Sheeran',
      author: 'Sean Smith',
      publisher: '21. Század Kiadó',
      language: 'magyar',
      publicationDate: new Date('2019'),
      numberOfPages: 351,
      format: 'Flexi',
      description: 'Egyetlen dal volt, amely mindent megváltoztatott - és amelyben Taylor Swift keze is benne volt egy kicsit. Tizenhárom éves korában egy iskolai rockbandában gitározott, aztán eldöntötte, hogy énekes és dalszerző lesz, bár akkor még szinte nem is tudott tisztán énekelni és még életében nem írt saját dalt. Egy éven belül a szobájában felvett egy teljes albumot. Nehezen tudta kezelni, hogy az egész világ a lába előtt hever, de aztán megismerkedett egy lánnyal a szülővárosából és ketten megtalálták a boldogságot. Ed bámulatos utat járt be, melynek során a szégyenlős, dadogó kisfiúból, aki kerüli a felvágós showmankedést, globális jelenség lett. Ed Sheeran jelenleg a világ legsikeresebb szólóművésze: nincs még egy olyan sztár a világon, mint ő: Ed maga az inspiráció. Megindító, felemelő dalai több millió embert kötnek össze egymással, a világon mindenütt. A szerzőről: Sean Smith profi életrajzíró, aki rengeteg háttérinformációt gyűjtött be és interjúk sorát folytatta le, hogy elmesélhesse Ed történetét. Szülők, barátok, mentorok és szerelmek rajzolódnak ki a szívbemarkoló történetből, melynek során Ed Sheeran valóra váltotta álmát és megírta leghíresebb dalait.',
      url: undefined,
    },
    {
      id: '6',
      title: 'Harry Potter és a bölcsek köve',
      author: 'J. K. Rowling',
      publisher: 'Animus Kiadó',
      language: 'magyar',
      publicationDate: new Date('2018'),
      numberOfPages: 336,
      format: 'Keménytábla',
      description: 'Harry Potter tizenegy éves, amikor megtudja, hogy ő bizony varázslónak született, és felvételt nyert a Roxfort Boszorkány- és Varázslóképző Szakiskolába. Az új iskolában és a csupa újdonsággal szolgáló varázslóvilágban töltött első tanév kemény erőpróba a számára. Ráadásul nem csupán a vizsgákon kell megfelelnie, de egy életre-halálra szóló küzdelemnek is részese lesz.',
      url: undefined,
    },
  ];

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(this.BOOKS);
  }

  getBook(id: string): Observable<Book> {
    return of(this.BOOKS.filter(element => element.id === id)[0]);
  }

  addNewBook(book: Book): Observable<boolean> {
    book.id = this.generateId();
    this.BOOKS.push(book);
    return of(true);
  }

  deleteBook(id: string): Observable<boolean> {
    const index = this.BOOKS.findIndex(element => element.id === id);
    if (index > -1) { this.BOOKS.slice(index, 1); }
    return (index < 0) ? of(false) : of(true);
  }

  generateId(): string {
    return new Date().getTime().toString();
  }
}
