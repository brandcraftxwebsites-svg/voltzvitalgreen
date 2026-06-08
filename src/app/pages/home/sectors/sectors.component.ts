import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent {
  sectors = [
    {
      icon: '🌿',
      title: 'Environmental Consulting',
      desc: 'Comprehensive environmental assessments, impact studies, and compliance frameworks that align operations with national and international standards.',
      gradient: 'rgba(75,168,75,.2)'
    },
    {
      icon: '⚡',
      title: 'Energy Advisory',
      desc: 'Strategic energy auditing, renewable energy planning, and efficiency roadmaps that reduce costs while advancing sustainability goals.',
      gradient: 'rgba(27,159,191,.2)'
    },
    {
      icon: '🏙️',
      title: 'Urban & Infrastructure Development',
      desc: 'Smart urban planning support and infrastructure advisory that integrates green principles into development from the ground up.',
      gradient: 'rgba(77,200,232,.15)'
    },
    {
      icon: '🏭',
      title: 'Industrial Compliance',
      desc: 'Regulatory navigation and documentation support for industrial entities, ensuring full compliance with pollution control and environmental norms.',
      gradient: 'rgba(114,196,114,.15)'
    },
    {
      icon: '💧',
      title: 'Water & Waste Management',
      desc: 'Integrated strategies for water conservation, effluent treatment, and waste lifecycle management aligned with circular economy principles.',
      gradient: 'rgba(27,159,191,.15)'
    },
    {
      icon: '📊',
      title: 'Sustainability Reporting',
      desc: 'Structured ESG reporting frameworks and sustainability disclosures that help organisations communicate their environmental commitment to stakeholders.',
      gradient: 'rgba(75,168,75,.15)'
    }
  ];
}