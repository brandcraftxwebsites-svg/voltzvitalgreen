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
      title: 'Environmental Consulting',
      points: [
        'Impact assessments & audits',
        'Compliance with national standards',
        'EIA / EMP documentation',
        'Site remediation planning'
      ],
      color: '#059669',
      paths: ['M12 22V12', 'M12 12C12 7 7 4 3 6c0 5 3.5 9 9 10z', 'M12 12c0-5 5-8 9-6-1 5-4.5 8.5-9 10z'],
      theme: 'green'
    },
    {
      title: 'Energy Advisory',
      points: [
        'Energy auditing & gap analysis',
        'Renewable energy planning',
        'Efficiency roadmaps & savings',
        'Carbon footprint reduction'
      ],
      color: '#0ea5e9',
      paths: ['M13 2L3 14h9l-1 8 10-12h-9l1-8z'],
      theme: 'teal'
    },
    {
      title: 'Urban & Infrastructure Development',
      points: [
        'Green urban planning',
        'Infrastructure impact studies',
        'Smart city sustainability',
        'Land use & zoning advisory'
      ],
      color: '#6366f1',
      paths: ['M3 9l9-7 9 7', 'M8 22V9', 'M16 22V9', 'M3 9h18v13H3z'],
      theme: 'navy'
    },
    {
      title: 'Industrial Compliance',
      points: [
        'Regulatory gap identification',
        'Pollution control documentation',
        'Consent to operate support',
        'Inspection readiness'
      ],
      color: '#f59e0b',
      paths: ['M2 7h20v15H2z', 'M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2', 'M12 12v4', 'M9 12h6'],
      theme: 'amber'
    },
    {
      title: 'Water Management',
      points: [
        'Water resource planning',
        'Quality monitoring & testing',
        'Effluent treatment solutions',
        'Regulatory compliance'
      ],
      color: '#06b6d4',
      paths: ['M12 2C6 8 4 12 4 15a8 8 0 0 0 16 0c0-3-2-7-8-13z'],
      theme: 'cyan'
    },
    {
      title: 'Liquid & Solid Waste Management',
      points: [
        'Waste characterisation & audit',
        'Segregation & treatment design',
        'Circular economy strategies',
        'Zero-waste compliance'
      ],
      color: '#f43f5e',
      paths: ['M3 6h18', 'M8 6V4h8v2', 'M19 6l-1 14H6L5 6', 'M10 11v6', 'M14 11v6'],
      theme: 'rose'
    },
    {
      title: 'Sustainability Reporting',
      points: [
        'ESG framework setup',
        'GRI / BRSR disclosures',
        'Stakeholder-ready reports',
        'Net-zero roadmapping'
      ],
      color: '#22c55e',
      paths: ['M18 20V10', 'M12 20V4', 'M6 20v-6', 'M3 20h18'],
      theme: 'lime'
    },
    {
      title: 'IT & Digital Sustainability',
      points: [
        'Green IT & data centre audits',
        'Digital carbon footprinting',
        'Sustainable tech procurement',
        'E-waste management & policy'
      ],
      color: '#a855f7',
      paths: ['M2 3h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3z', 'M8 21h8', 'M12 17v4', 'M9 10l2 2 4-4'],
      theme: 'purple'
    }
  ];
}