import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { DeletegenreComponent } from 'src/app/admin/genres/deletegenre/deletegenre.component';
import { Book } from '../models/book';
import { Store } from 'src/app/admin/models/store';
import { BookStore } from 'src/app/admin/models/book-store';

interface Data {
    book: Book,
    stores: BookStore[],
    storeSelected: BookStore,
    mention: string
}

@Component({
  selector: 'app-loan-book',
  templateUrl: './loan-book.component.html',
  styleUrls: ['./loan-book.component.scss']
})
export class LoanBookComponent implements OnInit {

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['storeId', 'store.name', 'store.address', 'stock', 'actions'];
    dataSource: MatTableDataSource<BookStore> = new MatTableDataSource(this.data.stores);

    constructor(public dialogRef: MatDialogRef<DeletegenreComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Data) {
        
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.data.stores);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    Imprumuta(element: BookStore) {
        this.data.storeSelected = element;
        this.dialogRef.close(this.data);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
