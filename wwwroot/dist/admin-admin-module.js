(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autori_autori_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autori/autori.component */ "./src/app/admin/autori/autori.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/admin/index/index.component.ts");
/* harmony import */ var _genres_genres_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genres/genres.component */ "./src/app/admin/genres/genres.component.ts");
/* harmony import */ var _stores_stores_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stores/stores.component */ "./src/app/admin/stores/stores.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./books/books.component */ "./src/app/admin/books/books.component.ts");








var routes = [
    { path: '', redirectTo: 'index' },
    {
        path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
        children: [
            {
                path: '', redirectTo: "genres"
            },
            {
                path: 'autori', component: _autori_autori_component__WEBPACK_IMPORTED_MODULE_3__["AutoriComponent"]
            },
            {
                path: 'genres', component: _genres_genres_component__WEBPACK_IMPORTED_MODULE_5__["GenresComponent"]
            },
            {
                path: 'stores', component: _stores_stores_component__WEBPACK_IMPORTED_MODULE_6__["StoresComponent"]
            },
            {
                path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_7__["BooksComponent"]
            },
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _autori_autori_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autori/autori.component */ "./src/app/admin/autori/autori.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/admin/index/index.component.ts");
/* harmony import */ var _genres_genres_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genres/genres.component */ "./src/app/admin/genres/genres.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/title.service */ "./src/app/admin/shared/title.service.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/data.service */ "./src/app/admin/shared/data.service.ts");
/* harmony import */ var _genres_genres_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./genres/genres.service */ "./src/app/admin/genres/genres.service.ts");
/* harmony import */ var _genres_deletegenre_deletegenre_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./genres/deletegenre/deletegenre.component */ "./src/app/admin/genres/deletegenre/deletegenre.component.ts");
/* harmony import */ var _core_spinner_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/spinner.service */ "./src/app/core/spinner.service.ts");
/* harmony import */ var _genres_add_edit_genre_add_edit_genre_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./genres/add-edit-genre/add-edit-genre.component */ "./src/app/admin/genres/add-edit-genre/add-edit-genre.component.ts");
/* harmony import */ var _autori_deleteautor_deleteautor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./autori/deleteautor/deleteautor.component */ "./src/app/admin/autori/deleteautor/deleteautor.component.ts");
/* harmony import */ var _autori_add_edit_autor_add_edit_autor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./autori/add-edit-autor/add-edit-autor.component */ "./src/app/admin/autori/add-edit-autor/add-edit-autor.component.ts");
/* harmony import */ var _autori_autori_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./autori/autori.service */ "./src/app/admin/autori/autori.service.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_dateformat__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/dateformat */ "./src/app/core/dateformat.ts");
/* harmony import */ var _stores_stores_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./stores/stores.component */ "./src/app/admin/stores/stores.component.ts");
/* harmony import */ var _stores_deletestore_deletestore_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./stores/deletestore/deletestore.component */ "./src/app/admin/stores/deletestore/deletestore.component.ts");
/* harmony import */ var _stores_add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./stores/add-edit-store/add-edit-store.component */ "./src/app/admin/stores/add-edit-store/add-edit-store.component.ts");
/* harmony import */ var _stores_stores_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./stores/stores.service */ "./src/app/admin/stores/stores.service.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./books/books.component */ "./src/app/admin/books/books.component.ts");
/* harmony import */ var _books_deletebook_deletebook_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./books/deletebook/deletebook.component */ "./src/app/admin/books/deletebook/deletebook.component.ts");
/* harmony import */ var _books_add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./books/add-edit-book/add-edit-book.component */ "./src/app/admin/books/add-edit-book/add-edit-book.component.ts");





























var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_autori_autori_component__WEBPACK_IMPORTED_MODULE_4__["AutoriComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
                _genres_genres_component__WEBPACK_IMPORTED_MODULE_6__["GenresComponent"],
                _genres_deletegenre_deletegenre_component__WEBPACK_IMPORTED_MODULE_13__["DeletegenreComponent"],
                _genres_add_edit_genre_add_edit_genre_component__WEBPACK_IMPORTED_MODULE_15__["AddEditGenreComponent"],
                _autori_deleteautor_deleteautor_component__WEBPACK_IMPORTED_MODULE_16__["DeleteautorComponent"],
                _autori_add_edit_autor_add_edit_autor_component__WEBPACK_IMPORTED_MODULE_17__["AddEditAutorComponent"],
                _stores_stores_component__WEBPACK_IMPORTED_MODULE_22__["StoresComponent"],
                _stores_deletestore_deletestore_component__WEBPACK_IMPORTED_MODULE_23__["DeletestoreComponent"],
                _stores_add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_24__["AddEditStoreComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_26__["BooksComponent"],
                _books_deletebook_deletebook_component__WEBPACK_IMPORTED_MODULE_27__["DeletebookComponent"],
                _books_add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_28__["AddEditBookComponent"]],
            providers: [_shared_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"],
                _shared_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"],
                _genres_genres_service__WEBPACK_IMPORTED_MODULE_12__["GenresService"],
                _core_spinner_service__WEBPACK_IMPORTED_MODULE_14__["SpinnerService"],
                _autori_autori_service__WEBPACK_IMPORTED_MODULE_18__["AutoriService"],
                _stores_stores_service__WEBPACK_IMPORTED_MODULE_25__["StoresService"],
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_20__["DateAdapter"], useClass: _core_dateformat__WEBPACK_IMPORTED_MODULE_21__["AppDateAdapter"]
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_20__["MAT_DATE_FORMATS"], useValue: _core_dateformat__WEBPACK_IMPORTED_MODULE_21__["APP_DATE_FORMATS"]
                }],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["DemoMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_19__["PipesModule"]
            ],
            entryComponents: [_genres_deletegenre_deletegenre_component__WEBPACK_IMPORTED_MODULE_13__["DeletegenreComponent"],
                _genres_add_edit_genre_add_edit_genre_component__WEBPACK_IMPORTED_MODULE_15__["AddEditGenreComponent"],
                _autori_add_edit_autor_add_edit_autor_component__WEBPACK_IMPORTED_MODULE_17__["AddEditAutorComponent"],
                _autori_deleteautor_deleteautor_component__WEBPACK_IMPORTED_MODULE_16__["DeleteautorComponent"],
                _stores_deletestore_deletestore_component__WEBPACK_IMPORTED_MODULE_23__["DeletestoreComponent"],
                _stores_add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_24__["AddEditStoreComponent"],
                _books_deletebook_deletebook_component__WEBPACK_IMPORTED_MODULE_27__["DeletebookComponent"],
                _books_add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_28__["AddEditBookComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/autori/add-edit-autor/add-edit-autor.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/autori/add-edit-autor/add-edit-autor.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">\r\n    <span *ngIf=\"data.type=='add'\">\r\n        Adauga gen\r\n    </span>\r\n    <span *ngIf=\"data.type=='edit'\">\r\n        Editeaza\r\n    </span>\r\n</h1>\r\n<div mat-dialog-content class=\"example-container\" fxLayout=\"column\">\r\n    <div class=\"input-row\" *ngIf=\"data.type=='edit'\">\r\n        <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Id autor\" disabled [ngModel]=\"data.autor.authorId\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"input-row\">\r\n        <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Nume autor\" [(ngModel)]=\"data.autor.name\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"input-row\">\r\n        <mat-form-field fxFlex>\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Data nastere\" [(ngModel)]=\"data.autor.birthDay\" disabled mat-datepicker-toggle>\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"input-row\">\r\n        <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Loc nastere\" [(ngModel)]=\"data.autor.birthplace\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"input-row\">\r\n        <mat-form-field fxFlex>\r\n            <textarea matInput placeholder=\"Descriere\" rows=\"3\" [(ngModel)]=\"data.autor.description\"></textarea>\r\n        </mat-form-field>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <button mat-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial *ngIf=\"data.type=='add'\">\r\n        <mat-icon>add</mat-icon> Adauga\r\n    </button>\r\n    <button mat-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial *ngIf=\"data.type=='edit'\">\r\n        <mat-icon>save</mat-icon> Salveaza\r\n    </button>\r\n    <button mat-button color=\"warn\" (click)=\"onNoClick()\">\r\n        <mat-icon>close</mat-icon> Renunta\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/autori/add-edit-autor/add-edit-autor.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/autori/add-edit-autor/add-edit-autor.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2F1dG9yaS9hZGQtZWRpdC1hdXRvci9hZGQtZWRpdC1hdXRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/autori/add-edit-autor/add-edit-autor.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/autori/add-edit-autor/add-edit-autor.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddEditAutorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditAutorComponent", function() { return AddEditAutorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_author__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/author */ "./src/app/admin/models/author.ts");




var AddEditAutorComponent = /** @class */ (function () {
    function AddEditAutorComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddEditAutorComponent.prototype.ngOnInit = function () {
        if (this.data.autor == null || this.data.autor == undefined) {
            this.data.autor = new _models_author__WEBPACK_IMPORTED_MODULE_3__["Author"]();
        }
    };
    AddEditAutorComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddEditAutorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-autor',
            template: __webpack_require__(/*! ./add-edit-autor.component.html */ "./src/app/admin/autori/add-edit-autor/add-edit-autor.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-autor.component.scss */ "./src/app/admin/autori/add-edit-autor/add-edit-autor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AddEditAutorComponent);
    return AddEditAutorComponent;
}());



/***/ }),

