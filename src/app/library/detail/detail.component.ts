import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LibraryService } from '../shared/library.service';
import { BookDetail } from '../models/book-detail';
import { User, AuthService } from 'src/app/core/auth.service';
import { SpinnerService } from 'src/app/core/spinner.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { LoanBookComponent } from '../loan-book/loan-book.component';
import { BookStore } from 'src/app/admin/models/book-store';
import { Book } from '../models/book';
import { BibliotecaUser } from '../models/biblioteca-user';

interface Data {
    book: Book,
    stores: BookStore[],
    storeSelected: BookStore,
    mention: string
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    bookId: number;
    user: User;
    fullDescription: boolean = false;
    addReviewRate: number = 0;
    addReviewText: string = "";
    reviewAvg: number = 0;

    book: BookDetail;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private libraryService: LibraryService,
        private authService: AuthService,
        public dialog: MatDialog,
        private spinnerService: SpinnerService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {

        this.authService.GetUser().subscribe(e => {
            this.user = e;

        });

        this.bookId = parseInt(this.route.snapshot.paramMap.get('id'));

        this.GetBook(this.bookId);

    }

    GetBook(bookId: number) {

        this.libraryService.GetBook(bookId).subscribe(
            (data) => {
                this.book = data;

                if (this.book.reviews.length > 0) {
                    let sum = 0;
                    this.book.reviews.map(e => e.rate).forEach(e => sum += e);
                    this.reviewAvg = sum / this.book.reviews.length;
                }
            }
        );

    }

    GetAut(book: BookDetail) {
        return book.authors.map(e => e.name).join(", ");
    }
    GetGen(book: BookDetail) {
        return book.genres.map(e => e.name).join(", ");
    }

    AddToWishList() {

        this.spinnerService.spin$.next(true);

        this.libraryService.AddRemoveWishList(this.book.bookId, this.user.userId, true).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Carte adaugata la favorite!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                this.book.wish = true;

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

    RemoveFromWishList() {

        this.spinnerService.spin$.next(true);

        this.libraryService.AddRemoveWishList(this.book.bookId, this.user.userId, false).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Carte stearsa de la favorite!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
                this.book.wish = false;

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

    AddReview() {

        if (this.addReviewRate == null || this.addReviewRate == 0) {
            this.snackBar.open("Selecteaza un rating pentru review!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
            return;
        }

        this.spinnerService.spin$.next(true);

        this.libraryService.AddReviewReq(this.book.bookId, this.user.userId, this.addReviewText, this.addReviewRate).subscribe(
            (response) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("Review-ul trimis cu succes, asteapta confirmare!", null, {
                    duration: 3000,
                    panelClass: "text-success"
                });
              

                this.book.reviews.push({
                    bibliotecaUser: this.user as BibliotecaUser,
                    bibliotecaUserId: this.user.userId,
                    book: null,
                    bookId: this.book.bookId,
                    data: new Date(),
                    rate: this.addReviewRate,
                    text: this.addReviewText,
                    reviewId: null
                });

                this.addReviewRate = 0;
                this.addReviewText = null;

            },
            (error) => {
                this.spinnerService.spin$.next(false);
                this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                    duration: 3000,
                    panelClass: "text-danger"
                });
            });

    }

    ExistReview() {

        if (this.user) {

            return this.book.reviews.map(e => e.bibliotecaUserId).indexOf(this.user.userId) > 0;
        }

    }

    LoanBook(book: BookDetail) {
        const dialogRef = this.dialog.open(LoanBookComponent, {
            width: '1000px',
            data: {
                book: <Book>{ bookId: book.bookId },
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

}
