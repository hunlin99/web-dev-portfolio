import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HealthPocketComponent } from './health-pocket.component';

describe('HealthPocketComponent', () => {
  it('renders the migrated case study with working navigation and image assets', async () => {
    await TestBed.configureTestingModule({
      imports: [HealthPocketComponent], providers: [provideRouter([])]
    }).compileComponents();
    const fixture = TestBed.createComponent(HealthPocketComponent);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('h1')?.textContent).toBe('Health Pocket');
    for (const section of ['App Showcasing', 'Prototype', 'App Logo', 'Color Scheme', 'Post Model', 'Typography', 'Button UI', 'Food group icon', 'Navbar UI', 'Persona', 'App mockup']) expect(page.textContent).toContain(section);
    expect(page.querySelector('a[routerLink]')?.getAttribute('href')).toBe('/projects');
    for (const image of Array.from(page.querySelectorAll('img'))) {
      expect(image.alt.length).toBeGreaterThan(0);
      const result = await fetch(image.src);
      expect(result.ok).withContext(image.src).toBeTrue();
      expect(result.headers.get('Content-Type')).toContain('image/');
    }
    expect(page.querySelector('script')).toBeNull();
  });
});
