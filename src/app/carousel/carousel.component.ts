import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  @ViewChild('carousel') carousel: any;
  constructor(config: NgbCarouselConfig) { 
        // customize default values of carousels used by this component tree
        config.interval = 1000000;
        config.keyboard = false;
  }

  ngOnInit() {
  }
  pause() {
    this.carousel.pause();
  }
}
