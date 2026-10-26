import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, withInMemoryScrolling } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { ampaProject } from './ampa.content';

describe('AMPA case study', () => {
  it('renders the lazy route, all sections, internal navigation, and live website link', async () => {
    await TestBed.configureTestingModule({ providers: [provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }))] }).compileComponents();
    const harness = await RouterTestingHarness.create('/ampa');
    const page = harness.routeNativeElement!;
    expect(page.querySelector('h1')?.textContent).toBe(ampaProject.title);
    for (const section of ampaProject.sections) {
      expect(page.querySelector(`#${section.id}`)).withContext(section.id).not.toBeNull();
      expect(page.querySelector(`a[href="/ampa#${section.id}"]`)).not.toBeNull();
    }
    expect(page.querySelector('a[href="/projects"]')).not.toBeNull();
    const external = page.querySelector<HTMLAnchorElement>('a[href="https://afroidentity.com/"]')!;
    expect(external.target).toBe('_blank');
    expect(external.rel).toBe('noopener noreferrer');
    expect(page.querySelectorAll('.decision').length).toBe(3);
    expect(page.textContent).toContain('design assumptions');
    expect(page.textContent).toContain('not measured usability or business outcomes');
    const image = page.querySelector<HTMLImageElement>('img')!;
    expect(image.alt).toBeTruthy();
    for (const asset of Array.from(page.querySelectorAll<HTMLImageElement>('img'))) {
      const response = await fetch(asset.src);
      expect(response.ok).withContext(asset.src).toBeTrue();
      expect(response.headers.get('Content-Type')).toContain('image/');
      expect(asset.alt).toBeTruthy();
    }
    const mobileSource = page.querySelector<HTMLSourceElement>('picture source')!;
    expect(mobileSource.media).toBe('(max-width: 750px)');
    const crop = await fetch(mobileSource.srcset);
    expect(crop.ok).toBeTrue();
    expect(page.querySelector('.mobile-flow-continuation')).not.toBeNull();
    expect(page.querySelector('a.learn-more button')).toBeNull();
  });
  it('navigates every contents link to the matching Angular fragment without leaving AMPA', async () => {
    await TestBed.configureTestingModule({ providers: [provideRouter(routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }))] }).compileComponents();
    const harness = await RouterTestingHarness.create('/ampa');
    const router = TestBed.inject(Router);
    for (const section of ampaProject.sections) {
      const page = harness.routeNativeElement!;
      const link = page.querySelector<HTMLAnchorElement>(`a[href="/ampa#${section.id}"]`)!;
      link.click();
      await harness.fixture.whenStable();
      expect(router.url).toBe(`/ampa#${section.id}`);
      expect(page.querySelector(`#${section.id}`)).not.toBeNull();
    }
  });

});
