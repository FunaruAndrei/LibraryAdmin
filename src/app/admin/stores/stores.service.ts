import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '../models/store';

@Injectable({
    providedIn: 'root'
})
export class StoresService {

    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "/api/Stores/";
    }

    getStores(): Observable<Store[]> {
        return this.http.get<Store[]>(this.baseUrl);
    }

    deleteStore(store: Store): Observable<Store> {
        return this.http.delete<Store>(this.baseUrl + store.storeId);
    }

    addStore(store: Store): Observable<Store> {
        return this.http.post<Store>(this.baseUrl, store);
    }

    editStore(store: Store): Observable<any> {
        return this.http.put(this.baseUrl + store.storeId, store);
    }
}
