import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { TitleService } from '../shared/title.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    pageTitle: string = "";
    mode = new FormControl('side');
    opened: boolean = true;
    constructor(private titleService: TitleService) {
        titleService.title$.subscribe(
            tit => {
                this.pageTitle = tit;
            }
        );
    }

      ngOnInit() {
      }
    

}