/***/ "./src/app/admin/autori/autori.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/autori/autori.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div fxLayout=\"row\">\r\n    <mat-form-field fxFlex>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    <div fxFlex=\"2 2 calc(10em + 10px)\"></div>\r\n    <div fxFlex fxLayoutAlign=\"end center\">\r\n        <button mat-button color=\"accent\" (click)=\"AddAuthor()\">\r\n            <mat-icon>add</mat-icon> Adauga\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"authorId\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Id. </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.authorId}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"birthDay\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Data nastere </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.birthDay | date:'dd/MM/yyyy'}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"birthplace\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Loc nastere </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.birthplace}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"description\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Description </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.description | truncate : 12}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"end center\">\r\n                <button mat-button color=\"primary\" (click)=\"EditAuthor(element)\">Edit</button>\r\n                <button mat-button color=\"warn\" (click)=\"deleteAuthor(element)\">Delete</button>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n\r\n    </table>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/autori/autori.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/autori/autori.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-column-description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYXV0b3JpL0M6XFxVc2Vyc1xcYW5kcmVpLmZ1bmFydVxcRGVza3RvcFxcRmFjdWx0YXRlXFxEQVdcXExpYnJhcnlcXEJpYmxpb3RlY2FPbmxpbmVcXEJpYmxpb3RlY2FPbmxpbmUvc3JjXFxhcHBcXGFkbWluXFxhdXRvcmlcXGF1dG9yaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ25CLGlCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYXV0b3JpL2F1dG9yaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWF4LXdpZHRoOjEwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/autori/autori.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/autori/autori.component.ts ***!
  \**************************************************/
/*! exports provided: AutoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoriComponent", function() { return AutoriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/title.service */ "./src/app/admin/shared/title.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/spinner.service */ "./src/app/core/spinner.service.ts");
/* harmony import */ var _deleteautor_deleteautor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deleteautor/deleteautor.component */ "./src/app/admin/autori/deleteautor/deleteautor.component.ts");
/* harmony import */ var _add_edit_autor_add_edit_autor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-edit-autor/add-edit-autor.component */ "./src/app/admin/autori/add-edit-autor/add-edit-autor.component.ts");
/* harmony import */ var _autori_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./autori.service */ "./src/app/admin/autori/autori.service.ts");








var AutoriComponent = /** @class */ (function () {
    function AutoriComponent(titleService, dialog, snackBar, spinnerService, autoriService) {
        this.titleService = titleService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.spinnerService = spinnerService;
        this.autoriService = autoriService;
        this.titled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.autori = [];
        this.displayedColumns = ['authorId', 'name', 'birthDay', 'birthplace', 'description', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.autori);
    }
    AutoriComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    AutoriComponent.prototype.ngOnInit = function () {
        this.titleService.getTitle("Autori");
        this.getAutori();
    };
    AutoriComponent.prototype.getAutori = function () {
        var _this = this;
        this.autoriService.getAutori().subscribe(function (data) {
            _this.autori = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.autori);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    AutoriComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AutoriComponent.prototype.deleteAuthor = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_deleteautor_deleteautor_component__WEBPACK_IMPORTED_MODULE_5__["DeleteautorComponent"], {
            width: '250px',
            data: item
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result != undefined) {
                _this.spinnerService.spin$.next(true);
                _this.autoriService.deleteAuthor(item).subscribe(function (response) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("Genul a fost sters cu succes!", null, {
                        duration: 3000,
                        panelClass: "text-success"
                    });
                    _this.getAutori();
                }, function (error) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                        duration: 3000,
                        panelClass: "text-danger"
                    });
                });
            }
        });
    };
    AutoriComponent.prototype.AddAuthor = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_autor_add_edit_autor_component__WEBPACK_IMPORTED_MODULE_6__["AddEditAutorComponent"], {
            width: '400px',
            data: {
                type: "add",
                autor: this._addAuthor
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined && result != null) {
                _this.AddAuthorConfirm(result.autor);
            }
        });
    };
    AutoriComponent.prototype.AddAuthorConfirm = function (author) {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.autoriService.addAuthor(author).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Genul a fost adaugat cu succes!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.getAutori();
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    AutoriComponent.prototype.EditAuthor = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_autor_add_edit_autor_component__WEBPACK_IMPORTED_MODULE_6__["AddEditAutorComponent"], {
            width: '400px',
            data: {
                type: "edit",
                autor: Object.assign({}, item)
            },
            panelClass: "formFieldWidth"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.EditAuthorConfirm(result.autor);
        });
    };
    AutoriComponent.prototype.EditAuthorConfirm = function (author) {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.autoriService.editAuthor(author).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Genul a fost modificat cu succes!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.getAutori();
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutoriComponent.prototype, "titled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], AutoriComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AutoriComponent.prototype, "paginator", void 0);
    AutoriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-autori',
            template: __webpack_require__(/*! ./autori.component.html */ "./src/app/admin/autori/autori.component.html"),
            styles: [__webpack_require__(/*! ./autori.component.scss */ "./src/app/admin/autori/autori.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _autori_service__WEBPACK_IMPORTED_MODULE_7__["AutoriService"]])
    ], AutoriComponent);
    return AutoriComponent;
}());



/***/ }),

/***/ "./src/app/admin/autori/autori.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/autori/autori.service.ts ***!
  \************************************************/
/*! exports provided: AutoriService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoriService", function() { return AutoriService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AutoriService = /** @class */ (function () {
    function AutoriService(http) {
        this.http = http;
        this.baseUrl = "/api/Authors/";
    }
    AutoriService.prototype.getAutori = function () {
        return this.http.get(this.baseUrl);
    };
    AutoriService.prototype.deleteAuthor = function (author) {
        return this.http.delete(this.baseUrl + author.authorId);
    };
    AutoriService.prototype.addAuthor = function (author) {
        return this.http.post(this.baseUrl, author);
    };
    AutoriService.prototype.editAuthor = function (author) {
        return this.http.put(this.baseUrl + author.authorId, author);
    };
    AutoriService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AutoriService);
    return AutoriService;
}());



/***/ }),

/***/ "./src/app/admin/autori/deleteautor/deleteautor.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/autori/deleteautor/deleteautor.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">Sterge autor</h1>\r\n<div mat-dialog-content>\r\n    <p>Esti sigur ca vrei sa stergi autorul <b>{{data.name}}</b> cu id-ul <b>{{data.authorId}}</b>?</p>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <button mat-button color=\"warn\" [mat-dialog-close]=\"data\" cdkFocusInitial>\r\n        <mat-icon>delete</mat-icon> Da\r\n    </button>\r\n    <button mat-button color=\"primary\" (click)=\"onNoClick()\">\r\n        <mat-icon>close</mat-icon> Nu\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/autori/deleteautor/deleteautor.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/autori/deleteautor/deleteautor.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2F1dG9yaS9kZWxldGVhdXRvci9kZWxldGVhdXRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/autori/deleteautor/deleteautor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/autori/deleteautor/deleteautor.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeleteautorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteautorComponent", function() { return DeleteautorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/author */ "./src/app/admin/models/author.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var DeleteautorComponent = /** @class */ (function () {
    function DeleteautorComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteautorComponent.prototype.ngOnInit = function () {
    };
    DeleteautorComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteautorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deleteautor',
            template: __webpack_require__(/*! ./deleteautor.component.html */ "./src/app/admin/autori/deleteautor/deleteautor.component.html"),
            styles: [__webpack_require__(/*! ./deleteautor.component.scss */ "./src/app/admin/autori/deleteautor/deleteautor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _models_author__WEBPACK_IMPORTED_MODULE_2__["Author"]])
    ], DeleteautorComponent);
    return DeleteautorComponent;
}());



