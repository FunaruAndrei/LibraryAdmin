import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Author } from '../../models/author';

interface Data {
    type: string;
    autor: Author;
}

@Component({
  selector: 'app-add-edit-autor',
  templateUrl: './add-edit-autor.component.html',
  styleUrls: ['./add-edit-autor.component.scss']
})
export class AddEditAutorComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<AddEditAutorComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Data) { }

    ngOnInit() {

        if (this.data.autor == null || this.data.autor == undefined) {
            this.data.autor = new Author();
        }

    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
