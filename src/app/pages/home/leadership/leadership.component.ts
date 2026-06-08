import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent {
  leaders = [
    {
      name: 'Bhaskaran Swaminathan Kalvakulam',
      designation: 'Director',
      bio: 'A seasoned professional bringing strategic direction and industry insight to VoltZVital. With a commitment to sustainable development, he leads the company\'s vision with purpose and precision.',
      tags: ['Strategic Leadership', 'Environment Policy', 'Compliance']
    },
    {
      name: 'Bhaskaran Deepika',
      designation: 'Managing Director',
      bio: 'Driving operational excellence and business development, Bhaskaran Deepika steers VoltZVital\'s day-to-day functions with an unwavering focus on delivering measurable client outcomes.',
      tags: ['Operations', 'Business Development', 'Sustainability']
    }
  ];
}