/***/ }),

/***/ "./src/app/admin/books/add-edit-book/add-edit-book.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/books/add-edit-book/add-edit-book.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">\r\n    <span *ngIf=\"data.type=='add'\">\r\n        Adauga carte\r\n    </span>\r\n    <span *ngIf=\"data.type=='edit'\">\r\n        Editeaza carte\r\n    </span>\r\n</h1>\r\n<div mat-dialog-content class=\"example-container\">\r\n    <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n        <div class=\"input-row\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n            <mat-form-field fxFlex *ngIf=\"data.type=='edit'\">\r\n                <input matInput placeholder=\"Id carte\" disabled [(ngModel)]=\"data.book.bookId\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex>\r\n                <input matInput placeholder=\"Titlu carte\" [(ngModel)]=\"data.book.title\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"input-row\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n            <mat-form-field fxFlex>\r\n                <input matInput placeholder=\"ISBN\" [(ngModel)]=\"data.book.isbn\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex>\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Data aparitie\" [(ngModel)]=\"data.book.year\" disabled mat-datepicker-toggle>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"input-row\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n            <mat-form-field fxFlex>\r\n                <input matInput placeholder=\"URL imagine\" [(ngModel)]=\"data.book.imageUrl\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex>\r\n                <input matInput placeholder=\"Editura\" [(ngModel)]=\"data.book.editura\">\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"input-row\" fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n            <mat-form-field fxFlex>\r\n                <input matInput placeholder=\"Limba\" [(ngModel)]=\"data.book.language\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex>\r\n                <input type=\"number\" matInput placeholder=\"Pret cumparare\" [(ngModel)]=\"data.book.buyPrice\">\r\n            </mat-form-field>\r\n            <mat-form-field fxFlex>\r\n                <input type=\"number\" matInput placeholder=\"Nr pagini\" [(ngModel)]=\"data.book.nrOfPages\">\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"input-row\">\r\n            <mat-form-field fxFlex>\r\n                <textarea rows=\"3\" matInput placeholder=\"Descriere\" [(ngModel)]=\"data.book.description\"></textarea>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"input-row\">\r\n            <mat-form-field class=\"example-chip-list\" fxFlex>\r\n                <mat-chip-list #chipListA>\r\n                    <mat-chip *ngFor=\"let autor of autoriSelected\"\r\n                              [selectable]=\"selectable\"\r\n                              [removable]=\"removable\"\r\n                              (removed)=\"removeAutor(autor)\">\r\n                        {{autor.name}}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input placeholder=\"Autori...\"\r\n                           #autorInput\r\n                           [formControl]=\"autorCtrl\"\r\n                           [matAutocomplete]=\"autoa\"\r\n                           [matChipInputFor]=\"chipListA\"\r\n                           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                           [matChipInputAddOnBlur]=\"addOnBlur\">\r\n                </mat-chip-list>\r\n                <mat-autocomplete #autoa=\"matAutocomplete\" (optionSelected)=\"selectedAutor($event)\">\r\n                    <mat-option *ngFor=\"let autor of data.autori\" [value]=\"autor\">\r\n                        {{autor.name}}\r\n                    </mat-option>\r\n                </mat-autocomplete>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"input-row\">\r\n            <mat-form-field class=\"example-chip-list\" fxFlex>\r\n                <mat-chip-list #chipListG>\r\n                    <mat-chip *ngFor=\"let genre of genresSelected\"\r\n                              [selectable]=\"selectable\"\r\n                              [removable]=\"removable\"\r\n                              (removed)=\"removeGenre(genre)\">\r\n                        {{genre.name}}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input placeholder=\"Genuri...\"\r\n                           #genreInput\r\n                           [formControl]=\"genreCtrl\"\r\n                           [matAutocomplete]=\"autog\"\r\n                           [matChipInputFor]=\"chipListG\"\r\n                           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                           [matChipInputAddOnBlur]=\"addOnBlur\">\r\n                </mat-chip-list>\r\n                <mat-autocomplete #autog=\"matAutocomplete\" (optionSelected)=\"selectedGenre($event)\">\r\n                    <mat-option *ngFor=\"let genre of data.genres\" [value]=\"genre\">\r\n                        {{genre.name}}\r\n                    </mat-option>\r\n                </mat-autocomplete>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"input-row\">\r\n            <mat-form-field class=\"example-chip-list\" fxFlex>\r\n                <mat-chip-list #chipListS>\r\n                    <mat-chip *ngFor=\"let store of storesSelected\"\r\n                              [selectable]=\"selectable\"\r\n                              [removable]=\"removable\"\r\n                              (removed)=\"removeStore(store)\">\r\n                        {{store.name}}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                    </mat-chip>\r\n                    <input placeholder=\"Biblioteci...\"\r\n                           #genreInput\r\n                           [formControl]=\"genreCtrl\"\r\n                           [matAutocomplete]=\"autos\"\r\n                           [matChipInputFor]=\"chipListS\"\r\n                           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                           [matChipInputAddOnBlur]=\"addOnBlur\">\r\n                </mat-chip-list>\r\n                <mat-autocomplete #autos=\"matAutocomplete\" (optionSelected)=\"selectedStore($event)\">\r\n                    <mat-option *ngFor=\"let store of data.stores\" [value]=\"store\">\r\n                        {{store.name}}\r\n                    </mat-option>\r\n                </mat-autocomplete>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div>\r\n            <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n                <ng-container matColumnDef=\"storeId\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Id. </mat-header-cell>\r\n                    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.storeId}} </mat-cell>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"store.name\">\r\n                    <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Nume </mat-header-cell>\r\n                    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.store.name}} </mat-cell>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"store.address\">\r\n                    <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Adresa </mat-header-cell>\r\n                    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.store.address}} </mat-cell>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"stock\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Stock. </mat-header-cell>\r\n                    <mat-cell mat-cell *matCellDef=\"let element\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input matInput placeholder=\"Stock\" [(ngModel)]=\"element.stock\">\r\n                        </mat-form-field>\r\n                    </mat-cell>\r\n                </ng-container>\r\n\r\n                <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n\r\n            </table>\r\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <button mat-button color=\"primary\" (click)=\"onYesClick()\" cdkFocusInitial *ngIf=\"data.type=='add'\">\r\n        <mat-icon>add</mat-icon> Adauga\r\n    </button>\r\n    <button mat-button color=\"primary\" (click)=\"onYesClick()\" cdkFocusInitial *ngIf=\"data.type=='edit'\">\r\n        <mat-icon>save</mat-icon> Salveaza\r\n    </button>\r\n    <button mat-button color=\"warn\" (click)=\"onNoClick()\">\r\n        <mat-icon>close</mat-icon> Renunta\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/books/add-edit-book/add-edit-book.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/books/add-edit-book/add-edit-book.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  overflow: auto; }\n\n.input-row {\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYm9va3MvYWRkLWVkaXQtYm9vay9DOlxcVXNlcnNcXGFuZHJlaS5mdW5hcnVcXERlc2t0b3BcXEZhY3VsdGF0ZVxcREFXXFxMaWJyYXJ5XFxCaWJsaW90ZWNhT25saW5lXFxCaWJsaW90ZWNhT25saW5lL3NyY1xcYXBwXFxhZG1pblxcYm9va3NcXGFkZC1lZGl0LWJvb2tcXGFkZC1lZGl0LWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsZUFBYSxFQUNoQjs7QUFFRDtFQUNJLG9CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Jvb2tzL2FkZC1lZGl0LWJvb2svYWRkLWVkaXQtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzphdXRvO1xyXG59XHJcblxyXG4uaW5wdXQtcm93e1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/books/add-edit-book/add-edit-book.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/books/add-edit-book/add-edit-book.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddEditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditBookComponent", function() { return AddEditBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/book */ "./src/app/admin/models/book.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddEditBookComponent = /** @class */ (function () {
    function AddEditBookComponent(dialogRef, data, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        this.genreCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.autorCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.displayedColumns = ['storeId', 'store.name', 'store.address', 'stock'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.bookStoresSelected);
    }
    AddEditBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data.book == null || this.data.book == undefined) {
            this.data.book = new _models_book__WEBPACK_IMPORTED_MODULE_2__["Book"]();
        }
        else {
            this.genresSelected = this.data.book.bookGenres == undefined ? [] : this.data.book.bookGenres.map(function (e) { return e.genre; });
            this.autoriSelected = this.data.book.bookAuthors == undefined ? [] : this.data.book.bookAuthors.map(function (e) { return e.author; });
            this.storesSelected = this.data.book.bookStores == undefined ? [] : this.data.book.bookStores.map(function (e) { return e.store; });
            this.bookStoresSelected = Object.assign([], this.data.book.bookStores);
            this.data.genres = this.genresSelected.length == 0 ? this.data.genres : this.data.genres.filter(function (e) { return !_this.genresSelected.find(function (z) { return z.genreId == e.genreId; }); });
            this.data.autori = this.data.autori.filter(function (e) { return !_this.autoriSelected.find(function (z) { return z.authorId == e.authorId; }); });
            this.data.stores = this.data.stores.filter(function (e) { return !_this.storesSelected.find(function (z) { return z.storeId == e.storeId; }); });
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.bookStoresSelected);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        }
    };
    AddEditBookComponent.prototype.removeGenre = function (genre) {
        var index = this.genresSelected.indexOf(genre);
        if (index >= 0) {
            this.genresSelected.splice(index, 1);
            this.data.genres.push(genre);
        }
    };
    AddEditBookComponent.prototype.selectedGenre = function (event) {
        this.genresSelected.push(event.option.value);
        this.genreInput.nativeElement.blur();
        var gid = this.data.genres.indexOf(event.option.value);
        this.data.genres.splice(gid, 1);
    };
    AddEditBookComponent.prototype.removeAutor = function (autor) {
        var index = this.autoriSelected.indexOf(autor);
        if (index >= 0) {
            this.autoriSelected.splice(index, 1);
            this.data.autori.push(autor);
        }
    };
    AddEditBookComponent.prototype.selectedAutor = function (event) {
        this.autoriSelected.push(event.option.value);
        this.autorInput.nativeElement.blur();
        var gid = this.data.autori.indexOf(event.option.value);
        this.data.autori.splice(gid, 1);
    };
    AddEditBookComponent.prototype.removeStore = function (store) {
        var index = this.storesSelected.indexOf(store);
        var index1 = this.bookStoresSelected.map(function (e) { return e.store; }).indexOf(store);
        if (index >= 0) {
            this.storesSelected.splice(index, 1);
            this.bookStoresSelected.splice(index1, 1);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.bookStoresSelected);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.data.stores.push(store);
        }
    };
    AddEditBookComponent.prototype.selectedStore = function (event) {
        this.storesSelected.push(event.option.value);
        this.bookStoresSelected.unshift({
            store: event.option.value,
            storeId: event.option.value.storeId,
            book: this.data.book,
            bookId: this.data.book.bookId,
            stock: 0
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.bookStoresSelected);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.autorInput.nativeElement.blur();
        var gid = this.data.stores.indexOf(event.option.value);
        this.data.stores.splice(gid, 1);
    };
    AddEditBookComponent.prototype.onYesClick = function () {
        var _this = this;
        if (this.bookStoresSelected.filter(function (e) { return e.stock <= 0; }).length > 0) {
            this.snackBar.open("Completeaza stocurile bibliotecilor!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
            return;
        }
        this.data.book.bookGenres = this.genresSelected.map(function (e) { return ({ bookId: _this.data.book.bookId, genreId: e.genreId, genre: e }); });
        this.data.book.bookAuthors = this.autoriSelected.map(function (e) { return ({ bookId: _this.data.book.bookId, authorId: e.authorId, author: e }); });
        this.data.book.bookStores = this.bookStoresSelected.map(function (e) { return ({ bookId: _this.data.book.bookId, storeId: e.storeId, stock: e.stock }); });
        this.dialogRef.close(this.data);
    };
    AddEditBookComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('genreInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddEditBookComponent.prototype, "genreInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autorInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddEditBookComponent.prototype, "autorInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"])
    ], AddEditBookComponent.prototype, "matAutocomplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], AddEditBookComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AddEditBookComponent.prototype, "paginator", void 0);
    AddEditBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-book',
            template: __webpack_require__(/*! ./add-edit-book.component.html */ "./src/app/admin/books/add-edit-book/add-edit-book.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-book.component.scss */ "./src/app/admin/books/add-edit-book/add-edit-book.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], AddEditBookComponent);
    return AddEditBookComponent;
}());



