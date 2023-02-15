import { Component, Input, OnInit } from '@angular/core';

interface imgJumbotron {
  imageSrc ? : string;
  imageAlt? : string;
}



@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {


  @Input() imagesJu : imgJumbotron[] = []

  constructor() { }

  ngOnInit(): void {
  }
       

}
