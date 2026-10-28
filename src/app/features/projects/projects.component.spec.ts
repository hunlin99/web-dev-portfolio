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

  it('puts DC3 and AMPA first and links each visible project to its case study', () => {
    const page: HTMLElement = fixture.nativeElement;
    expect(Array.from(page.querySelectorAll('.content-block h3')).map(h => h.textContent?.trim()))
      .toEqual(['DC3: Viral Menace', 'AMPA Project', 'Cuisines Around Us', 'TravLocal', 'Health Pocket']);
    for (const path of ['/dc3-viral-menace', '/ampa', '/cuisines-around-us', '/traclocal', '/health-pocket']) {
      expect(page.querySelector(`a[href="${path}"]`)).withContext(path).not.toBeNull();
    }
    expect(page.textContent).toContain('Featured Case Studies');
    expect(page.textContent).toContain('Web & App Experiences');
    expect(page.textContent).toContain('Custom CMS');
    expect(page.textContent).toContain('Brand Identity, UX Architecture, Design Systems');
    expect(page.textContent).not.toContain('Organic Care');
    expect(page.querySelector('a[href="/organic-care"]')).toBeNull();
    expect(component.hiddenProjects[0].link).toBe('/organic-care');
  });

});
