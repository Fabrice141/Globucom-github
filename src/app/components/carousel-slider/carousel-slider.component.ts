import { state, style, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc?: string;
  imageAlt?: string;
  description?: string;
  color?: string;
 }

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss'],
})



export class CarouselSliderComponent implements OnInit {

  @Input() images : carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 5000;


  constructor() { }

  selectedIndex = 0;

  ngOnInit(): void {
  }


// changes slide in every 3 second
autoSlideImages(): void {
  setInterval(() => {
    this.onNextClick();
  }, this.slideInterval);
}

// sets index of image on dot/indicator click
selectImage (index: number): void {
  this.selectedIndex = index;
}

onPrevClick(): void {
  if(this.selectedIndex === 0) {
    this.selectedIndex = this.images.length -1;
  } else {
    this.selectedIndex--;
  }
}

onNextClick(): void {
 if(this.selectedIndex === this.images.length -1) {
   this.selectedIndex = 0;
 } else {
  this.selectedIndex++;
 }
}

}
function translateX(arg0: number, px: any) {
  throw new Error('Function not implemented.');
}