/***/ }),

/***/ "./src/app/admin/books/books.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/books/books.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div fxLayout=\"row\">\r\n    <mat-form-field fxFlex>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    <div fxFlex=\"2 2 calc(10em + 10px)\"></div>\r\n    <div fxFlex fxLayoutAlign=\"end center\">\r\n        <button mat-button color=\"accent\" (click)=\"AddBook()\">\r\n            <mat-icon>add</mat-icon> Adauga\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"imageUrl\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\">\r\n                <img [src]=\"element.imageUrl\" class=\"img-fluid img-thumbnail\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"bookId\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Id. </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.bookId}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"title\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Titlu </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.title}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"isbn\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> ISBN </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.isbn}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"year\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Data aparitie </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.year | date:'MMMM-yyyy'}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"editura\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Editura </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.editura}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"language\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Limba </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.language}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"nrOfPages\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Nr. pagini </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.nrOfPages | number}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"buyPrice\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Pret cumparare </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.buyPrice | number}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"end center\">\r\n                <button mat-button color=\"primary\" (click)=\"EditBook(element)\">Edit</button>\r\n                <button mat-button color=\"warn\" (click)=\"deleteBook(element)\">Delete</button>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n\r\n    </table>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/books/books.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/books/books.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.img-thumbnail {\n  max-height: 75px;\n  max-width: 75px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYm9va3MvQzpcXFVzZXJzXFxhbmRyZWkuZnVuYXJ1XFxEZXNrdG9wXFxGYWN1bHRhdGVcXERBV1xcTGlicmFyeVxcQmlibGlvdGVjYU9ubGluZVxcQmlibGlvdGVjYU9ubGluZS9zcmNcXGFwcFxcYWRtaW5cXGJvb2tzXFxib29rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGlCQUFlO0VBQ2YsZ0JBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW1nLXRodW1ibmFpbHtcclxuICAgIG1heC1oZWlnaHQ6NzVweDtcclxuICAgIG1heC13aWR0aDo3NXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/books/books.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/books/books.component.ts ***!
  \************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/title.service */ "./src/app/admin/shared/title.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/spinner.service */ "./src/app/core/spinner.service.ts");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/book */ "./src/app/admin/models/book.ts");
/* harmony import */ var _books_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books.service */ "./src/app/admin/books/books.service.ts");
/* harmony import */ var _deletebook_deletebook_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deletebook/deletebook.component */ "./src/app/admin/books/deletebook/deletebook.component.ts");
/* harmony import */ var _add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-edit-book/add-edit-book.component */ "./src/app/admin/books/add-edit-book/add-edit-book.component.ts");
/* harmony import */ var _autori_autori_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../autori/autori.service */ "./src/app/admin/autori/autori.service.ts");
/* harmony import */ var _genres_genres_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../genres/genres.service */ "./src/app/admin/genres/genres.service.ts");
/* harmony import */ var _stores_stores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../stores/stores.service */ "./src/app/admin/stores/stores.service.ts");












