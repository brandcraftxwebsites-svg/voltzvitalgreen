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
    { icon: '📍', title: 'Registered Address', value: 'Chandrakantham Complex, Chandranagar, Palakkad, Kerala – 678007' },
    { icon: '✉️', title: 'Email', value: 'info@voltzvital.com' },
    { icon: '📞', title: 'Phone', value: '+91 XXXXX XXXXX' },
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