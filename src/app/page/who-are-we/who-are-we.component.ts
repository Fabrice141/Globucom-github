import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-are-we',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.scss']
})
export class WhoAreWeComponent implements OnInit {

  imagesJu = [
    {
      imageSrc: 'https://media.istockphoto.com/id/1189235635/photo/high-angle-view-of-workers-in-construction-site.jpg?s=612x612&w=0&k=20&c=paOusGRXnevoZIe1sMe4ql5ttON5yl3-Y2DD2SoKx40=',
      imageAlt: 'naturel',
  
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
