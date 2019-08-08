import { Component } from '@angular/core';

@Component({
    selector: 'library-root',
    template: `
admin module
<a routerLink="index" routerLinkActive="active">Heroes</a>
<hr>
    <router-outlet name='admin'></router-outlet>
  `,
    styles: []
})
export class AdminComponent {

}