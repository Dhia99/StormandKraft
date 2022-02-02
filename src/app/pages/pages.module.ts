import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PagesRoutingModule } from './pages-routing.module';
import { Projet1Component } from '../pages/projet1/projet1.component';
import { Projet2Component } from '../pages/index6/projet2/projet2.component';
import { Projet3Component } from '../pages/index6/projet3/projet3.component';
import { SharedModule } from '../shared/shared.module';
import { Index6Component } from './index6/index6.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { Service4Component } from './service4/service4.component';
import { Service5Component } from './service5/service5.component';
import { Service6Component } from './service6/service6.component';
import { Service7Component } from './service7/service7.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { Service21Component } from './service21/service21.component';
import { Service22Component } from './service22/service22.component';
import { Service23Component } from './service23/service23.component';

@NgModule({
  declarations: [Index6Component,Projet1Component, Projet2Component, Projet3Component, Service1Component, Service2Component, Service3Component, Service4Component, Service5Component, Service6Component, Service7Component, Service21Component, Service22Component, Service23Component],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ScrollToModule.forRoot(),
    NgbModalModule,
    NgxYoutubePlayerModule,
    CarouselModule,
    IvyCarouselModule,
  ]
})
export class PagesModule { }
