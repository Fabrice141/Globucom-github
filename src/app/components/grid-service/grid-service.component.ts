import { Component, Input, OnInit } from '@angular/core';


interface Image {
  imageSrc: string;
  imageAlt: string;
}


@Component({
  selector: 'app-grid-service',
  templateUrl: './grid-service.component.html',
  styleUrls: ['./grid-service.component.scss']
})
export class GridServiceComponent implements OnInit {


  @Input() imagesService : Image[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
