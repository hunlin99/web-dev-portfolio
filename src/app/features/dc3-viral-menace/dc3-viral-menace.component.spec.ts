import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DC3ViralMenaceComponent } from './dc3-viral-menace.component';

describe('DC3ViralMenaceComponent', () => {
  let component: DC3ViralMenaceComponent;
  let fixture: ComponentFixture<DC3ViralMenaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DC3ViralMenaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DC3ViralMenaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
