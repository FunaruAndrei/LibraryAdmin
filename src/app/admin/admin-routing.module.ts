import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoriComponent } from './autori/autori.component';
import { IndexComponent } from './index/index.component';
import { GenresComponent } from './genres/genres.component';
import { StoresComponent } from './stores/stores.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
    { path: '', redirectTo: 'index' },
    {
        path: 'index', component: IndexComponent,
        children: [
            {
                path: '', redirectTo: "genres"
            },
            {
                path: 'autori', component: AutoriComponent
            },
            {
                path: 'genres', component: GenresComponent
            },
            {
                path: 'stores', component: StoresComponent
            },
            {
                path: 'books', component: BooksComponent
            },
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
