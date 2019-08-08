import { Component, OnInit, Inject } from '@angular/core';
import { Book } from '../../models/book';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.scss']
})
export class DeletebookComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DeletebookComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Book) { }

    ngOnInit() {
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