var BooksComponent = /** @class */ (function () {
    function BooksComponent(titleService, dialog, snackBar, spinnerService, booksService, autoriService, genresService, storesService) {
        this.titleService = titleService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.spinnerService = spinnerService;
        this.booksService = booksService;
        this.autoriService = autoriService;
        this.genresService = genresService;
        this.storesService = storesService;
        this.titled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.books = [];
        this.displayedColumns = ['imageUrl', 'bookId', 'title', 'isbn', 'year', 'editura', 'language', 'nrOfPages', 'buyPrice', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.books);
    }
    BooksComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    BooksComponent.prototype.ngOnInit = function () {
        this.titleService.getTitle("Books");
        this.getBooks();
        this.getAutori();
        this.getGenres();
        this.getStores();
    };
    BooksComponent.prototype.getStores = function () {
        var _this = this;
        this.storesService.getStores().subscribe(function (data) { return _this.stores = data; });
    };
    BooksComponent.prototype.getAutori = function () {
        var _this = this;
        this.autoriService.getAutori().subscribe(function (data) { return _this.autori = data; });
    };
    BooksComponent.prototype.getGenres = function () {
        var _this = this;
        this.genresService.getGenres().subscribe(function (data) { return _this.genres = data; });
    };
    BooksComponent.prototype.getBooks = function () {
        var _this = this;
        this.booksService.getBooks().subscribe(function (data) {
            _this.books = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.books);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    BooksComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    BooksComponent.prototype.deleteBook = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_deletebook_deletebook_component__WEBPACK_IMPORTED_MODULE_7__["DeletebookComponent"], {
            width: '250px',
            data: item
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result != undefined) {
                _this.spinnerService.spin$.next(true);
                _this.booksService.deleteBook(item).subscribe(function (response) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("Genul a fost sters cu succes!", null, {
                        duration: 3000,
                        panelClass: "text-success"
                    });
                    _this.getBooks();
                }, function (error) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                        duration: 3000,
                        panelClass: "text-danger"
                    });
                });
            }
        });
    };
    BooksComponent.prototype.AddBook = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_8__["AddEditBookComponent"], {
            width: '1200px',
            data: {
                type: "add",
                book: new _models_book__WEBPACK_IMPORTED_MODULE_5__["Book"](),
                genres: Object.assign([], this.genres == undefined ? [] : this.genres),
                autori: Object.assign([], this.autori == undefined ? [] : this.autori),
                stores: Object.assign([], this.stores == undefined ? [] : this.stores)
            },
            panelClass: "formFieldWidth"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.AddBookConfirm(result.book);
            console.log(_this.autori);
            console.log(_this.genres);
        });
    };
    BooksComponent.prototype.AddBookConfirm = function (book) {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.booksService.addBook(book).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Genul a fost adaugat cu succes!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.getBooks();
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    BooksComponent.prototype.EditBook = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_book_add_edit_book_component__WEBPACK_IMPORTED_MODULE_8__["AddEditBookComponent"], {
            width: '1200px',
            data: {
                type: "edit",
                book: Object.assign({}, item),
                genres: Object.assign([], this.genres == undefined ? [] : this.genres),
                autori: Object.assign([], this.autori == undefined ? [] : this.autori),
                stores: Object.assign([], this.stores == undefined ? [] : this.stores)
            },
            panelClass: "formFieldWidth"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                _this.EditBookConfirm(result.book);
            }
        });
    };
    BooksComponent.prototype.EditBookConfirm = function (book) {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.booksService.editBook(book).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Cartea a fost modificata cu succes!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.getBooks();
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BooksComponent.prototype, "titled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], BooksComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], BooksComponent.prototype, "paginator", void 0);
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/admin/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.scss */ "./src/app/admin/books/books.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"],
            _books_service__WEBPACK_IMPORTED_MODULE_6__["BooksService"],
            _autori_autori_service__WEBPACK_IMPORTED_MODULE_9__["AutoriService"],
            _genres_genres_service__WEBPACK_IMPORTED_MODULE_10__["GenresService"],
            _stores_stores_service__WEBPACK_IMPORTED_MODULE_11__["StoresService"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/admin/books/books.service.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/books/books.service.ts ***!
  \**********************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BooksService = /** @class */ (function () {
    function BooksService(http) {
        this.http = http;
        this.baseUrl = "/api/Books/";
    }
    BooksService.prototype.getBooks = function () {
        return this.http.get(this.baseUrl);
    };
    BooksService.prototype.deleteBook = function (book) {
        return this.http.delete(this.baseUrl + book.bookId);
    };
    BooksService.prototype.addBook = function (book) {
        return this.http.post(this.baseUrl, book);
    };
    BooksService.prototype.editBook = function (book) {
        return this.http.put(this.baseUrl + book.bookId, book);
    };
    BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/admin/books/deletebook/deletebook.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/books/deletebook/deletebook.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">Sterge carte</h1>\r\n<div mat-dialog-content>\r\n    <p>Esti sigur ca vrei sa stergi autorul <b>{{data.title}}</b> cu id-ul <b>{{data.bookId}}</b>?</p>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <button mat-button color=\"warn\" [mat-dialog-close]=\"data\" cdkFocusInitial>\r\n        <mat-icon>delete</mat-icon> Da\r\n    </button>\r\n    <button mat-button color=\"primary\" (click)=\"onNoClick()\">\r\n        <mat-icon>close</mat-icon> Nu\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/books/deletebook/deletebook.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/books/deletebook/deletebook.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Jvb2tzL2RlbGV0ZWJvb2svZGVsZXRlYm9vay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/books/deletebook/deletebook.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/books/deletebook/deletebook.component.ts ***!
  \****************************************************************/
/*! exports provided: DeletebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletebookComponent", function() { return DeletebookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/book */ "./src/app/admin/models/book.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var DeletebookComponent = /** @class */ (function () {
    function DeletebookComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeletebookComponent.prototype.ngOnInit = function () {
    };
    DeletebookComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeletebookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deletebook',
            template: __webpack_require__(/*! ./deletebook.component.html */ "./src/app/admin/books/deletebook/deletebook.component.html"),
            styles: [__webpack_require__(/*! ./deletebook.component.scss */ "./src/app/admin/books/deletebook/deletebook.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _models_book__WEBPACK_IMPORTED_MODULE_2__["Book"]])
    ], DeletebookComponent);
    return DeletebookComponent;
}());



/***/ }),

/***/ "./src/app/admin/genres/add-edit-genre/add-edit-genre.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/genres/add-edit-genre/add-edit-genre.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">\r\n    <span *ngIf=\"data.type=='add'\">\r\n        Adauga gen\r\n    </span>\r\n    <span *ngIf=\"data.type=='edit'\">\r\n        Editeaza gen\r\n    </span>\r\n</h1>\r\n<div mat-dialog-content class=\"example-container\" fxLayout=\"column\">\r\n    <div class=\"input-row\" *ngIf=\"data.type=='edit'\">\r\n        <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Id gen\" disabled [ngModel]=\"data.genre.genreId\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"input-row\">\r\n        <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Nume gen\" [(ngModel)]=\"data.genre.name\">\r\n        </mat-form-field>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <button mat-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial *ngIf=\"data.type=='add'\">\r\n        <mat-icon>add</mat-icon> Adauga\r\n    </button>\r\n    <button mat-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial *ngIf=\"data.type=='edit'\">\r\n        <mat-icon>save</mat-icon> Salveaza\r\n    </button>\r\n    <button mat-button color=\"warn\" (click)=\"onNoClick()\">\r\n        <mat-icon>close</mat-icon> Renunta\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/genres/add-edit-genre/add-edit-genre.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/genres/add-edit-genre/add-edit-genre.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.example-container  * {\r\n    width: 100% !important;\r\n}\r\n\r\n.mat-form-field-wrapper{\r\n    width: 100%;\r\n}\r\n.mat-form-field>*{\r\n    width: 100%!important;\r\n}\r\n\r\n.formFieldWidth .mat-form-field-wrapper {\r\n    width: 100%;\r\n}\r\n\r\n.formFieldWidth .mat-form-field-wrapper {\r\n    width: 100%;\r\n}\r\n\r\n.formFieldWidth .mat-form-field-flex {\r\n    width: 100%;\r\n}*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZ2VucmVzL2FkZC1lZGl0LWdlbnJlL0M6XFxVc2Vyc1xcYW5kcmVpLmZ1bmFydVxcRGVza3RvcFxcRmFjdWx0YXRlXFxEQVdcXExpYnJhcnlcXEJpYmxpb3RlY2FPbmxpbmVcXEJpYmxpb3RlY2FPbmxpbmUvc3JjXFxhcHBcXGFkbWluXFxnZW5yZXNcXGFkZC1lZGl0LWdlbnJlXFxhZGQtZWRpdC1nZW5yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZ2VucmVzL2FkZC1lZGl0LWdlbnJlL2FkZC1lZGl0LWdlbnJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouZXhhbXBsZS1jb250YWluZXIgICoge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQ+KntcclxuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm1GaWVsZFdpZHRoIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybUZpZWxkV2lkdGggLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtRmllbGRXaWR0aCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSovIl19 */"

/***/ }),

