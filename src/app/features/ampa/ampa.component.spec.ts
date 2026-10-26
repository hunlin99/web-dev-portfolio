import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { ampaProject } from './ampa.content';

describe('AMPA case study', () => {
  it('renders the lazy route, all sections, internal navigation, and live website link', async () => {
    await TestBed.configureTestingModule({ providers: [provideRouter(routes)] }).compileComponents();
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
    const response = await fetch(image.src);
    expect(response.ok).toBeTrue();
    expect(response.headers.get('Content-Type')).toContain('image/');
  });
});
