import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('renders highlighted experience and the requested project links', () => {
    const page: HTMLElement = fixture.nativeElement;
    const links = Array.from(page.querySelectorAll<HTMLAnchorElement>('.experience-project-link'));
    expect(links.map(link => link.getAttribute('href'))).toEqual([
      'https://dc3-viral-menace-web-dev.web.app/', 'https://afroidentity.com/', '/dc3-viral-menace'
    ]);
    expect(links[0].target).toBe('_blank');
    expect(links[1].rel).toBe('noopener noreferrer');
    expect(links[2].hasAttribute('target')).toBeFalse();
    expect(page.querySelector('.experience-inline-link')?.textContent).toBe('website content');
    expect(page.querySelector('.experience-inline-link')?.getAttribute('href')).toBe('https://www.create-eop.com.tw/en/');
    expect(Array.from(page.querySelectorAll('.bg-content strong')).map(node => node.textContent))
      .toContain('custom CMS');
    expect(page.textContent).toContain('Built and maintained responsive production web interfaces and a custom CMS, implementing');
  });

});