/***/ "./src/app/admin/genres/add-edit-genre/add-edit-genre.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/genres/add-edit-genre/add-edit-genre.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddEditGenreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditGenreComponent", function() { return AddEditGenreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_genre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/genre */ "./src/app/admin/models/genre.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var AddEditGenreComponent = /** @class */ (function () {
    function AddEditGenreComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.nameModal = "";
    }
    AddEditGenreComponent.prototype.ngOnInit = function () {
        if (this.data.genre == null || this.data.genre == undefined) {
            this.data.genre = new _models_genre__WEBPACK_IMPORTED_MODULE_2__["Genre"]();
        }
    };
    AddEditGenreComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddEditGenreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-genre',
            template: __webpack_require__(/*! ./add-edit-genre.component.html */ "./src/app/admin/genres/add-edit-genre/add-edit-genre.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-genre.component.scss */ "./src/app/admin/genres/add-edit-genre/add-edit-genre.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], AddEditGenreComponent);
    return AddEditGenreComponent;
}());



/***/ }),

/***/ "./src/app/admin/genres/deletegenre/deletegenre.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/genres/deletegenre/deletegenre.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">Sterge gen</h1>\r\n<div mat-dialog-content>\r\n    <p>Esti sigur ca vrei sa stergi genul <b>{{data.name}}</b>?</p>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <button mat-button color=\"warn\" [mat-dialog-close]=\"data\" cdkFocusInitial>\r\n        <mat-icon>delete</mat-icon> Da\r\n    </button>\r\n    <button mat-button  color=\"primary\" (click)=\"onNoClick()\" >\r\n        <mat-icon>close</mat-icon> Nu\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/genres/deletegenre/deletegenre.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/genres/deletegenre/deletegenre.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2dlbnJlcy9kZWxldGVnZW5yZS9kZWxldGVnZW5yZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/genres/deletegenre/deletegenre.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/genres/deletegenre/deletegenre.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeletegenreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletegenreComponent", function() { return DeletegenreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_genre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/genre */ "./src/app/admin/models/genre.ts");




var DeletegenreComponent = /** @class */ (function () {
    function DeletegenreComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeletegenreComponent.prototype.ngOnInit = function () {
    };
    DeletegenreComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeletegenreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deletegenre',
            template: __webpack_require__(/*! ./deletegenre.component.html */ "./src/app/admin/genres/deletegenre/deletegenre.component.html"),
            styles: [__webpack_require__(/*! ./deletegenre.component.scss */ "./src/app/admin/genres/deletegenre/deletegenre.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _models_genre__WEBPACK_IMPORTED_MODULE_3__["Genre"]])
    ], DeletegenreComponent);
    return DeletegenreComponent;
}());



/***/ }),

/***/ "./src/app/admin/genres/genres.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/genres/genres.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div fxLayout=\"row\">\r\n    <mat-form-field fxFlex>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    <div fxFlex=\"2 2 calc(10em + 10px)\"></div>\r\n    <div fxFlex fxLayoutAlign=\"end center\">\r\n        <button mat-button color=\"accent\" (click)=\"AddGenre()\">\r\n            <mat-icon>add</mat-icon> Adauga\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"genreId\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Id. </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.genreId}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"end center\">\r\n                <button mat-button color=\"primary\" (click)=\"EditGenre(element)\">Edit</button>\r\n                <button mat-button color=\"warn\" (click)=\"deleteGenre(element)\">Delete</button>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n\r\n    </table>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/genres/genres.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/genres/genres.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZ2VucmVzL0M6XFxVc2Vyc1xcYW5kcmVpLmZ1bmFydVxcRGVza3RvcFxcRmFjdWx0YXRlXFxEQVdcXExpYnJhcnlcXEJpYmxpb3RlY2FPbmxpbmVcXEJpYmxpb3RlY2FPbmxpbmUvc3JjXFxhcHBcXGFkbWluXFxnZW5yZXNcXGdlbnJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2dlbnJlcy9nZW5yZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/genres/genres.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/genres/genres.component.ts ***!
  \**************************************************/
/*! exports provided: GenresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresComponent", function() { return GenresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/title.service */ "./src/app/admin/shared/title.service.ts");
/* harmony import */ var _genres_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genres.service */ "./src/app/admin/genres/genres.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _deletegenre_deletegenre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deletegenre/deletegenre.component */ "./src/app/admin/genres/deletegenre/deletegenre.component.ts");
/* harmony import */ var src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/spinner.service */ "./src/app/core/spinner.service.ts");
/* harmony import */ var _add_edit_genre_add_edit_genre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-edit-genre/add-edit-genre.component */ "./src/app/admin/genres/add-edit-genre/add-edit-genre.component.ts");








var GenresComponent = /** @class */ (function () {
    function GenresComponent(titleService, genresService, dialog, snackBar, spinnerService) {
        this.titleService = titleService;
        this.genresService = genresService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.spinnerService = spinnerService;
        this.titled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.genres = [];
        this.displayedColumns = ['genreId', 'name', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.genres);
    }
    GenresComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    GenresComponent.prototype.ngOnInit = function () {
        this.titleService.getTitle("Genuri");
        this.getGenres();
    };
    GenresComponent.prototype.getGenres = function () {
        var _this = this;
        this.genresService.getGenres().subscribe(function (data) {
            _this.genres = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.genres);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    GenresComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    GenresComponent.prototype.deleteGenre = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_deletegenre_deletegenre_component__WEBPACK_IMPORTED_MODULE_5__["DeletegenreComponent"], {
            width: '250px',
            data: item
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result != undefined) {
                _this.spinnerService.spin$.next(true);
                _this.genresService.deleteGenre(item).subscribe(function (response) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("Genul a fost sters cu succes!", null, {
                        duration: 3000,
                        panelClass: "text-success"
                    });
                    _this.getGenres();
                }, function (error) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                        duration: 3000,
                        panelClass: "text-danger"
                    });
                });
            }
        });
    };
    GenresComponent.prototype.AddGenre = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_genre_add_edit_genre_component__WEBPACK_IMPORTED_MODULE_7__["AddEditGenreComponent"], {
            width: '350px',
            data: {
                type: "add",
                genre: this._addGenre
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined && result != null) {
                _this.AddGenreConfirm(result.genre);
            }
        });
    };
    GenresComponent.prototype.AddGenreConfirm = function (genre) {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.genresService.addGenre(genre).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Genul a fost adaugat cu succes!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.getGenres();
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    GenresComponent.prototype.EditGenre = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_genre_add_edit_genre_component__WEBPACK_IMPORTED_MODULE_7__["AddEditGenreComponent"], {
            width: '350px',
            data: {
                type: "edit",
                genre: Object.assign({}, item)
            },
            panelClass: "formFieldWidth"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.EditGenreConfirm(result.genre);
        });
    };
    GenresComponent.prototype.EditGenreConfirm = function (genre) {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.genresService.editGenre(genre).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Genul a fost modificat cu succes!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.getGenres();
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenresComponent.prototype, "titled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], GenresComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], GenresComponent.prototype, "paginator", void 0);
    GenresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-genres',
            template: __webpack_require__(/*! ./genres.component.html */ "./src/app/admin/genres/genres.component.html"),
            styles: [__webpack_require__(/*! ./genres.component.scss */ "./src/app/admin/genres/genres.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"],
            _genres_service__WEBPACK_IMPORTED_MODULE_3__["GenresService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_6__["SpinnerService"]])
    ], GenresComponent);
    return GenresComponent;
}());



/***/ }),

/***/ "./src/app/admin/genres/genres.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/genres/genres.service.ts ***!
  \************************************************/
/*! exports provided: GenresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresService", function() { return GenresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GenresService = /** @class */ (function () {
    function GenresService(http) {
        this.http = http;
        this.baseUrl = "/api/Genres/";
    }
    GenresService.prototype.getGenres = function () {
        return this.http.get(this.baseUrl);
    };
    GenresService.prototype.deleteGenre = function (genre) {
        return this.http.delete(this.baseUrl + genre.genreId);
    };
    GenresService.prototype.addGenre = function (genre) {
        return this.http.post(this.baseUrl, genre);
    };
    GenresService.prototype.editGenre = function (genre) {
        return this.http.put(this.baseUrl + genre.genreId, genre);
    };
    GenresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GenresService);
    return GenresService;
}());



/***/ }),

