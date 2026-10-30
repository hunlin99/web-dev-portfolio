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

  it('renders the 12-section student concept, supplied artwork, and competitive comparison table', async () => {
    const harness = await openPage();
    const page = harness.routeNativeElement!;
    expect(page.querySelector('h1')?.textContent).toBe('TravLocal — Travel Like a Local');
    expect(travlocalProject.sections.length).toBe(12);
    for (const section of travlocalProject.sections) expect(page.querySelector(`#${section.id}`)).not.toBeNull();
    expect(page.textContent).toContain('Student UX/UI Design Concept');
    expect(page.textContent).toContain('Ling Chang & Nancy Huang');
    expect(page.textContent).toContain('April 2025');
    expect(page.textContent).toContain('design proposal rather than a launched product');
    expect(page.textContent).toContain('not a current independently verified audit');
    expect(page.textContent).not.toContain('React.js');
    expect(page.textContent).not.toContain('Codex may');
    expect(page.textContent).not.toContain('[IMAGE:');
    expect(page.querySelectorAll('[data-placeholder]').length).toBe(0);
    expect(page.querySelectorAll('.comparison-table thead th').length).toBe(5);
    expect(page.querySelectorAll('.comparison-table tbody tr').length).toBe(9);
    expect(page.querySelectorAll('.comparison-table tbody td').length).toBe(36);
    expect(page.querySelectorAll('.comparison-status.included').length).toBe(17);
    expect(page.querySelectorAll('.comparison-status.excluded').length).toBe(15);
    expect(page.querySelector('.comparison-table caption')?.textContent).toContain('proposed features');
    const matching = page.querySelectorAll('.comparison-table tbody tr')[3];
    expect(matching.textContent).toContain('Automated');
    expect(matching.querySelectorAll('td')[1].textContent?.trim()).toBe('Manual');
    expect(page.querySelectorAll('.exchange-flow li').length).toBe(4);
    expect(page.querySelectorAll('.needs-grid .insight-card').length).toBe(4);
    expect(page.querySelectorAll('.difference-grid .insight-card').length).toBe(4);
    expect(page.querySelectorAll('#journey img').length).toBe(3);
    expect(page.querySelector('#landing-page img')).toBeNull();
    expect(page.querySelector<HTMLAnchorElement>('#landing-page app-project-website-button a')?.href).toBe(travlocalProject.website);
    expect(page.querySelectorAll('.feature-row img').length).toBe(4);
    expect(page.querySelector('#mobile-interface')).toBeNull();
    expect(page.textContent).not.toContain('Feature 1 — Personalized Discovery');
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
  it('opens each persona thumbnail as its full profile and closes it accessibly', async () => {
    const harness = await openPage();
    const page = harness.routeNativeElement!;
    const dialog = page.querySelector<HTMLDialogElement>('dialog')!;
    const previews = page.querySelectorAll<HTMLButtonElement>('.persona-preview');
    expect(previews.length).toBe(2);
    for (let i = 0; i < previews.length; i++) {
      previews[i].click();
      harness.fixture.detectChanges();
      expect(dialog.open).toBeTrue();
      const image = dialog.querySelector<HTMLImageElement>('img')!;
      expect(image.getAttribute('src')).toBe(`/images/TravLocal/user${i + 1}.png`);
      expect((await fetch(image.src)).ok).toBeTrue();
      const closed = new Promise<void>(resolve => dialog.addEventListener('close', () => resolve(), { once: true }));
      dialog.querySelector<HTMLButtonElement>('button')!.click();
      await closed;
      harness.fixture.detectChanges();
      expect(dialog.open).toBeFalse();
      expect(dialog.querySelector('img')).toBeNull();
    }
  });

});
