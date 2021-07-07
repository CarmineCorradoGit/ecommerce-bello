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
      img: '',
      isActive: true
  },    {
      title: 'titolo2',
      description: 'descrizione2',
      button: 'bottone2',
      img: '',
      isActive: false
  },    {
      title: 'titolo3',
      description: 'descrizione3',
      button: 'bottone3',
      img: '',
      isActive: false
  },
  ]

  index = 0;

  interval: any;

  constructor() {
    this.interval = setInterval(()=>{
      this.slides[this.index].isActive = false;
      this.index++
      this.slides[this.index].isActive = true; 
    }, 2000)
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

}