/***/ "./src/app/admin/index/index.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/index/index.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div gdAreas=\"menu content\"\r\n     gdGap=\"16px\"\r\n     gdColumns=\"10rem auto\">\r\n    <div gdArea=\"menu\">\r\n        <button [routerLink]=\"['./autori']\">\r\n            autori\r\n        </button>\r\n        <button [routerLink]=\"['./genres']\">\r\n            genuri\r\n        </button>\r\n    </div>\r\n    <div gdArea=\"content\">\r\n        <router-outlet>\r\n        </router-outlet>\r\n    </div>\r\n</div>-->\r\n\r\n\r\n<mat-sidenav-container class=\"app-sidenav-container\">\r\n    <mat-sidenav #sidenav class=\"app-sidenav mat-elevation-z10\" [mode]=\"mode.value\" [opened]=\"opened\">\r\n        <mat-toolbar (click)=\"sidenav.toggle()\">\r\n            Library Admin\r\n        </mat-toolbar>\r\n        <mat-nav-list>\r\n            <a mat-list-item [routerLink]=\"['./autori']\" (click)=\"sidenav.toggle()\">\r\n                <i class=\"fas fa-users mr-2\"></i>Autori\r\n            </a>\r\n            <a mat-list-item [routerLink]=\"['./genres']\" (click)=\"sidenav.toggle()\">\r\n                <i class=\"fas fa-book mr-2\"></i>Genuri\r\n            </a>\r\n            <a mat-list-item [routerLink]=\"['./stores']\" (click)=\"sidenav.toggle()\">\r\n                <i class=\"fas fa-building mr-2\"></i>Biblioteci\r\n            </a>\r\n            <a mat-list-item [routerLink]=\"['./books']\" (click)=\"sidenav.toggle()\">\r\n                <i class=\"fas fa-book mr-2\"></i>Carti\r\n            </a>\r\n\r\n            <a mat-list-item href=\"/Identity/Account/Logout\" (click)=\"sidenav.toggle()\">\r\n                <i class=\"fas fa-power-off mr-1\"></i>Delogare\r\n            </a>\r\n        </mat-nav-list>\r\n\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content fxLayout=\"column wrap\" fxLayoutGap=\"10px\">\r\n\r\n        <mat-toolbar>\r\n            <mat-toolbar-row>\r\n                <button mat-icon-button class=\"mr-3\" (click)=\"sidenav.toggle()\">\r\n                    <mat-icon *ngIf=\"!sidenav.opened\">menu</mat-icon>\r\n                    <mat-icon *ngIf=\"sidenav.opened\">clear</mat-icon>\r\n                </button>\r\n                <span>{{pageTitle}}</span>\r\n            </mat-toolbar-row>\r\n        </mat-toolbar>\r\n\r\n\r\n        <div class=\"container-fluid\">\r\n            <router-outlet>\r\n            </router-outlet>\r\n        </div>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/index/index.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/index/index.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px; }\n\n.mat-list-item {\n  width: 200px; }\n\n.app-sidenav-container {\n  flex: 1;\n  position: fixed;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  min-height: 100%; }\n\n.app-sidenav-content {\n  display: flex;\n  height: 100%;\n  flex-direction: column; }\n\n.app-sidenav {\n  width: 240px; }\n\n.wrapper {\n  margin: 50px; }\n\nbody .mat-card-header-text {\n  margin: 0 !important; }\n\nbody .mat-card-header > * {\n  margin: 0 !important; }\n\n.example-card {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaW5kZXgvQzpcXFVzZXJzXFxhbmRyZWkuZnVuYXJ1XFxEZXNrdG9wXFxGYWN1bHRhdGVcXERBV1xcTGlicmFyeVxcQmlibGlvdGVjYU9ubGluZVxcQmlibGlvdGVjYU9ubGluZS9zcmNcXGFwcFxcYWRtaW5cXGluZGV4XFxpbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sVUFBUztFQUNULFFBQU87RUFDUCxTQUFRLEVBQ1g7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksYUFBVyxFQUNkOztBQUVEO0VBQ0ksUUFBTztFQUNQLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixhQUFZO0VBQ1osdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUdEO0VBQ0kscUJBQW9CLEVBQ3ZCOztBQUNEO0VBQ0kscUJBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksb0JBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbXtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG59XHJcblxyXG4uYXBwLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hcHAtc2lkZW5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYXBwLXNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDUwcHg7XHJcbn1cclxuXHJcblxyXG5ib2R5IC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxufVxyXG5ib2R5IC5tYXQtY2FyZC1oZWFkZXI+KntcclxuICAgIG1hcmdpbjowICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNhcmR7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/title.service */ "./src/app/admin/shared/title.service.ts");




var IndexComponent = /** @class */ (function () {
    function IndexComponent(titleService) {
        var _this = this;
        this.titleService = titleService;
        this.pageTitle = "";
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('side');
        this.opened = true;
        titleService.title$.subscribe(function (tit) {
            _this.pageTitle = tit;
        });
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/admin/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/admin/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_title_service__WEBPACK_IMPORTED_MODULE_3__["TitleService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/admin/models/author.ts":
/*!****************************************!*\
  !*** ./src/app/admin/models/author.ts ***!
  \****************************************/
/*! exports provided: Author */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
var Author = /** @class */ (function () {
    function Author() {
    }
    return Author;
}());



/***/ }),

/***/ "./src/app/admin/models/book.ts":
/*!**************************************!*\
  !*** ./src/app/admin/models/book.ts ***!
  \**************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/admin/models/genre.ts":
/*!***************************************!*\
  !*** ./src/app/admin/models/genre.ts ***!
  \***************************************/
/*! exports provided: Genre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genre", function() { return Genre; });
var Genre = /** @class */ (function () {
    function Genre() {
    }
    return Genre;
}());



/***/ }),

/***/ "./src/app/admin/models/store.ts":
/*!***************************************!*\
  !*** ./src/app/admin/models/store.ts ***!
  \***************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
var Store = /** @class */ (function () {
    function Store() {
    }
    return Store;
}());



/***/ }),

/***/ "./src/app/admin/shared/data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/shared/data.service.ts ***!
  \**********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/admin/shared/title.service.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/shared/title.service.ts ***!
  \***********************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var TitleService = /** @class */ (function () {
    function TitleService() {
        this.titleSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.title$ = this.titleSource.asObservable();
    }
    TitleService.prototype.getTitle = function (title) {
        this.titleSource.next(title);
    };
    TitleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "./src/app/admin/stores/add-edit-store/add-edit-store.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/stores/add-edit-store/add-edit-store.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">\r\n    <span *ngIf=\"data.type=='add'\">\r\n        Adauga biblioteca\r\n    </span>\r\n    <span *ngIf=\"data.type=='edit'\">\r\n        Editeaza biblioteca\r\n    </span>\r\n</h1>\r\n<div mat-dialog-content class=\"example-container\" fxLayout=\"column\">\r\n    <div class=\"input-row\" *ngIf=\"data.type=='edit'\">\r\n        <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Id biblioteca\" disabled [ngModel]=\"data.store.storeId\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"input-row\">\r\n        <mat-form-field fxFlex>\r\n            <input matInput placeholder=\"Nume biblioteca\" [(ngModel)]=\"data.store.name\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"input-row\">\r\n        <mat-form-field fxFlex>\r\n            <textarea matInput placeholder=\"Adresa\" rows=\"3\" [(ngModel)]=\"data.store.address\"></textarea>\r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"input-row\">\r\n        <mat-form-field fxFlex>\r\n            <textarea matInput placeholder=\"Program\" rows=\"3\" [(ngModel)]=\"data.store.program\"></textarea>\r\n        </mat-form-field>\r\n    </div>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <button mat-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial *ngIf=\"data.type=='add'\">\r\n        <mat-icon>add</mat-icon> Adauga\r\n    </button>\r\n    <button mat-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial *ngIf=\"data.type=='edit'\">\r\n        <mat-icon>save</mat-icon> Salveaza\r\n    </button>\r\n    <button mat-button color=\"warn\" (click)=\"onNoClick()\">\r\n        <mat-icon>close</mat-icon> Renunta\r\n    </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/stores/add-edit-store/add-edit-store.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/admin/stores/add-edit-store/add-edit-store.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0b3Jlcy9hZGQtZWRpdC1zdG9yZS9hZGQtZWRpdC1zdG9yZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/stores/add-edit-store/add-edit-store.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/stores/add-edit-store/add-edit-store.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddEditStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditStoreComponent", function() { return AddEditStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/store */ "./src/app/admin/models/store.ts");




var AddEditStoreComponent = /** @class */ (function () {
    function AddEditStoreComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    AddEditStoreComponent.prototype.ngOnInit = function () {
        if (this.data.store == null || this.data.store == undefined) {
            this.data.store = new _models_store__WEBPACK_IMPORTED_MODULE_3__["Store"]();
        }
    };
    AddEditStoreComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddEditStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-edit-store',
            template: __webpack_require__(/*! ./add-edit-store.component.html */ "./src/app/admin/stores/add-edit-store/add-edit-store.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-store.component.scss */ "./src/app/admin/stores/add-edit-store/add-edit-store.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AddEditStoreComponent);
    return AddEditStoreComponent;
}());



/***/ }),

