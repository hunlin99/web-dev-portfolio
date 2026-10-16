import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('uses a native external link for AMPA and a router link for Organic Care', () => {
    const page: HTMLElement = fixture.nativeElement;
    const ampa = Array.from(page.querySelectorAll('a')).find(a => a.href === 'https://afroidentity.com/');
    expect(ampa).toBeDefined();
    expect(ampa?.target).toBe('_blank');
    expect(ampa?.rel).toBe('noopener noreferrer');
    expect(ampa?.hasAttribute('routerLink')).toBeFalse();
    expect(ampa?.querySelector('button')).toBeNull();
    expect(page.querySelector('a[href="/organic-care"]')).not.toBeNull();
  });
  it('links both app projects to their Angular case studies', () => {
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('a[href="/traclocal"]')).not.toBeNull();
    expect(page.querySelector('a[href="/health-pocket"]')).not.toBeNull();
  });

});
