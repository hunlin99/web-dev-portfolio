import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, withInMemoryScrolling } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { travlocalProject } from './traclocal.content';

describe('TravLocal case study', () => {
  async function openPage() {
    await TestBed.configureTestingModule({ providers: [provideRouter(routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }))] }).compileComponents();
    return RouterTestingHarness.create('/traclocal');
  }

  it('renders the 13-section student concept, supplied artwork, and four labeled image slots', async () => {
    const harness = await openPage();
    const page = harness.routeNativeElement!;
    expect(page.querySelector('h1')?.textContent).toBe('TravLocal — Travel Like a Local');
    expect(travlocalProject.sections.length).toBe(13);
    for (const section of travlocalProject.sections) expect(page.querySelector(`#${section.id}`)).not.toBeNull();
    expect(page.textContent).toContain('Student UX/UI Design Concept');
    expect(page.textContent).toContain('Ling Chang & Nancy Huang');
    expect(page.textContent).toContain('April 2025');
    expect(page.textContent).toContain('design proposal rather than a launched product');
    expect(page.textContent).toContain('not an independently verified current feature audit');
    expect(page.textContent).not.toContain('React.js');
    expect(page.textContent).not.toContain('Codex may');
    expect(page.textContent).not.toContain('[IMAGE:');
    expect(page.querySelectorAll('[data-placeholder]').length).toBe(4);
    expect(page.querySelectorAll('.exchange-flow li').length).toBe(4);
    for (const image of Array.from(page.querySelectorAll<HTMLImageElement>('img'))) {
      expect(image.alt).toBeTruthy();
      expect(image.width).toBeGreaterThan(0);
      const result = await fetch(image.src);
      expect(result.ok).withContext(image.src).toBeTrue();
      expect(result.headers.get('Content-Type')).toContain('image/');
    }
    const external = page.querySelector<HTMLAnchorElement>('app-project-website-button a')!;
    expect(external.href).toBe(travlocalProject.website);
    expect(external.target).toBe('_blank');
    expect(external.rel).toBe('noopener noreferrer');
  });

  it('links every contents entry to its own section and preserves the old alias', async () => {
    const harness = await openPage();
    const router = TestBed.inject(Router);
    for (const section of travlocalProject.sections) {
      harness.routeNativeElement!.querySelector<HTMLAnchorElement>(`a[href="/traclocal#${section.id}"]`)!.click();
      await harness.fixture.whenStable();
      expect(router.url).toBe(`/traclocal#${section.id}`);
    }
    await harness.navigateByUrl('/tracLocal');
    expect(router.url).toBe('/traclocal');
  });
});
