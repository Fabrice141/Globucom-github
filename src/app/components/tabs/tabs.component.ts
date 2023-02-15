import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Bytes';
 activeTab:string = 't1';
  onTabClick(tab:any){
    this.activeTab = tab;
  }


  images = [
    {
      imageSrc: 'https://www.mav-npdc.com/wp-content/uploads/2019/03/logiciel-architecture.jpg',
      imageAlt: 'naturel',

    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1650556443811-4f515ca1b1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      imageAlt: 'nature2',

    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1668383183616-52c542fd8b7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      imageAlt: 'person2',
    },

  ];

  images1 = [
       {
      imageSrc: 'https://images.unsplash.com/photo-1661910177389-298ba8bc93aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      imageAlt: 'naturel',

    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1668400207442-64bb6e0b5065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
      imageAlt: 'nature2',

    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1668521429120-4befc2ac6acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      imageAlt: 'person2',
    },


  ]


    images2 = [
       {
      imageSrc: 'https://images.pexels.com/photos/14649876/pexels-photo-14649876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'naturel',

    },
    {
      imageSrc: 'https://images.pexels.com/photos/4157177/pexels-photo-4157177.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      imageAlt: 'nature2',

    },
    {
      imageSrc: 'https://images.pexels.com/photos/13465308/pexels-photo-13465308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'person2',
    },


  ]

}
