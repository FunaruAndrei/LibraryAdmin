import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators'

export class User {
    userId: number;
    email: string;
    userName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private _user: User
    private authUrl: string = "/api/Auth"
    
    constructor(private http: HttpClient) { }

    public GetUser(): Observable<User> {
        if (this._user)
            return of(this._user);

        return this.http.get<User>(this.authUrl).pipe(
            tap(x=>this._user=x),
        )

    }
}
