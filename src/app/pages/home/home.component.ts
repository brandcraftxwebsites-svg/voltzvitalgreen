// home.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { HeroComponent }      from './hero/hero.component';
import { AboutComponent }     from './about/about.component';
import { VisionComponent }    from './vision/vision.component';
import { SectorsComponent }   from './sectors/sectors.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { WhyUsComponent }     from './why-us/why-us.component';
import { ContactComponent }   from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    VisionComponent,
    SectorsComponent,
    LeadershipComponent,
    WhyUsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
  }
}