import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '../../models/store';

@Component({
  selector: 'app-deletestore',
  templateUrl: './deletestore.component.html',
  styleUrls: ['./deletestore.component.scss']
})
export class DeletestoreComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DeletestoreComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Store) { }

    ngOnInit() {
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
