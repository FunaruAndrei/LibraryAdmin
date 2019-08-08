import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

    private titleSource = new Subject<string>();

    title$ = this.titleSource.asObservable();

    getTitle(title: string) {
        this.titleSource.next(title);
    }

  constructor() { }
}
