import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})

export class WhyUsComponent {
  constructor(private sanitizer: DomSanitizer) {}
  reasons = [
    {
     icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="9" r="5.2" stroke="currentColor" stroke-width="1.4"/>
      <path d="M12 6.3L12.9 8.1L14.9 8.4L13.45 9.8L13.8 11.8L12 10.85L10.2 11.8L10.55 9.8L9.1 8.4L11.1 8.1L12 6.3Z" fill="currentColor"/>
      <path d="M8.5 13.2L6.5 21L12 18.5L17.5 21L15.5 13.2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`),
      title: 'Domain Expertise',
      desc: 'Specialised environmental and energy knowledge that translates complex regulations into actionable strategies.',
      color: '#1B9FBF'
    },
    {
      icon: '🌿',
      title: 'Sustainable Focus',
      desc: 'Every solution we design puts long-term environmental responsibility at the core of business outcomes.',
      color: '#4BA84B'
    },
    {
      icon: '💡',
      title: 'Innovative Thinking',
      desc: 'We challenge conventional approaches to find smarter, more efficient paths to compliance and sustainability.',
      color: '#F59E0B'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      desc: 'We don\'t just consult — we collaborate. Your goals become our goals from the very first conversation.',
      color: '#6366F1'
    }
  ];
    ngAfterViewInit(): void {
    const cards = document.querySelectorAll('.why-card');
    const pills = document.querySelectorAll('.sv-pill');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach((card, i) =>
            setTimeout(() => card.classList.add('visible'), i * 80));
          pills.forEach((pill, i) =>
            setTimeout(() => pill.classList.add('visible'), 400 + i * 70));
          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });

    const section = document.querySelector('.why-section');
    if (section) observer.observe(section);
  }
}