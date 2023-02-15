import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
  id: any = ' '; //id= f1
  accordion(ids: any) {
    if (this.id == ids) {
      this.id = '';
    } else {
      this.id = ids;
    }
  }
}
