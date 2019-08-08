import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-deletegenre',
  templateUrl: './deletegenre.component.html',
  styleUrls: ['./deletegenre.component.scss']
})
export class DeletegenreComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DeletegenreComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Genre) { }

  ngOnInit() {
  }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
