import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  stats = [
    { value: '2026', label: 'Est.' },
    { value: 'KL',   label: 'Based in Kerala' },
    { value: 'PAN',  label: 'India Operations' },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => this.initReveal(), 100);
  }

  initReveal(): void {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    els.forEach(el => obs.observe(el));
  }

  ngOnDestroy(): void {}

  scrollTo(event: Event, href: string): void {
    event.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  }
}