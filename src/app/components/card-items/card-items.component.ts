import { Component, Input, OnInit } from '@angular/core';

interface cardImage {
  imageSrc?: string;
  imageAlt?: string;
  description?: string;
  dateImage?: string;
}


@Component({
  selector: 'app-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss']
})
export class CardItemsComponent implements OnInit {

   @Input() imagesService : cardImage[] = []


  constructor() { }

  ngOnInit(): void {
  }

}
