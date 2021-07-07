import { Component, OnInit } from '@angular/core';
import { Slide } from '../interface/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides: Slide[] = [
    {
      title: 'titolo1',
      description: 'descrizione1',
      button: 'bottone1',
      img: 'https://via.placeholder.com/1920x500'
  },    {
      title: 'titolo2',
      description: 'descrizione2',
      button: 'bottone2',
      img: 'https://via.placeholder.com/1920x500'
  },    {
      title: 'titolo3',
      description: 'descrizione3',
      button: 'bottone3',
      img: 'https://via.placeholder.com/1920x500'
  },
  ]

activate_1: boolean;
activate_2: boolean;
activate_3: boolean;

  constructor() {
   }

  ngOnInit(): void {
  }

}
