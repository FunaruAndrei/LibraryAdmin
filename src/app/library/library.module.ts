import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout'

import { LibraryRoutingModule } from './library-routing.module';
import { DemoMaterialModule } from '../material-module'
import { CoreModule } from '../core/core.module';
import { LibraryService } from './shared/library.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { IndexComponent } from './index/index.component';
import { SpinnerService } from '../core/spinner.service';
import { BarRatingModule } from 'ngx-bar-rating';
import { DetailComponent } from './detail/detail.component';
import { WebStorageModule } from 'ngx-store';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoanBookComponent } from './loan-book/loan-book.component';

@NgModule({
    declarations: [IndexComponent, DetailComponent, UserDashboardComponent, LoanBookComponent],
    providers: [LibraryService, SpinnerService],
    imports: [
        CommonModule,
      FlexLayoutModule,
      LibraryRoutingModule,
      DemoMaterialModule,
      FormsModule,
      ReactiveFormsModule,
        PipesModule,
        BarRatingModule,
        WebStorageModule
    ],
    entryComponents: [LoanBookComponent]
})
export class LibraryModule { }
