import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent {
  // values = [
  //   { label: 'Integrity',    icon: '🤝' },
  //   { label: 'Innovation',   icon: '💡' },
  //   { label: 'Sustainability', icon: '🌿' },
  //   { label: 'Excellence',   icon: '⭐' },
  // ];

  focusAreas = [
  {
    label: 'Renewable Power Systems',
    description: 'Engineering hydromagnetic and clean energy infrastructure for sustainable power grids.',
    color: 'teal',
  },
  {
    label: 'Circular Economy',
    description: 'Designing waste-free systems that champion resource recovery and landfill elimination.',
    color: 'green',
  },
  {
    label: 'Environmental Health',
    description: 'Advancing public wellbeing through cleaner air, water, and liveable communities.',
    color: 'coral',
  },
  {
    label: 'Inclusive Growth',
    description: 'Building equitable economic models that create shared value across all communities.',
    color: 'amber',
  },
];
}