import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AutoriService {

    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "/api/Authors/";
    }

    getAutori(): Observable<Author[]> {
        return this.http.get<Author[]>(this.baseUrl);
    }

    deleteAuthor(author: Author): Observable<Author> {
        return this.http.delete<Author>(this.baseUrl + author.authorId);
    }

    addAuthor(author: Author): Observable<Author> {
        return this.http.post<Author>(this.baseUrl, author);
    }

    editAuthor(author: Author): Observable<any> {
        return this.http.put(this.baseUrl + author.authorId, author);
    }
}
