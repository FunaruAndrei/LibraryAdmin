import { Book } from './book';
import { Store } from './store';

export class BookStore {
    public bookId: number;
    public book: Book;
    public storeId: number;
    public store: Store;
    public stock: number;
}