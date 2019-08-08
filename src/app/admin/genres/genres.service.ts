import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../models/genre';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GenresService {
    
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "/api/Genres/";
    }

    getGenres(): Observable<Genre[]> {
        return this.http.get<Genre[]>(this.baseUrl);
    }

    deleteGenre(genre: Genre): Observable<Genre> {
        return this.http.delete<Genre>(this.baseUrl + genre.genreId);
    }

    addGenre(genre: Genre): Observable<Genre> {
        return this.http.post<Genre>(this.baseUrl, genre);
    }

    editGenre(genre: Genre): Observable<any> {
        return this.http.put(this.baseUrl + genre.genreId, genre);
    }

}
