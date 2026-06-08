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
  values = [
    { label: 'Integrity',    icon: '🤝' },
    { label: 'Innovation',   icon: '💡' },
    { label: 'Sustainability', icon: '🌿' },
    { label: 'Excellence',   icon: '⭐' },
  ];
}