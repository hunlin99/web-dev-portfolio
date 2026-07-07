import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailPageHeaderComponent } from './project-detail-page-header.component';

describe('ProjectDetailPageHeaderComponent', () => {
  let component: ProjectDetailPageHeaderComponent;
  let fixture: ComponentFixture<ProjectDetailPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailPageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDetailPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
