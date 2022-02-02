import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { CountToModule } from 'angular-count-to';
import { FeatherModule } from 'angular-feather';
import {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle,Triangle,Grid, Edit, Headphones, Layers, Code, Tablet, BarChart2, Check, PieChart, ArrowRight, Bookmark,
  UserPlus, Coffee, Award,Phone
} from 'angular-feather/icons';
import { ScrollspyDirective } from './scrollspy.directive';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import { QualiteComponent } from './qualite/qualite.component';
import { PrixComponent } from './prix/prix.component';
import { DelaiComponent } from './delai/delai.component';

const icons = {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle,Grid, Edit, Headphones, Layers, Code, Tablet, BarChart2, Check,ArrowRight, Bookmark,
  UserPlus, Coffee, Award,Phone
};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [TeamComponent,FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, ScrollspyDirective, QualiteComponent, PrixComponent, DelaiComponent,],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    FormsModule,
    CountToModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [TeamComponent,FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, FeatherModule, ScrollspyDirective, QualiteComponent, PrixComponent, DelaiComponent,]
})
export class SharedModule { }



