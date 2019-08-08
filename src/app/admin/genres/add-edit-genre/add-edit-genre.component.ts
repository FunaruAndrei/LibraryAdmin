import { Component, OnInit, Inject } from '@angular/core';
import { Genre } from '../../models/genre';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

interface Data {
    type: string;
    genre: Genre;
}

@Component({
  selector: 'app-add-edit-genre',
  templateUrl: './add-edit-genre.component.html',
  styleUrls: ['./add-edit-genre.component.scss']
})
export class AddEditGenreComponent implements OnInit {

    nameModal: string = "";

    constructor(public dialogRef: MatDialogRef<AddEditGenreComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Data) { }

    ngOnInit() {

        if (this.data.genre == null || this.data.genre == undefined) {
            this.data.genre = new Genre();
        }
        
  }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
