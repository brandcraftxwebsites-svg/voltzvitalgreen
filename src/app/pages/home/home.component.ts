import { Component } from '@angular/core';

import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { VisionComponent } from './vision/vision.component';
import { SectorsComponent } from './sectors/sectors.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    VisionComponent,
    SectorsComponent,
    LeadershipComponent,
    WhyUsComponent,
    ContactComponent
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}