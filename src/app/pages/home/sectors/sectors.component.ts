// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-sectors',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './sectors.component.html',
//   styleUrls: ['./sectors.component.scss']
// })
// export class SectorsComponent {

//   sectors = [
//     {
//       title: 'Environmental Consulting',
//       desc: 'Comprehensive assessments, impact studies, and compliance frameworks aligned with national and international standards.',
//       color: '#00c97a',
//       gradient: 'rgba(0,201,122,.1)',
//       paths: ['M12 22V12', 'M12 12C12 7 7 4 3 6c0 5 3.5 9 9 10z', 'M12 12c0-5 5-8 9-6-1 5-4.5 8.5-9 10z'],
//       theme: 'green'
//     },
//     {
//       title: 'Energy Advisory',
//       desc: 'Strategic energy auditing, renewable planning, and efficiency roadmaps that reduce costs while advancing sustainability goals.',
//       color: '#0ea5e9',
//       gradient: 'rgba(14,165,233,.1)',
//       paths: ['M13 2L3 14h9l-1 8 10-12h-9l1-8z'],
//       theme: 'teal'
//     },
//     {
//       title: 'Urban & Infrastructure Development',
//       desc: 'Smart urban planning and infrastructure advisory integrating green principles into development from the ground up.',
//       color: '#6366f1',
//       gradient: 'rgba(99,102,241,.1)',
//       paths: ['M3 9l9-7 9 7', 'M8 22V9', 'M16 22V9', 'M3 9h18v13H3z'],
//       theme: 'navy'
//     },
//     {
//       title: 'Industrial Compliance',
//       desc: 'Regulatory navigation and documentation support ensuring full compliance with pollution control and environmental norms.',
//       color: '#f59e0b',
//       gradient: 'rgba(245,158,11,.1)',
//       paths: ['M2 7h20v15H2z', 'M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2', 'M12 12v4', 'M9 12h6'],
//       theme: 'amber'
//     },
//     {
//       title: 'Water Management',
//       desc: 'End-to-end water resource planning covering conservation, quality monitoring, effluent treatment, and regulatory compliance for industrial and municipal clients.',
//       color: '#06b6d4',
//       gradient: 'rgba(6,182,212,.1)',
//       paths: ['M12 2C6 8 4 12 4 15a8 8 0 0 0 16 0c0-3-2-7-8-13z'],
//       theme: 'cyan'
//     },
//     {
//       title: 'Liquid & Solid Waste Management',
//       desc: 'Comprehensive waste characterisation, segregation, treatment, and disposal solutions for industrial and urban generators aligned with circular economy and zero-waste principles.',
//       color: '#f43f5e',
//       gradient: 'rgba(244,63,94,.1)',
//       paths: ['M3 6h18', 'M8 6V4h8v2', 'M19 6l-1 14H6L5 6', 'M10 11v6', 'M14 11v6'],
//       theme: 'rose'
//     },
//     {
//       title: 'Sustainability Reporting',
//       desc: 'Structured ESG frameworks and sustainability disclosures that communicate your environmental commitment to stakeholders.',
//       color: '#22c55e',
//       gradient: 'rgba(34,197,94,.1)',
//       paths: ['M18 20V10', 'M12 20V4', 'M6 20v-6', 'M3 20h18'],
//       theme: 'lime'
//     }
//   ];
// }

