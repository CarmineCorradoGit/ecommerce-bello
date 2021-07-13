import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Slide } from '../interface/slide.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  slides: Slide[] = [
    {
      title: 'titolo1',
      description: 'descrizione1',
      button: 'bottone1',
      img: 'https://via.placeholder.com/1920x500'
    }, {
      title: 'titolo2',
      description: 'descrizione2',
      button: 'bottone2',
      img: 'https://via.placeholder.com/1920x500'
    }, {
      title: 'titolo3',
      description: 'descrizione3',
      button: 'bottone3',
      img: 'https://via.placeholder.com/1920x500'
    }, {
      title: 'titolo4',
      description: 'descrizione4',
      button: 'bottone4',
      img: 'https://via.placeholder.com/1920x500'
    }, {
      title: 'titolo5',
      description: 'descrizione5',
      button: 'bottone5',
      img: 'https://via.placeholder.com/1920x500'
    }, {
      title: 'titolo6',
      description: 'descrizione6',
      button: 'bottone6',
      img: 'https://via.placeholder.com/1920x500'
    },
  ]

  index = 0;
  interval: any;
  isActive = false;
  elCurrent = 0;

  carouselId = "hpSlider";

  constructor() {

  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
