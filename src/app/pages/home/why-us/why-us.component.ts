import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}