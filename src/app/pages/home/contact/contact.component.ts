import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  submitted = false;

  formData = {
    name: '', email: '', phone: '', service: '', message: ''
  };

contactInfo = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" width="22" height="22">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="white" stroke-width="1.6" stroke-linejoin="round"
        style="stroke-dasharray:80;stroke-dashoffset:80;animation:svgDraw 1s ease forwards"/>
      <circle cx="12" cy="9" r="2.5"
        stroke="white" stroke-width="1.6"
        style="stroke-dasharray:20;stroke-dashoffset:20;animation:svgDraw 1s .2s ease forwards"/>
    </svg>`,
    title: 'Registered Address',
    value: 'Chandrakantham Complex, Chandranagar, Palakkad, Kerala – 678007'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" width="22" height="22">
      <rect x="3" y="5" width="18" height="14" rx="2"
        stroke="white" stroke-width="1.6"
        style="stroke-dasharray:80;stroke-dashoffset:80;animation:svgDraw 1s ease forwards"/>
      <path d="M3 8l9 6 9-6"
        stroke="white" stroke-width="1.6" stroke-linecap="round"
        style="stroke-dasharray:30;stroke-dashoffset:30;animation:svgDraw 1s .2s ease forwards"/>
    </svg>`,
    title: 'Email',
    value: 'info@voltzvital.com'
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" width="22" height="22">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"
        stroke="white" stroke-width="1.6" stroke-linejoin="round"
        style="stroke-dasharray:120;stroke-dashoffset:120;animation:svgDraw 1s ease forwards"/>
    </svg>`,
    title: 'Phone',
    value: '+91 XXXXX XXXXX'
  },
];

  services = [
    'Environmental Consulting',
    'Energy Advisory',
    'Urban & Infrastructure Development',
    'Industrial Compliance',
    'Water & Waste Management',
    'Sustainability Reporting',
  ];

  onSubmit(): void {
    this.submitted = true;
    // Integrate your API / EmailJS / backend here
  }
}