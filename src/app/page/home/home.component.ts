import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'carousel';

  

  images = [
    {
      imageSrc: 'https://media.istockphoto.com/id/1276633151/fr/photo/architecte-professionnel-moderne-portant-le-casque-de-r%C3%A9alit%C3%A9-virtuelle-utilise-des-gestes.jpg?s=612x612&w=0&k=20&c=d2AHVNTx2mTIT1_jJQxk6FsXc1N7GPGTcqq9Tw9uMLE=',
      imageAlt: 'naturel',
      description: 'Conception des projets ultra futuristes',
      color: '##79CAF1'
    },
    {
      imageSrc: 'https://media.istockphoto.com/id/1050851958/fr/photo/architectes-se-serrant-la-main-%C3%A0-lext%C3%A9rieur.jpg?s=612x612&w=0&k=20&c=Adc4_8RHWBYywG-JH_9-gSynaGy2hXZZSePGWNb1Fxw=',
      imageAlt: 'nature 2',
      description: 'Obtention de permis de bâtir',
      color: '#4fa94f'
    },
    {
      imageSrc: 'assets/img/carousel/3.jpg',
      imageAlt: 'person2',
      description: 'Réalisation clé à la main',
      color: '#AE9CC6'
    },

  ];

  //https://media.istockphoto.com/id/1225043549/fr/photo/maison-3d.jpg?s=612x612&w=0&k=20&c=EsqK8ebkV6u2kJXJ3vedmfjwuvDeHMvu3tr9cVvDVqE=

  imagesService = [
    {
      imageSrc: 'assets/img/services/1_devis.jpeg',
      imageAlt: 'naturel',
      description: 'Conception des projets ultra futuristes',
      color: '#79CAF1'
    },
    {
      imageSrc: 'assets/img/services/2_plan-maison.jpg',
      imageAlt: 'nature 2',
      description: 'Obtention de permis de bâtir',
      color: '#4fa94f'
    },
    {
      imageSrc: 'assets/img/services/3_construction.jpg',
      imageAlt: 'person2',
      description: 'Réalisation clé à la main',
      color: '#AE9CC6'
    },

  ];





  constructor() { }

  ngOnInit(): void {
  }

}
