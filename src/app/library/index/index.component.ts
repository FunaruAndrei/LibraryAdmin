import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/core/auth.service';
import { LibraryService } from '../shared/library.service';
import { Genre } from 'src/app/admin/models/genre';
import { Author } from 'src/app/admin/models/author';
import { Book } from '../models/book';
import { SpinnerService } from 'src/app/core/spinner.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

import { LocalStorage, LocalStorageService } from 'ngx-store';
import { Router } from '@angular/router';
import { LoanBookComponent } from '../loan-book/loan-book.component';
import { BookStore } from 'src/app/admin/models/book-store';

interface Data {
    book: Book,
    stores: BookStore[],
    storeSelected: BookStore,
    mention: string
}

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

    genres: Genre[];
    authors: Author[];
    books: Book[];
    booksShow: Book[] = [];

    genControl = new FormControl();
    autorControl = new FormControl();
    searchFormControl = new FormControl();
    yearControl = new FormControl();

    genreId: number;
    authorId: number;
    year: number;

    @LocalStorage() genreStorage;
    @LocalStorage() authorStorage;
    @LocalStorage() yearStorage;

    private user: User;
    constructor(private authService: AuthService,
        private libraryService: LibraryService,
        private spinnerService: SpinnerService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        private router: Router,
        private localStorageService: LocalStorageService) { }

    ngOnInit() {

        this.genreId = null;
        this.authorId = null;
        this.year = null;

        if (this.genreStorage != null) {
            this.genreId = parseInt(this.genreStorage);
           
        }

        if (this.authorStorage != null) {
            this.authorId = parseInt(this.authorStorage);
          
        }

        if (this.yearStorage != null) {
            this.year = parseInt(this.yearStorage);
            this.yearControl.setValue(this.year);
        }

        this.authService.GetUser().subscribe(e => {
            this.user = e;
        });

        this.GetGenres();
        this.GetAuthors();
        this.GetBooks(this.genreId, this.authorId, this.year);

        this.localStorageService.clear();
        
    }

    GetGenres() {

        this.libraryService.GetGenres().subscribe(
            data => {
            this.genres = data

                this.genreId == null ? null : this.genControl.setValue(this.genres.filter(e => e.genreId == this.genreId)[0].name);
            }
        )

    }

    GetAuthors() {
        this.libraryService.GetAutori().subscribe(
            data => {
                this.authors = data
                this.authorId == null ? null : this.autorControl.setValue(this.authors.filter(e => e.authorId == this.authorId)[0].name);
            }
        )
    }

    GetBooksButton() {
        console.log(this.genControl.value);

        let genreId = (this.genControl.value != null || this.genControl.value != "" ) ? this.genres.filter(e => e.name == this.genControl.value)[0].genreId : null;
        let authorId = (this.autorControl.value != null || this.autorControl.value != "" ) ? this.authors.filter(e => e.name == this.autorControl.value)[0].authorId : null;
        let year = (this.yearControl.value != null || this.yearControl.value != "" ) ? this.yearControl.value : null;

        this.GetBooks(genreId, authorId, year);

    }

    GetBooks(genreId: number, authorId: number, an: number) {
        this.booksShow = [];
        this.books = [];

        this.libraryService.GetBooks(genreId, authorId, an).subscribe(
            (response) => {

              

                this.books = response;

                if (this.books.length == 0) {
                    this.booksShow = [];
                } else {

                    Object.assign(this.booksShow, this.books);
                }


            }
        );

    }

    LoanBook(book: Book) {
        const dialogRef = this.dialog.open(LoanBookComponent, {
            width: '1000px',
            data: {
                book: book,
                storeSelected: null,
                stores: Object.assign([], book.stores),
                mention: ""
            }
        });

        dialogRef.afterClosed().subscribe((result: Data) => {
            console.log(result);

            if (result != undefined) {

                this.spinnerService.spin$.next(true);

                this.libraryService.AddLoanRequest(book.bookId, this.user.userId, result.storeSelected.storeId, result.mention).subscribe(
                    (response) => {
                        this.spinnerService.spin$.next(false);
                        this.snackBar.open("Cerere imprumut trimitsa!", null, {
                            duration: 3000,
                            panelClass: "text-success"
                        });
                        book.loan = "Pending";
                        book.stores.filter(e => e.storeId == result.storeSelected.storeId)[0].stock--;

                    },
                    (error) => {
                        this.spinnerService.spin$.next(false);
                        this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                            duration: 3000,
                            panelClass: "text-danger"
                        });
                    }
                );
                
            }
        });
    }

    GetAut(book: Book) {
        return book.authors.map(e => e.name).join(", ");
    }
    GetGen(book: Book) {
        return book.genres.map(e => e.name).join(", ");
    }

    AddToWishList(book: Book) {

        this.spinnerService.spin$.next(true);

        this.libraryService.AddRemoveWishList(book.bookId, this.user.userId, true).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Carte adaugata la favorite!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                book.wish = true;

            },
            (error) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                    duration: 3000,
                    panelClass: "text-danger"
                });
            }
        );

    }

    RemoveFromWishList(book: Book) {

        this.spinnerService.spin$.next(true);

        this.libraryService.AddRemoveWishList(book.bookId, this.user.userId, false).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Carte stearsa de la favorite!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                book.wish = false;

            },
            (error) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                    duration: 3000,
                    panelClass: "text-danger"
                });
            }
        );

    }

    applyFilter(filterValue: string) {
        this.booksShow = this.books.filter(e => e.title.toLowerCase().trim().indexOf(filterValue.toLowerCase().trim()) > -1)
    }

    OpenDetail(book: Book) {
        if (this.genControl.value != null)
            this.genreStorage = this.genres.filter(e => e.name == this.genControl.value)[0].genreId;
        if (this.autorControl.value != null)
            this.authorStorage = this.authors.filter(e => e.name == this.autorControl.value)[0].authorId;
        if (this.yearControl.value != null)
            this.yearStorage = this.yearControl.value;


        this.router.navigate(['/library', 'book', book.bookId]);

    }



}
