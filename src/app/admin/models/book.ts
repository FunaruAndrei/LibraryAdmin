import { BookGenre } from './book-genre';
import { BookAuthor } from './book-author';
import { BookStore } from './book-store';
import { WishList } from './wish-list';
import { Review } from './review';
import { LoanRequest } from './loan-request';
import { Loan } from './loan';

export class Book {
    public bookId: number;
    public title: string;
    public ISBN: string;
    public imageUrl: string;
    public year: Date;
    public editura: string;
    public description: string;
    public nrOfPages: number;
    public buyPrice: number;
    public language: string;
    public bookGenres: BookGenre[];
    public bookAuthors: BookAuthor[];
    public bookStores: BookStore[];
    public wishLists: WishList[];
    public reviews: Review[];
    public loanRequests: LoanRequest[];
    public loans: Loan[];
}