import { Component, Input, OnInit } from '@angular/core';

interface Image {
  imageSrc: string;
  imageAlt: string;
}


@Component({
  selector: 'app-card-images',
  templateUrl: './card-images.component.html',
  styleUrls: ['./card-images.component.scss']
})
export class CardImagesComponent implements OnInit {

  @Input() images : Image[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
