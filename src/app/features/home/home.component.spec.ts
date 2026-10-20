import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('slides upward every three seconds and loops seamlessly', () => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const page: HTMLElement = fixture.nativeElement;
    document.body.appendChild(page);
    try {
      const row = page.querySelector<HTMLElement>('.scroll-content li')!;
      const animation = row.getAnimations()[0];
      expect(animation).toBeDefined();
      animation.pause();
      const height = row.getBoundingClientRect().height;
      for (const [time, offset] of [[2999, 0], [3501, -1], [5999, -1], [6501, -2], [9000, 0]]) {
        animation.currentTime = time;
        const transform = getComputedStyle(row).transform;
        const y = transform === 'none' ? 0 : new DOMMatrix(transform).m42;
        expect(y).withContext(`at ${time}ms`).toBeCloseTo(height * offset, 1);
      }
      expect(page.querySelector('li[aria-hidden="true"]')?.textContent?.trim())
        .toBe('A designer, developer, and...');
    } finally {
      page.remove();
    }
  });

});