/***/ "./src/app/admin/stores/deletestore/deletestore.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/stores/deletestore/deletestore.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title fxLayoutAlign=\"center center\">Sterge biblioteca</h1>\r\n<div mat-dialog-content>\r\n    <p>Esti sigur ca vrei sa stergi biblioteca <b>{{data.name}}</b> cu id-ul <b>{{data.storeId}}</b>?</p>\r\n</div>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n    <button mat-button color=\"warn\" [mat-dialog-close]=\"data\" cdkFocusInitial>\r\n        <mat-icon>delete</mat-icon> Da\r\n    </button>\r\n    <button mat-button color=\"primary\" (click)=\"onNoClick()\">\r\n        <mat-icon>close</mat-icon> Nu\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/stores/deletestore/deletestore.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/stores/deletestore/deletestore.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0b3Jlcy9kZWxldGVzdG9yZS9kZWxldGVzdG9yZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/stores/deletestore/deletestore.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/stores/deletestore/deletestore.component.ts ***!
  \*******************************************************************/
/*! exports provided: DeletestoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletestoreComponent", function() { return DeletestoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/store */ "./src/app/admin/models/store.ts");




var DeletestoreComponent = /** @class */ (function () {
    function DeletestoreComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeletestoreComponent.prototype.ngOnInit = function () {
    };
    DeletestoreComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeletestoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deletestore',
            template: __webpack_require__(/*! ./deletestore.component.html */ "./src/app/admin/stores/deletestore/deletestore.component.html"),
            styles: [__webpack_require__(/*! ./deletestore.component.scss */ "./src/app/admin/stores/deletestore/deletestore.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _models_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], DeletestoreComponent);
    return DeletestoreComponent;
}());



/***/ }),

/***/ "./src/app/admin/stores/stores.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/stores/stores.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div fxLayout=\"row\">\r\n    <mat-form-field fxFlex>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    <div fxFlex=\"2 2 calc(10em + 10px)\"></div>\r\n    <div fxFlex fxLayoutAlign=\"end center\">\r\n        <button mat-button color=\"accent\" (click)=\"AddStore()\">\r\n            <mat-icon>add</mat-icon> Adauga\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"storeId\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Id. </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.storeId}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"address\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Adresa </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.address}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"program\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef mat-sort-header> Program </mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\"> {{element.program}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n            <mat-cell mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"end center\">\r\n                <button mat-button color=\"primary\" (click)=\"EditStore(element)\">Edit</button>\r\n                <button mat-button color=\"warn\" (click)=\"deleteStore(element)\">Delete</button>\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n\r\n    </table>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30]\" showFirstLastButtons></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/stores/stores.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/stores/stores.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vc3RvcmVzL0M6XFxVc2Vyc1xcYW5kcmVpLmZ1bmFydVxcRGVza3RvcFxcRmFjdWx0YXRlXFxEQVdcXExpYnJhcnlcXEJpYmxpb3RlY2FPbmxpbmVcXEJpYmxpb3RlY2FPbmxpbmUvc3JjXFxhcHBcXGFkbWluXFxzdG9yZXNcXHN0b3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3N0b3Jlcy9zdG9yZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/stores/stores.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/stores/stores.component.ts ***!
  \**************************************************/
/*! exports provided: StoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/title.service */ "./src/app/admin/shared/title.service.ts");
/* harmony import */ var _stores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores.service */ "./src/app/admin/stores/stores.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/spinner.service */ "./src/app/core/spinner.service.ts");
/* harmony import */ var _deletestore_deletestore_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deletestore/deletestore.component */ "./src/app/admin/stores/deletestore/deletestore.component.ts");
/* harmony import */ var _add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-edit-store/add-edit-store.component */ "./src/app/admin/stores/add-edit-store/add-edit-store.component.ts");








var StoresComponent = /** @class */ (function () {
    function StoresComponent(titleService, storesService, dialog, snackBar, spinnerService) {
        this.titleService = titleService;
        this.storesService = storesService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.spinnerService = spinnerService;
        this.titled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stores = [];
        this.displayedColumns = ['storeId', 'name', 'address', 'program', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.stores);
    }
    StoresComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    StoresComponent.prototype.ngOnInit = function () {
        this.titleService.getTitle("Biblioteci");
        this.getStores();
    };
    StoresComponent.prototype.getStores = function () {
        var _this = this;
        this.storesService.getStores().subscribe(function (data) {
            _this.stores = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.stores);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    StoresComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    StoresComponent.prototype.deleteStore = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_deletestore_deletestore_component__WEBPACK_IMPORTED_MODULE_6__["DeletestoreComponent"], {
            width: '250px',
            data: item
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result != undefined) {
                _this.spinnerService.spin$.next(true);
                _this.storesService.deleteStore(item).subscribe(function (response) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("Biblioteca a fost stearsa cu succes!", null, {
                        duration: 3000,
                        panelClass: "text-success"
                    });
                    _this.getStores();
                }, function (error) {
                    _this.spinnerService.spin$.next(false);
                    _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                        duration: 3000,
                        panelClass: "text-danger"
                    });
                });
            }
        });
    };
    StoresComponent.prototype.AddStore = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_7__["AddEditStoreComponent"], {
            width: '350px',
            data: {
                type: "add",
                store: this._addStore
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined && result != null) {
                _this.AddStoreConfirm(result.store);
            }
        });
    };
    StoresComponent.prototype.AddStoreConfirm = function (store) {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.storesService.addStore(store).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Biblioteca a fost adaugata cu succes!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.getStores();
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    StoresComponent.prototype.EditStore = function (item) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_store_add_edit_store_component__WEBPACK_IMPORTED_MODULE_7__["AddEditStoreComponent"], {
            width: '350px',
            data: {
                type: "edit",
                store: Object.assign({}, item)
            },
            panelClass: "formFieldWidth"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.EditStoreConfirm(result.store);
        });
    };
    StoresComponent.prototype.EditStoreConfirm = function (store) {
        var _this = this;
        this.spinnerService.spin$.next(true);
        this.storesService.editStore(store).subscribe(function (response) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("Biblioteca a fost modificata cu succes!", null, {
                duration: 3000,
                panelClass: "text-success"
            });
            _this.getStores();
        }, function (error) {
            _this.spinnerService.spin$.next(false);
            _this.snackBar.open("A aparut o eroare, incearca din nou!", "", {
                duration: 3000,
                panelClass: "text-danger"
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StoresComponent.prototype, "titled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], StoresComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], StoresComponent.prototype, "paginator", void 0);
    StoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stores',
            template: __webpack_require__(/*! ./stores.component.html */ "./src/app/admin/stores/stores.component.html"),
            styles: [__webpack_require__(/*! ./stores.component.scss */ "./src/app/admin/stores/stores.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_title_service__WEBPACK_IMPORTED_MODULE_2__["TitleService"],
            _stores_service__WEBPACK_IMPORTED_MODULE_3__["StoresService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]])
    ], StoresComponent);
    return StoresComponent;
}());



/***/ }),

/***/ "./src/app/admin/stores/stores.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/stores/stores.service.ts ***!
  \************************************************/
/*! exports provided: StoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresService", function() { return StoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StoresService = /** @class */ (function () {
    function StoresService(http) {
        this.http = http;
        this.baseUrl = "/api/Stores/";
    }
    StoresService.prototype.getStores = function () {
        return this.http.get(this.baseUrl);
    };
    StoresService.prototype.deleteStore = function (store) {
        return this.http.delete(this.baseUrl + store.storeId);
    };
    StoresService.prototype.addStore = function (store) {
        return this.http.post(this.baseUrl, store);
    };
    StoresService.prototype.editStore = function (store) {
        return this.http.put(this.baseUrl + store.storeId, store);
    };
    StoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StoresService);
    return StoresService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map