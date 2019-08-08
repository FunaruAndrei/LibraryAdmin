import { Review } from 'src/app/admin/models/review';
import { Genre } from 'src/app/admin/models/genre';
import { Author } from 'src/app/admin/models/author';
import { BookStore } from 'src/app/admin/models/book-store';

export class BookDetail {
    bookId: number;
    title: string;
    isbn: string;
    imageUrl: string;
    year: Date;
    editura: string;
    description: string;
    nrOfPages: number;
    buyPrice: number;
    language: string;
    loan: string;
    wish: boolean;
    reviews: Review[];
    genres: Genre[];
    authors: Author[];
    stores: BookStore[];
}