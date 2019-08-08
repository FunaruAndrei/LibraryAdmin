import { Component, OnInit, AfterViewInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { TitleService } from '../shared/title.service';
import { MatSort, MatPaginator, MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { SpinnerService } from 'src/app/core/spinner.service';
import { Book } from '../models/book';
import { BooksService } from './books.service';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { AddEditBookComponent } from './add-edit-book/add-edit-book.component';
import { AutoriService } from '../autori/autori.service';
import { GenresService } from '../genres/genres.service';
import { StoresService } from '../stores/stores.service';
import { Store } from '../models/store';
import { Author } from '../models/author';
import { Genre } from '../models/genre';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, AfterViewInit {

    stores: Store[];
    autori: Author[];
    genres: Genre[];

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }


    @Output() titled = new EventEmitter<string>();
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    books: Book[] = [];
    _addBook: Book;
    displayedColumns: string[] = ['imageUrl', 'bookId', 'title', 'isbn', 'year', 'editura', 'language', 'nrOfPages', 'buyPrice', 'actions'];
    dataSource: MatTableDataSource<Book> = new MatTableDataSource(this.books);

    constructor(private titleService: TitleService,
        public dialog: MatDialog,
        private snackBar: MatSnackBar,
        private spinnerService: SpinnerService,
        private booksService: BooksService,
        private autoriService: AutoriService,
        private genresService: GenresService,
        private storesService: StoresService
    ) {
    }

    ngOnInit() {
        this.titleService.getTitle("Books");

        this.getBooks();
        this.getAutori();
        this.getGenres();
        this.getStores();

    }
    getStores(): any {
        this.storesService.getStores().subscribe(
            data => this.stores = data
        );
    }
    getAutori(): any {
        this.autoriService.getAutori().subscribe(
            data => this.autori = data
        );
    }
    getGenres(): any {
        this.genresService.getGenres().subscribe(
            data => this.genres = data
        );
    }

    getBooks() {

        this.booksService.getBooks().subscribe(
            data => {
                this.books = data;
                this.dataSource = new MatTableDataSource(this.books);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            });
    }

    


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    deleteBook(item: Book): void {
        const dialogRef = this.dialog.open(DeletebookComponent, {
            width: '250px',
            data: item
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);

            if (result != undefined) {

                this.spinnerService.spin$.next(true);

                this.booksService.deleteBook(item).subscribe(
                    (response) => {
                        this.spinnerService.spin$.next(false);
                        this.snackBar.open("Genul a fost sters cu succes!", null, {
                            duration: 3000,
                            panelClass: "text-success"
                        });
                        this.getBooks();

                    },
                    (error) => {
                        this.spinnerService.spin$.next(false);
                        this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                            duration: 3000,
                            panelClass: "text-danger"
                        });
                    }
                )
            }

        });
    }

    AddBook() {
        const dialogRef = this.dialog.open(AddEditBookComponent, {
            width: '1200px',
            data: {
                type: "add",
                book: new Book(),
                genres: Object.assign([], this.genres == undefined ? [] : this.genres),
                autori: Object.assign([], this.autori == undefined ? [] : this.autori),
                stores: Object.assign([], this.stores == undefined ? [] : this.stores)
            },
            panelClass: "formFieldWidth"
        });

        dialogRef.afterClosed().subscribe(result => {

            this.AddBookConfirm(result.book);
            console.log(this.autori);
            console.log(this.genres);
        });

    }

    AddBookConfirm(book: Book) {

        this.spinnerService.spin$.next(true);

        this.booksService.addBook(book).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Genul a fost adaugat cu succes!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                this.getBooks();

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

    EditBook(item: Book) {
        const dialogRef = this.dialog.open(AddEditBookComponent, {
            width: '1200px',
            data: {
                type: "edit",
                book: Object.assign({}, item),
                genres: Object.assign([], this.genres == undefined ? [] : this.genres),
                autori: Object.assign([], this.autori == undefined ? [] : this.autori),
                stores: Object.assign([], this.stores == undefined ? [] : this.stores)
            },
            panelClass: "formFieldWidth"
        });

        dialogRef.afterClosed().subscribe(result => {

            if (result != undefined) {

                this.EditBookConfirm(result.book);
            }
            
        });
    }

    EditBookConfirm(book: Book) {

        this.spinnerService.spin$.next(true);

        this.booksService.editBook(book).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Cartea a fost modificata cu succes!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                this.getBooks();

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
}
