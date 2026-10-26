import { TestBed } from '@angular/core/testing';
import { ProjectWebsiteButtonComponent } from './project-website-button.component';

describe('ProjectWebsiteButtonComponent', () => {
  it('renders an accessible external link and updates its inputs', async () => {
    await TestBed.configureTestingModule({ imports: [ProjectWebsiteButtonComponent] }).compileComponents();
    const fixture = TestBed.createComponent(ProjectWebsiteButtonComponent);
    fixture.componentRef.setInput('href', 'https://afroidentity.com/');
    fixture.componentRef.setInput('label', 'Visit Afroidentity');
    fixture.detectChanges();
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(link.href).toBe('https://afroidentity.com/');
    expect(link.textContent).toContain('Visit Afroidentity');
    expect(link.getAttribute('aria-label')).toBe('Visit Afroidentity (opens in a new tab)');
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener noreferrer');
    expect(link.querySelector('.circle')?.getAttribute('aria-hidden')).toBe('true');
    expect(link.querySelector('button')).toBeNull();
    fixture.componentRef.setInput('href', 'https://dc3-viral-menace-web-dev.web.app/');
    fixture.componentRef.setInput('label', 'Visit S-Qubed Entertainment');
    fixture.componentRef.setInput('ariaLabel', 'Explore S-Qubed in a new tab');
    fixture.detectChanges();
    expect(link.href).toBe('https://dc3-viral-menace-web-dev.web.app/');
    expect(link.textContent).toContain('Visit S-Qubed Entertainment');
    expect(link.getAttribute('aria-label')).toBe('Explore S-Qubed in a new tab');
  });
});
