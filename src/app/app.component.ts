import { Component, EventEmitter, Input, Output } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Globucom';

  ngOnInit() {
    AOS.init();
  }

  
  constructor() { }

}



