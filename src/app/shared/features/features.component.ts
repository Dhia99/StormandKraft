import { Component, OnInit } from '@angular/core';
import { Testimonial } from './clients.model';
import { testimonialData } from './data';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  testimonialData: Testimonial[];

  constructor() { }

  testimonialOptions: OwlOptions = {
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
    },
    nav: true,
    navText: ['<i class=\'mdi mdi-chevron-left\'></i>', '<i class=\'mdi mdi-chevron-right\'></i>'],
  };

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this.testimonialData = testimonialData;
  }
}
