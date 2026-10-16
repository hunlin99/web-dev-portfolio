import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TraclocalComponent } from './traclocal.component';

describe('TraclocalComponent', () => {
  it('renders the migrated case study with working navigation and image assets', async () => {
    await TestBed.configureTestingModule({
      imports: [TraclocalComponent], providers: [provideRouter([])]
    }).compileComponents();
    const fixture = TestBed.createComponent(TraclocalComponent);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('h1')?.textContent).toBe('TracLocal App');
    for (const section of ['Problem Statement', 'Solution Overview', 'Technologies Used', 'App Main Features', 'Logo Design', 'UI Design', 'Design and Development Team']) expect(page.textContent).toContain(section);
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
