import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, withInMemoryScrolling } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { dc3Project } from './dc3-viral-menace.content';

describe('DC3 case study', () => {
  async function openPage() {
    await TestBed.configureTestingModule({ providers: [provideRouter(routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }))] }).compileComponents();
    return RouterTestingHarness.create('/dc3-viral-menace');
  }

  it('renders the new two-placement narrative, all 10 sections, media, and silent videos', async () => {
    const harness = await openPage();
    const page = harness.routeNativeElement!;
    expect(page.querySelector('h1')?.textContent).toBe('DC3: Viral Menace');
    expect(dc3Project.sections.length).toBe(10);
    for (const section of dc3Project.sections) expect(page.querySelector(`#${section.id}`)).not.toBeNull();
    expect(page.textContent).toContain('Web Developer (2026)');
    expect(page.textContent).toContain('custom CMS');
    expect(page.textContent).toContain('90+ PageSpeed Insights SEO score');
    expect(page.querySelector('#deployment')).toBeNull();
    expect(page.querySelector('a[href$="#deployment"]')).toBeNull();
    expect(page.textContent).not.toContain('Continuation Project');
    expect(page.textContent).not.toContain('[IMAGE:');
    expect(page.querySelector('#overview')).toBeNull();
    expect(page.querySelector('#wireframing')).toBeNull();
    expect(page.querySelectorAll('.phase-card').length).toBe(2);
    expect(page.querySelectorAll('.iteration-card').length).toBe(4);
    expect(page.querySelectorAll('.cms-gallery img').length).toBe(2);
    expect(page.querySelector('#development')?.textContent).toContain('character thumbnail');
    const videos = page.querySelectorAll<HTMLVideoElement>('video');
    expect(videos.length).toBe(2);
    for (const video of Array.from(videos)) {
      expect(video.muted).toBeTrue();
      expect(video.defaultMuted).toBeTrue();
    }
    for (const image of Array.from(page.querySelectorAll<HTMLImageElement>('img'))) {
      expect(image.alt).toBeTruthy();
      expect((await fetch(image.src)).ok).withContext(image.src).toBeTrue();
    }
    const liveLink = page.querySelector<HTMLAnchorElement>('a.learn-more')!;
    expect(liveLink.href).toBe(dc3Project.website);
    expect(liveLink.rel).toBe('noopener noreferrer');
    expect(liveLink.querySelector('button')).toBeNull();
  });

  it('navigates every contents link to the matching section fragment', async () => {
    const harness = await openPage();
    const router = TestBed.inject(Router);
    for (const section of dc3Project.sections) {
      harness.routeNativeElement!.querySelector<HTMLAnchorElement>(`a[href="/dc3-viral-menace#${section.id}"]`)!.click();
      await harness.fixture.whenStable();
      expect(router.url).toBe(`/dc3-viral-menace#${section.id}`);
    }
  });
});
