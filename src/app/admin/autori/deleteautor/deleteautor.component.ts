import { Component, OnInit, Inject } from '@angular/core';
import { Author } from '../../models/author';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deleteautor',
  templateUrl: './deleteautor.component.html',
  styleUrls: ['./deleteautor.component.scss']
})
export class DeleteautorComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<DeleteautorComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Author) { }

      ngOnInit() {
      }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
