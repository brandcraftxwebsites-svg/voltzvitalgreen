import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isScrolled = false;

  @HostListener('window:scroll')

  onScroll() {

    this.isScrolled =
      window.scrollY > 50;
  }

}