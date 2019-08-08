import { Component, OnInit, Output, EventEmitter, ViewChild, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { TitleService } from '../shared/title.service';
import { StoresService } from './stores.service';
import { Store } from '../models/store';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { SpinnerService } from 'src/app/core/spinner.service';
import { DeletestoreComponent } from './deletestore/deletestore.component';
import { AddEditStoreComponent } from './add-edit-store/add-edit-store.component';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }


    @Output() titled = new EventEmitter<string>();
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    stores: Store[] = [];
    _addStore: Store;
    displayedColumns: string[] = ['storeId', 'name', 'address', 'program', 'actions'];
    dataSource: MatTableDataSource<Store> = new MatTableDataSource(this.stores);

    constructor(private titleService: TitleService,
        private storesService: StoresService,
        public dialog: MatDialog,
        private snackBar: MatSnackBar,
        private spinnerService: SpinnerService
    ) {

    }

    ngOnInit() {
        this.titleService.getTitle("Biblioteci");

        this.getStores();

    }

    getStores() {
        this.storesService.getStores().subscribe(
            data => {
                this.stores = data;
                this.dataSource = new MatTableDataSource(this.stores);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            });
    }


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    deleteStore(item: Store): void {
        const dialogRef = this.dialog.open(DeletestoreComponent, {
            width: '250px',
            data: item
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);

            if (result != undefined) {

                this.spinnerService.spin$.next(true);

                this.storesService.deleteStore(item).subscribe(
                    (response) => {
                        this.spinnerService.spin$.next(false);
                        this.snackBar.open("Biblioteca a fost stearsa cu succes!", null, {
                            duration: 3000,
                            panelClass: "text-success"
                        });
                        this.getStores();

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

    AddStore() {
        const dialogRef = this.dialog.open(AddEditStoreComponent, {
            width: '350px',
            data: {
                type: "add",
                store: this._addStore
            }
        });

        dialogRef.afterClosed().subscribe(result => {

            if (result != undefined && result != null) {

                this.AddStoreConfirm(result.store);

            }

        });

    }

    AddStoreConfirm(store: Store) {

        this.spinnerService.spin$.next(true);

        this.storesService.addStore(store).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Biblioteca a fost adaugata cu succes!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                this.getStores();

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

    EditStore(item: Store) {
        const dialogRef = this.dialog.open(AddEditStoreComponent, {
            width: '350px',
            data: {
                type: "edit",
                store: Object.assign({}, item)
            },
            panelClass: "formFieldWidth"
        });

        dialogRef.afterClosed().subscribe(result => {
            this.EditStoreConfirm(result.store);
        });
    }

    EditStoreConfirm(store: Store) {

        this.spinnerService.spin$.next(true);

        this.storesService.editStore(store).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Biblioteca a fost modificata cu succes!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                this.getStores();

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


