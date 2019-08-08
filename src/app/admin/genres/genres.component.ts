import { Component, OnInit, Output, EventEmitter, ViewChild, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { TitleService } from '../shared/title.service';
import { GenresService } from './genres.service';
import { Genre } from '../models/genre';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { DeletegenreComponent } from './deletegenre/deletegenre.component';
import { SpinnerService } from 'src/app/core/spinner.service';
import { AddEditGenreComponent } from './add-edit-genre/add-edit-genre.component';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit, AfterViewInit {
    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
    

    @Output() titled = new EventEmitter<string>();
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    genres: Genre[] = [];
    _addGenre: Genre;
    displayedColumns: string[] = ['genreId', 'name', 'actions'];
    dataSource: MatTableDataSource<Genre> = new MatTableDataSource(this.genres);

    constructor(private titleService: TitleService,
        private genresService: GenresService,
        public dialog: MatDialog,
        private snackBar: MatSnackBar,
        private spinnerService: SpinnerService
        )
    {
       
     
    }

    ngOnInit() {
        this.titleService.getTitle("Genuri");
        this.getGenres();
        
    }

    getGenres() {
        this.genresService.getGenres().subscribe(
            data => {
                this.genres = data;
                this.dataSource = new MatTableDataSource(this.genres);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            });
    }


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    deleteGenre(item: Genre): void {
        const dialogRef = this.dialog.open(DeletegenreComponent, {
            width: '250px',
            data: item
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);

            if (result != undefined) {

                this.spinnerService.spin$.next(true);

                this.genresService.deleteGenre(item).subscribe(
                    (response) => {
                        this.spinnerService.spin$.next(false);
                        this.snackBar.open("Genul a fost sters cu succes!", null, {
                            duration: 3000,
                            panelClass:"text-success"
                        });
                        this.getGenres();
                        
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

    AddGenre() {
        const dialogRef = this.dialog.open(AddEditGenreComponent, {
            width: '350px',
            data: {
                type: "add",
                genre: this._addGenre
            }
        });

        dialogRef.afterClosed().subscribe(result => {

            if (result != undefined && result != null) {

                this.AddGenreConfirm(result.genre);

            }

        });

    }

    AddGenreConfirm(genre: Genre) {

        this.spinnerService.spin$.next(true);

        this.genresService.addGenre(genre).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Genul a fost adaugat cu succes!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                this.getGenres();

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

    EditGenre(item: Genre) {
        const dialogRef = this.dialog.open(AddEditGenreComponent, {
            width: '350px',
            data: {
                type: "edit",
                genre: Object.assign({}, item)
            },
            panelClass: "formFieldWidth"
        });

        dialogRef.afterClosed().subscribe(result => {
            this.EditGenreConfirm(result.genre);
        });
    }

    EditGenreConfirm(genre: Genre) {

        this.spinnerService.spin$.next(true);

        this.genresService.editGenre(genre).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Genul a fost modificat cu succes!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                this.getGenres();

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
