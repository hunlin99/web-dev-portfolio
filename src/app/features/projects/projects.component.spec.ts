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

  it('links AMPA and Organic Care to their Angular case studies', () => {
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('a[href="/ampa"]')).not.toBeNull();
    expect(page.querySelector('a[href="/organic-care"]')).not.toBeNull();
  });
  it('links both app projects to their Angular case studies', () => {
    const page: HTMLElement = fixture.nativeElement;
    expect(page.querySelector('a[href="/traclocal"]')).not.toBeNull();
    expect(page.querySelector('a[href="/health-pocket"]')).not.toBeNull();
  });

});
