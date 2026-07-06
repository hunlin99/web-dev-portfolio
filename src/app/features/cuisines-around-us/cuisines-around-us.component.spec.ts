import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinesAroundUsComponent } from './cuisines-around-us.component';

describe('CuisinesAroundUsComponent', () => {
  let component: CuisinesAroundUsComponent;
  let fixture: ComponentFixture<CuisinesAroundUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuisinesAroundUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisinesAroundUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
