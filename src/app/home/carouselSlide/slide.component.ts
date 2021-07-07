import { Component, Input, OnInit } from '@angular/core';
import { Slide } from 'src/app/interface/slide.interface';

@Component({
  selector: 'app-slide',
  template: `
        <div [ngClass]="{'active': elements.isActive}" class="carousel-item">
          <img src="{{elements.img}}" alt="">
  
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>{{elements.title}}</h1>
              <p>{{elements.description}}</p>
              <p><a class="btn btn-lg btn-primary" href="#">{{elements.button}}</a></p>
            </div>
          </div>
        </div>
  `,
  styles: ['']
})
export class SlideComponent implements OnInit {

    @Input() elements: Slide = {
        title: '',
        description: '',
        button: '',
        img: '', 
        isActive: false
    };

  constructor() { }

  ngOnInit(): void {
  }

}
