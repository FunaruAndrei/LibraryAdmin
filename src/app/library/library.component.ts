import { Component } from '@angular/core';

@Component({
    selector: 'library-root',
    template: `
library module
<a routerLink="index" routerLinkActive="active">Heroes</a>
<hr>
    <router-outlet name='library'></router-outlet>
  `,
    styles: []
})
export class LibraryComponent{

}