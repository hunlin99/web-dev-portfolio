import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input, Renderer2 } from '@angular/core';

/** Browser-only scroll reveals; server-rendered content stays readable without JavaScript. */
@Directive({ selector: '[appScrollReveal]' })
export class ScrollRevealDirective {
  readonly appScrollReveal = input<'left' | 'right' | 'up'>('left');

  constructor() {
    const element = inject(ElementRef<HTMLElement>).nativeElement;
    const renderer = inject(Renderer2);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const motion = matchMedia('(prefers-reduced-motion: reduce)');
      if (motion.matches || typeof IntersectionObserver === 'undefined') return;
      renderer.setAttribute(element, 'data-scroll-reveal', this.appScrollReveal());
      const offset = Math.min(120, innerHeight / 3);
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          // Keep completed reveals visible above the viewport; replay when scrolling up past them.
          if (entry.isIntersecting) renderer.removeClass(element, 'scroll-reveal-pending');
          else if (entry.boundingClientRect.top > 0) renderer.addClass(element, 'scroll-reveal-pending');
        }
      }, { rootMargin: `0px 0px -${offset}px 0px`, threshold: 0 });
      if (element.getBoundingClientRect().top >= innerHeight - offset) {
        renderer.addClass(element, 'scroll-reveal-pending');
      }
      const frame = requestAnimationFrame(() => {
        renderer.addClass(element, 'scroll-reveal-ready');
        observer.observe(element);
      });
      const showAll = () => {
        if (motion.matches) {
          observer.disconnect();
          renderer.removeClass(element, 'scroll-reveal-pending');
        }
      };
      motion.addEventListener('change', showAll);
      destroyRef.onDestroy(() => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        motion.removeEventListener('change', showAll);
      });
    });
  }
}
