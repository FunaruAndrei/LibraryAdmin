import { BookAuthor } from './book-author';

export class Author {
    public authorId: number;
    public name: string;
    public birthDay: Date;
    public birthplace: string;
    public description: string;
    public bookAuthors: BookAuthor[];
}