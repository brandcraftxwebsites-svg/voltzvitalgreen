import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Leader {
  name: string;
  designation: string;
  color: string;
  colorLight: string;
  bio: string[];
  tags: string[];
  image?: string; // ← ONLY ADDITION
}

@Component({
  selector: 'app-leadership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent {
  selectedLeader: Leader | null = null;

  leaders: Leader[] = [
    {
      name: 'Ashokkumar Muthusamy',
      designation: 'MD',
      color: '#4ba84b',
      colorLight: '#3a8a3a',
      image: 'assets/leaders/Ashokkumar.png', // ← add your asset path here
      bio: [
        'Driving operational excellence and business development, Ashokkumar Muthusamy steers VoltZVital\'s day-to-day functions with an unwavering focus on delivering measurable client outcomes.',
        'His approach combines data-driven decision making with a deep commitment to sustainability, forging partnerships that create long-term value.'
      ],
      tags: ['Operations', 'Business Development', 'Sustainability']
    },
    {
      name: 'Deepika Bhaskaran',
      designation: 'Director & CEO',
      color: '#1b9fbf',
      colorLight: '#0e7a96',
      image: 'assets/leaders/deepika.JPEG', // ← add your asset path here
      bio: [
        'A seasoned professional bringing strategic direction and industry insight to VoltZVital, Bhaskaran Deepika leads the company\'s vision with purpose and precision, guided by a firm commitment to sustainable development.',
        'Her expertise in environmental policy and regulatory compliance has been instrumental in positioning VoltZVital as a trusted voice in the clean energy sector.'
      ],
      tags: ['Strategic Leadership', 'Environment Policy', 'Compliance']
    },
    {
      name: 'Xavier Allessu',
      designation: 'Chief Technology Officer',
      color: '#0d2b4e',
      colorLight: '#1a4a78',
      image: 'assets/leaders/xavier.png',
      bio: [
        'A visionary technologist architecting VoltZVital\'s digital infrastructure, Xavier Allessu brings deep expertise in clean-tech platforms and IoT integration to drive the innovation roadmap.',
        'He leads cross-functional engineering teams to build scalable solutions that accelerate the transition to renewable energy systems.'
      ],
      tags: ['Technology', 'IoT', 'Clean Energy', 'Innovation']
    },
    {
      name: 'Bhaskaran Swaminathan Kalvakulam',
      designation: 'Director',
      color: '#1b9fbf',
      colorLight: '#0e7a96',
      image: 'assets/leaders/bhaskaran-s.png', // ← add your asset path here
      bio: [
        'Bringing decades of cross-sector experience to the board, Bhaskaran Swaminathan Kalvakulam provides strategic oversight and governance that keep VoltZVital aligned with its long-term mission.',
        'His focus on operational discipline and stakeholder value has helped strengthen the company\'s standing as a reliable partner in the clean energy space.'
      ],
      tags: ['Corporate Governance', 'Strategic Oversight', 'Stakeholder Value']
    },
  ];

  getInitials(name: string): string {
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  }

  openModal(leader: Leader): void {
    this.selectedLeader = leader;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedLeader = null;
    document.body.style.overflow = '';
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }
}




// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-leadership',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './leadership.component.html',
//   styleUrls: ['./leadership.component.scss']
// })
// export class LeadershipComponent {
//   leaders = [
//     {
//       name: 'Bhaskaran Swaminathan Kalvakulam',
//       designation: 'Director',
//       bio: 'A seasoned professional bringing strategic direction and industry insight to VoltZVital. With a commitment to sustainable development, he leads the company\'s vision with purpose and precision.',
//       tags: ['Strategic Leadership', 'Environment Policy', 'Compliance']
//     },
//     {
//       name: 'Bhaskaran Deepika',
//       designation: 'Managing Director',
//       bio: 'Driving operational excellence and business development, Bhaskaran Deepika steers VoltZVital\'s day-to-day functions with an unwavering focus on delivering measurable client outcomes.',
//       tags: ['Operations', 'Business Development', 'Sustainability']
//     }
//   ];
// }