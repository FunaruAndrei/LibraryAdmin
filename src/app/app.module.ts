import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DemoMaterialModule } from './material-module'
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';


import { OverlayModule } from '@angular/cdk/overlay'
import { SpinnerService } from './core/spinner.service';
import { MatSpinner, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { PipesModule } from './pipes/pipes.module';
import { AppDateAdapter, APP_DATE_FORMATS } from './core/dateformat';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  declarations: [
      AppComponent,
      
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      DemoMaterialModule,
      CoreModule,
      FormsModule,
      FlexLayoutModule,
      OverlayModule,
      PipesModule,
      BarRatingModule
    ],
    exports: [
        
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, SpinnerService,
        {
            provide: DateAdapter, useClass: AppDateAdapter
        },
        {
            provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
        }],
    bootstrap: [AppComponent],
    entryComponents: [MatSpinner],
})
export class AppModule { }
