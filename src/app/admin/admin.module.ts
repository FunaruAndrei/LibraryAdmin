import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AutoriComponent } from './autori/autori.component';
import { IndexComponent } from './index/index.component';
import { GenresComponent } from './genres/genres.component';


import { FlexLayoutModule } from '@angular/flex-layout';

import { DemoMaterialModule } from '../material-module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleService } from './shared/title.service';
import { DataService } from './shared/data.service';
import { GenresService } from './genres/genres.service';
import { DeletegenreComponent } from './genres/deletegenre/deletegenre.component';
import { SpinnerService } from '../core/spinner.service';
import { AddEditGenreComponent } from './genres/add-edit-genre/add-edit-genre.component';
import { DeleteautorComponent } from './autori/deleteautor/deleteautor.component';
import { AddEditAutorComponent } from './autori/add-edit-autor/add-edit-autor.component';
import { AutoriService } from './autori/autori.service';
import { PipesModule } from '../pipes/pipes.module';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { APP_DATE_FORMATS, AppDateAdapter } from '../core/dateformat';
import { StoresComponent } from './stores/stores.component';
import { DeletestoreComponent } from './stores/deletestore/deletestore.component';
import { AddEditStoreComponent } from './stores/add-edit-store/add-edit-store.component';
import { StoresService } from './stores/stores.service';
import { BooksComponent } from './books/books.component';
import { DeletebookComponent } from './books/deletebook/deletebook.component';
import { AddEditBookComponent } from './books/add-edit-book/add-edit-book.component';

@NgModule({
    declarations: [AutoriComponent,
        IndexComponent,
        GenresComponent,
        DeletegenreComponent,
        AddEditGenreComponent,
        DeleteautorComponent,
        AddEditAutorComponent,
        StoresComponent,
        DeletestoreComponent,
        AddEditStoreComponent,
        BooksComponent,
        DeletebookComponent,
        AddEditBookComponent],
    providers: [TitleService,
        DataService,
        GenresService,
        SpinnerService,
        AutoriService,
        StoresService,
        {
            provide: DateAdapter, useClass: AppDateAdapter
        },
        {
            provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
        }],
  imports: [
    CommonModule,
      AdminRoutingModule,
      FlexLayoutModule,
      DemoMaterialModule,
      FormsModule,
      ReactiveFormsModule,
      PipesModule
      
    ],
    entryComponents: [DeletegenreComponent,
        AddEditGenreComponent,
        AddEditAutorComponent,
        DeleteautorComponent,
        DeletestoreComponent,
        AddEditStoreComponent,
        DeletebookComponent,
        AddEditBookComponent
    ]
})
export class AdminModule { }
