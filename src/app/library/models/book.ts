import { Genre } from 'src/app/admin/models/genre';
import { Author } from 'src/app/admin/models/author';
import { BookStore } from 'src/app/admin/models/book-store';

export class Book {
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
    rate: number;
    wish: boolean;
    loan: string;
    genres: Genre[];
    authors: Author[];
    stores: BookStore[];
}