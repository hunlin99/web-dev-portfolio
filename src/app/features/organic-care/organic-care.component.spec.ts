import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { OrganicCareComponent } from './organic-care.component';

describe('OrganicCareComponent', () => {
  it('renders the migrated case study and accessible prototype', async () => {
    await TestBed.configureTestingModule({
      imports: [OrganicCareComponent],
      providers: [provideRouter([])]
    }).compileComponents();
    const fixture = TestBed.createComponent(OrganicCareComponent);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('h1')?.textContent).toBe('Organic Care');
    expect(Array.from(page.querySelectorAll('h2')).map(h => h.textContent)).toEqual([
      'Objective', 'Target Audience', 'Color Scheme', 'Grid System', 'Interactive Prototype'
    ]);
    expect(page.querySelector('a[routerLink]')?.getAttribute('href')).toBe('/projects');
    expect(page.querySelector('iframe')?.title).toBe('Organic Care interactive Figma prototype');
    expect(page.querySelectorAll('img[loading="lazy"]').length).toBe(2);
    expect(page.querySelector('a[href^="https://www.figma.com/proto/"]')).not.toBeNull();
  });
});
