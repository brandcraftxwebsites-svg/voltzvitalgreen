import {
  Component, AfterViewInit, OnDestroy, ElementRef, ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private chipObserver?: IntersectionObserver;
  private revealObserver?: IntersectionObserver;

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initReveal();
      this.initChips();
      this.initVideo();
    }, 100);
  }

  private initVideo(): void {
    const video = this.heroVideo?.nativeElement;
    if (!video) return;

    video.muted = true;
    video.playbackRate = 0.85;

    const play = () => {
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => { video.muted = true; video.play(); });
      }
    };

    play();
    video.addEventListener('ended', () => { video.currentTime = 0; play(); });
  }

  private initReveal(): void {
    // Target both old class names (reveal/reveal-right) inside .vz-hero
    const els = document.querySelectorAll(
      '.vz-hero .reveal, .vz-hero .reveal-right'
    );

    this.revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    els.forEach(el => this.revealObserver!.observe(el));
  }

  private initChips(): void {
    const chips = document.querySelectorAll<HTMLElement>('.vz-hero .chip');

    this.chipObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const chip = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          chip.classList.remove('chip-exit');
          requestAnimationFrame(() => chip.classList.add('chip-visible'));
        } else {
          chip.classList.remove('chip-visible');
          chip.classList.add('chip-exit');
          chip.addEventListener('transitionend', () => {
            chip.classList.remove('chip-exit');
          }, { once: true });
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    chips.forEach(c => this.chipObserver!.observe(c));
  }

  ngOnDestroy(): void {
    this.chipObserver?.disconnect();
    this.revealObserver?.disconnect();
  }

  scrollTo(event: Event, href: string): void {
    event.preventDefault();
    document.getElementById(href.replace('#', ''))
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}