import { Component, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements AfterViewInit, OnDestroy {

  private observer: IntersectionObserver | null = null;
  constructor(private ngZone: NgZone) { }
  sectors = [
    {
      title: 'Environmental Consulting',
      desc: 'Comprehensive assessments, impact studies, and compliance frameworks aligned with national and international standards.',
      color: '#00c97a',
      gradient: 'rgba(0,201,122,.1)',
      paths: ['M12 22V12', 'M12 12C12 7 7 4 3 6c0 5 3.5 9 9 10z', 'M12 12c0-5 5-8 9-6-1 5-4.5 8.5-9 10z'],
      theme: 'green'
    },
    {
      title: 'Energy Advisory',
      desc: 'Strategic energy auditing, renewable planning, and efficiency roadmaps that reduce costs while advancing sustainability goals.',
      color: '#0ea5e9',
      gradient: 'rgba(14,165,233,.1)',
      paths: ['M13 2L3 14h9l-1 8 10-12h-9l1-8z'],
      theme: 'teal'
    },
    {
      title: 'Urban & Infrastructure Development',
      desc: 'Smart urban planning and infrastructure advisory integrating green principles into development from the ground up.',
      color: '#6366f1',
      gradient: 'rgba(99,102,241,.1)',
      paths: ['M3 9l9-7 9 7', 'M8 22V9', 'M16 22V9', 'M3 9h18v13H3z'],
      theme: 'navy'
    },
    {
      title: 'Industrial Compliance',
      desc: 'Regulatory navigation and documentation support ensuring full compliance with pollution control and environmental norms.',
      color: '#f59e0b',
      gradient: 'rgba(245,158,11,.1)',
      paths: ['M2 7h20v15H2z', 'M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2', 'M12 12v4', 'M9 12h6'],
      theme: 'amber'
    },
    {
      title: 'Water Management',
      desc: 'End-to-end water resource planning covering conservation, quality monitoring, effluent treatment, and regulatory compliance for industrial and municipal clients.',
      color: '#06b6d4',
      gradient: 'rgba(6,182,212,.1)',
      paths: ['M12 2C6 8 4 12 4 15a8 8 0 0 0 16 0c0-3-2-7-8-13z'],
      theme: 'cyan'
    },

    {
      title: 'Liquid & Solid Waste Management',
      desc: 'Comprehensive waste characterisation, segregation, treatment, and disposal solutions for industrial and urban generators aligned with circular economy and zero-waste principles.',
      color: '#f43f5e',
      gradient: 'rgba(244,63,94,.1)',
      paths: ['M3 6h18', 'M8 6V4h8v2', 'M19 6l-1 14H6L5 6', 'M10 11v6', 'M14 11v6'],
      theme: 'rose'
    },

    {
      title: 'Sustainability Reporting',
      desc: 'Structured ESG frameworks and sustainability disclosures that communicate your environmental commitment to stakeholders.',
      color: '#22c55e',
      gradient: 'rgba(34,197,94,.1)',
      paths: ['M18 20V10', 'M12 20V4', 'M6 20v-6', 'M3 20h18'],
      theme: 'lime'
    }
  ];

  ngAfterViewInit(): void {
  // Touch devices: cards are always open via CSS — IntersectionObserver not needed.
  // Observer is only used on desktop (hover-capable) devices for the .is-visible
  // scroll-pop entrance on non-hovered cards, if you ever want that.
  const isTouchDevice = window.matchMedia('(hover: none)').matches;
  if (isTouchDevice) return;

  this.ngZone.runOutsideAngular(() => {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer!.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const cards = document.querySelectorAll('.sector-card');
    cards.forEach(card => this.observer!.observe(card));
  });
}
  // ngAfterViewInit(): void {
  //   const isTouchDevice = window.matchMedia('(hover: none)').matches;
  //   if (!isTouchDevice) return;

  //   // Run outside Angular's zone so scroll-triggered intersection events
  //   // don't fire change detection on every tick — this was the source
  //   // of the mobile stutter/glitch
  //   this.ngZone.runOutsideAngular(() => {
  //     this.observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach(entry => {
  //           if (entry.isIntersecting) {
  //             entry.target.classList.add('is-visible');
  //             // Card is permanently open now — stop watching it so it
  //             // can never be re-triggered or affected by later scrolling
  //             this.observer!.unobserve(entry.target);
  //           }
  //         });
  //       },
  //       {
  //         threshold: 0.25,
  //         rootMargin: '0px 0px -40px 0px'
  //       }
  //     );

  //     const cards = document.querySelectorAll('.sector-card');
  //     cards.forEach(card => this.observer!.observe(card));
  //   });
  // }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
