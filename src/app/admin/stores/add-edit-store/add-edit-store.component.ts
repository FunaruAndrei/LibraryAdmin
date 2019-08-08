import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '../../models/store';

interface Data {
    type: string;
    store: Store;
}

@Component({
    selector: 'app-add-edit-store',
    templateUrl: './add-edit-store.component.html',
    styleUrls: ['./add-edit-store.component.scss']
})
export class AddEditStoreComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<AddEditStoreComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Data) { }

    ngOnInit() {

        if (this.data.store == null || this.data.store == undefined) {
            this.data.store = new Store();
        }

    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}