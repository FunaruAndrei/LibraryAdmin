import { Book } from './book';
import { Genre } from './genre';

export class BookGenre {
    public bookId: number;
    public book: Book;
    public genreId: number;
    public genre: Genre;
}