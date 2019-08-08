import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../../models/book';
import { Author } from '../../models/author';
import { Genre } from '../../models/genre';
import { Store } from '../../models/store';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort, MatPaginator, MatSnackBar } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {  ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BookGenre } from '../../models/book-genre';
import { BookAuthor } from '../../models/book-author';
import { BookStore } from '../../models/book-store';

interface Data {
    type: string;
    book: Book;
    autori: Author[];
    genres: Genre[];
    stores: Store[];
}

@Component({
  selector: 'app-add-edit-book',
  templateUrl: './add-edit-book.component.html',
  styleUrls: ['./add-edit-book.component.scss']
})
export class AddEditBookComponent implements OnInit {

    genresSelected: Genre[];
    autoriSelected: Author[];
    storesSelected: Store[];
    bookStoresSelected: BookStore[];
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    genreCtrl = new FormControl();
    autorCtrl = new FormControl();
    
    @ViewChild('genreInput') genreInput: ElementRef<HTMLInputElement>;
    @ViewChild('autorInput') autorInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = ['storeId', 'store.name', 'store.address', 'stock'];
    dataSource: MatTableDataSource<BookStore> = new MatTableDataSource(this.bookStoresSelected);

    constructor(public dialogRef: MatDialogRef<AddEditBookComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Data,
        private snackBar: MatSnackBar) {

    

    }

    ngOnInit() {

        if (this.data.book == null || this.data.book == undefined) {
            this.data.book = new Book();
        } else {
            this.genresSelected = this.data.book.bookGenres == undefined ? [] : this.data.book.bookGenres.map(e => e.genre);
            this.autoriSelected = this.data.book.bookAuthors == undefined ? [] : this.data.book.bookAuthors.map(e => e.author); 
            this.storesSelected = this.data.book.bookStores == undefined ? [] : this.data.book.bookStores.map(e => e.store); 
            this.bookStoresSelected = Object.assign([], this.data.book.bookStores);

            this.data.genres = this.genresSelected.length == 0 ? this.data.genres:  this.data.genres.filter(e => !this.genresSelected.find(z => z.genreId == e.genreId));
            this.data.autori = this.data.autori.filter(e => !this.autoriSelected.find(z => z.authorId == e.authorId));
            this.data.stores = this.data.stores.filter(e => !this.storesSelected.find(z => z.storeId == e.storeId));

            this.dataSource = new MatTableDataSource(this.bookStoresSelected);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;

        }
        
    }
    
    removeGenre(genre: Genre): void {
        const index = this.genresSelected.indexOf(genre);

        if (index >= 0) {
            this.genresSelected.splice(index, 1);

            this.data.genres.push(genre);
        }
    }

    selectedGenre(event: MatAutocompleteSelectedEvent): void {
        this.genresSelected.push(event.option.value as Genre);
        this.genreInput.nativeElement.blur();
        let gid = this.data.genres.indexOf(event.option.value as Genre);
        this.data.genres.splice(gid, 1);
    }

    removeAutor(autor: Author): void {
        const index = this.autoriSelected.indexOf(autor);

        if (index >= 0) {
            this.autoriSelected.splice(index, 1);

            this.data.autori.push(autor);
        }
    }

    selectedAutor(event: MatAutocompleteSelectedEvent): void {
        this.autoriSelected.push(event.option.value as Author);
        this.autorInput.nativeElement.blur();
        let gid = this.data.autori.indexOf(event.option.value as Author);
        this.data.autori.splice(gid, 1);
    }

    removeStore(store: Store): void {
        const index = this.storesSelected.indexOf(store);
        const index1 = this.bookStoresSelected.map(e => e.store).indexOf(store);

        if (index >= 0) {
            this.storesSelected.splice(index, 1);
            this.bookStoresSelected.splice(index1, 1);

            this.dataSource = new MatTableDataSource(this.bookStoresSelected);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;

            this.data.stores.push(store);
        }
    }

    selectedStore(event: MatAutocompleteSelectedEvent): void {
        this.storesSelected.push(event.option.value as Store);

        this.bookStoresSelected.unshift(<BookStore>{
            store: <Store>event.option.value,
            storeId: (<Store>event.option.value).storeId,
            book: this.data.book,
            bookId: this.data.book.bookId,
            stock: 0

        });

        this.dataSource = new MatTableDataSource(this.bookStoresSelected);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
        this.autorInput.nativeElement.blur();
        let gid = this.data.stores.indexOf(event.option.value as Store);
        this.data.stores.splice(gid, 1);
    }

    onYesClick() {

        if (this.bookStoresSelected.filter(e => e.stock <= 0).length > 0) {
            this.snackBar.open("Completeaza stocurile bibliotecilor!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
            return;
        }

        this.data.book.bookGenres = this.genresSelected.map(e => <BookGenre>{ bookId: this.data.book.bookId, genreId: e.genreId, genre: e });
        this.data.book.bookAuthors = this.autoriSelected.map(e => <BookAuthor>{ bookId: this.data.book.bookId, authorId: e.authorId, author: e });
        this.data.book.bookStores = this.bookStoresSelected.map(e => <BookStore>{ bookId: this.data.book.bookId, storeId: e.storeId, stock: e.stock });
        

        this.dialogRef.close(this.data);
    }
    
    onNoClick(): void {
        this.dialogRef.close();
    }

}