import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Author } from 'src/app/admin/models/author';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/admin/models/genre';
import { Book } from '../models/book';
import { BookDetail } from '../models/book-detail';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "/api/Library/";
    }

    GetAutori(): Observable<Author[]> {
        return this.http.get<Author[]>(this.baseUrl + "GetAuthors");
    }

    GetGenres(): Observable<Genre[]> {
        return this.http.get<Genre[]>(this.baseUrl + "GetGenres");
    }

    GetBooks(GenreId: number, AutorId: number, An: number): Observable<Book[]> {
        const params = new HttpParams({
            fromObject: {
                GenreId: GenreId == null ? "" : GenreId.toString(),
                AutorId: AutorId == null ? "" : AutorId.toString(),
                An: An == null ? "" : An.toString(),
            }
        });

        return this.http.get<Book[]>(this.baseUrl + "GetBooks", { params: params });
    }

    GetBook(bookId: number): Observable<BookDetail> {
        let params = new HttpParams().set("BookId", bookId.toString());

        return this.http.get<BookDetail>(this.baseUrl + "GetBook", { params: params } );
    }

    AddRemoveWishList(BookId: number, UserId: number, WishListed: boolean): Observable<any> {

        return this.http.post<any>(this.baseUrl + "AddRemoveWishList", {
            BookId: BookId,
            UserId: UserId,
            WishListed: WishListed
        });
    }

    AddReviewReq(BookId: number, UserId: number, Text: string, Rate: number): Observable<any> {

        return this.http.post<any>(this.baseUrl + "AddReviewReq", {
            BookId: BookId,
            UserId: UserId,
            Text: Text,
            Rate: Rate
        });
    }

    GetWishList(UserId: number): Observable<Book[]> {
        let params = new HttpParams().set("UserId", UserId.toString());
        return this.http.get<Book[]>(this.baseUrl + "GetWishList", { params: params });
    }


    AddLoanRequest(BookId: number, UserId: number, StoreId: number, Mention: string): Observable<any> {

        return this.http.post<any>(this.baseUrl + "AddLoanRequest", {
            BookId: BookId,
            UserId: UserId,
            StoreId: StoreId,
            Mention: Mention
        });
    }

}
