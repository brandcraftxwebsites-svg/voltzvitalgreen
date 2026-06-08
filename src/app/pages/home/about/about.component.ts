import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  highlights = [
    'End-to-end environmental compliance support',
    'Energy efficiency advisory and planning',
    'Sustainable infrastructure consulting',
    'Regulatory guidance and documentation',
  ];
}