import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  reasons = [
    {
      icon: '🎯',
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