import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CuisinesAroundUsComponent } from './cuisines-around-us.component';

describe('CuisinesAroundUsComponent', () => {
  let component: CuisinesAroundUsComponent;
  let fixture: ComponentFixture<CuisinesAroundUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuisinesAroundUsComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuisinesAroundUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the case study sections and all persona previews', () => {
    const page: HTMLElement = fixture.nativeElement;
    for (const heading of ['Overview', 'Technologies Used', 'Features', 'Personas',
      'User Journey Map', 'Grid System', 'Future Improvements']) {
      expect(page.textContent).toContain(heading);
    }
    expect(page.querySelectorAll('.persona-card').length).toBe(3);
    expect(page.querySelector('a[routerLink]')?.getAttribute('href')).toBe('/projects');
  });

  it('opens the matching full persona and clears it when closed', async () => {
    const page: HTMLElement = fixture.nativeElement;
    // Native dialogs require a connected element for showModal().
    document.body.appendChild(page);
    try {
      const cards = page.querySelectorAll<HTMLButtonElement>('.persona-card');
      const dialog = page.querySelector<HTMLDialogElement>('dialog')!;
      for (let index = 0; index < cards.length; index++) {
        cards[index].click();
        fixture.detectChanges();
        expect(dialog.open).toBeTrue();
        expect(dialog.querySelector('img')?.getAttribute('src'))
          .toBe(`/images/Cuisines-Around-Us/full-screen-${index + 1}.jpg`);
        dialog.querySelector<HTMLButtonElement>('.close-persona')!.click();
        await new Promise(resolve => setTimeout(resolve, 30));
        fixture.detectChanges();
        expect(dialog.open).toBeFalse();
        expect(component.selectedPersona()).toBeNull();
      }
    } finally {
      page.remove();
    }
  });
});
