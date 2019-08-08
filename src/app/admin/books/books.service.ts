import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "/api/Books/";
    }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.baseUrl);
    }

    deleteBook(book: Book): Observable<Book> {
        return this.http.delete<Book>(this.baseUrl + book.bookId);
    }

    addBook(book: Book): Observable<Book> {
        return this.http.post<Book>(this.baseUrl, book);
    }

    editBook(book: Book): Observable<any> {
        return this.http.put(this.baseUrl + book.bookId, book);
    }
}