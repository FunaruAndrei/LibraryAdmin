import { Book } from './book';
import { BibliotecaUser } from 'src/app/library/models/biblioteca-user';

export class Review {
    public reviewId: number;
    public rate: number;
    public text: string;
    public data: Date;
    public bookId: number;
    public book: Book;
    public bibliotecaUserId: number;
    public bibliotecaUser: BibliotecaUser;
}