import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;
  activeSection = '';

  navLinks = [
    { id: 'about',      label: 'About',      href: '#about' },
    { id: 'vision',     label: 'Vision',     href: '#vision' },
    { id: 'sectors',    label: 'Sectors',    href: '#sectors' },
    { id: 'leadership', label: 'Leadership', href: '#leadership' },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 60;
    this.updateActiveSection();
  }

  updateActiveSection(): void {
    const sections = ['about', 'vision', 'sectors', 'leadership', 'contact'];
    for (const id of sections.reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection = id;
        return;
      }
    }
  }

  scrollTo(event: Event, href: string): void {
    event.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void  { this.menuOpen = false; }
}