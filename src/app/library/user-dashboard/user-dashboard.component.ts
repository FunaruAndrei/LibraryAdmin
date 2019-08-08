import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/library/models/book';
import { LibraryService } from '../shared/library.service';
import { AuthService, User } from 'src/app/core/auth.service';
import { SpinnerService } from 'src/app/core/spinner.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

    user: User;
    wishListbooks: Book[];
    wishListbooksShow: Book[];

    constructor(
        private router: Router,
        private libraryService: LibraryService,
        private authService: AuthService,
        private spinnerService: SpinnerService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {

        this.authService.GetUser().subscribe(e => {
            this.user = e;

            this.GetWishList();
        });

    }

    GetAut(book: Book) {
        return book.authors.map(e => e.name).join(", ");
    }
    GetGen(book: Book) {
        return book.genres.map(e => e.name).join(", ");
    }

    GetWishList() {
        this.libraryService.GetWishList(this.user.userId).subscribe(
            (response) => {
                this.wishListbooks = response;

                if (this.wishListbooks.length == 0) {
                    this.wishListbooksShow = [];
                } else {

                    Object.assign(this.wishListbooksShow, this.wishListbooks);
                }


            }
        );
    }


}
