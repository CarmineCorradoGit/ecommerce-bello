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
      isActive: true,
      img: 'https://via.placeholder.com/1920x500'
  },    {
      title: 'titolo2',
      description: 'descrizione2',
      button: 'bottone2',
      isActive: false,
      img: 'https://via.placeholder.com/1920x500'
  },    {
      title: 'titolo3',
      description: 'descrizione3',
      button: 'bottone3',
      isActive: false,
      img: 'https://via.placeholder.com/1920x500'
  }, {
      title: 'titolo4',
      description: 'descrizione4',
      button: 'bottone4',
      isActive: false,
      img: 'https://via.placeholder.com/1920x500'
  }, {
      title: 'titolo5',
      description: 'descrizione5',
      button: 'bottone5',
      isActive: false,
      img: 'https://via.placeholder.com/1920x500'
  }, {
      title: 'titolo6',
      description: 'descrizione6',
      button: 'bottone6',
      isActive: false,
      img: 'https://via.placeholder.com/1920x500'
  },
  ]

  index = 0;

  interval: any;

  constructor() {
    this.interval = setInterval(()=>{
      this.slides[this.index].isActive = false;
      if(this.index === this.slides.length - 1){
        this.index = 0;
      } else {
        this.index++
      }
      this.slides[this.index].isActive = true; 
    }, 5000)
   }

   selectSlide(i: number){
    this.slides[this.index].isActive = false;
    this.index = i;
    this.slides[this.index].isActive = true;
   }

   carouselSlide(s: string){
    this.slides[this.index].isActive = false;
     if(s === 'prev'){
      if(this.index === 0){
        this.index = this.slides.length - 1;
      } else {
        this.index--
      }
     }else{
       if(this.index === this.slides.length-1){
         this.index = 0;
       } else {
        this.index++
       }
     }
     this.slides[this.index].isActive = true;
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }

}
