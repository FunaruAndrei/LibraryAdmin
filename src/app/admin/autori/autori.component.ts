import { Component, OnInit, AfterViewInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { TitleService } from '../shared/title.service';
import { MatSort, MatPaginator, MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { SpinnerService } from 'src/app/core/spinner.service';
import { Author } from '../models/author';
import { DeleteautorComponent } from './deleteautor/deleteautor.component';
import { AddEditAutorComponent } from './add-edit-autor/add-edit-autor.component';
import { AutoriService } from './autori.service';

@Component({
  selector: 'app-autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.scss']
})
export class AutoriComponent implements OnInit, AfterViewInit {
    
    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }


    @Output() titled = new EventEmitter<string>();
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    autori: Author[] = [];
    _addAuthor: Author;
    displayedColumns: string[] = ['authorId', 'name', 'birthDay', 'birthplace', 'description', 'actions'];
    dataSource: MatTableDataSource<Author> = new MatTableDataSource(this.autori);

    constructor(private titleService: TitleService,
        public dialog: MatDialog,
        private snackBar: MatSnackBar,
        private spinnerService: SpinnerService,
        private autoriService: AutoriService
    ) {
    }

    ngOnInit() {
        this.titleService.getTitle("Autori");

        this.getAutori();

    }

    getAutori() {
       
        this.autoriService.getAutori().subscribe(
            data => {
                this.autori = data;
                this.dataSource = new MatTableDataSource(this.autori);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            });
    }


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    deleteAuthor(item: Author): void {
        const dialogRef = this.dialog.open(DeleteautorComponent, {
            width: '250px',
            data: item
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);

            if (result != undefined) {

                this.spinnerService.spin$.next(true);

                this.autoriService.deleteAuthor(item).subscribe(
                    (response) => {
                        this.spinnerService.spin$.next(false);
                        this.snackBar.open("Genul a fost sters cu succes!", null, {
                            duration: 3000,
                            panelClass: "text-success"
                        });
                        this.getAutori();

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

    AddAuthor() {
        const dialogRef = this.dialog.open(AddEditAutorComponent, {
            width: '400px',
            data: {
                type: "add",
                autor: this._addAuthor
            }
        });

        dialogRef.afterClosed().subscribe(result => {

            if (result != undefined && result != null) {

                this.AddAuthorConfirm(result.autor);

            }

        });

    }

    AddAuthorConfirm(author: Author) {

        this.spinnerService.spin$.next(true);

        this.autoriService.addAuthor(author).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Genul a fost adaugat cu succes!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                this.getAutori();

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

    EditAuthor(item: Author) {
        const dialogRef = this.dialog.open(AddEditAutorComponent, {
            width: '400px',
            data: {
                type: "edit",
                autor: Object.assign({}, item)
            },
            panelClass: "formFieldWidth"
        });

        dialogRef.afterClosed().subscribe(result => {
            this.EditAuthorConfirm(result.autor);
        });
    }

    EditAuthorConfirm(author: Author) {

        this.spinnerService.spin$.next(true);

        this.autoriService.editAuthor(author).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Genul a fost modificat cu succes!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                this.getAutori();

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