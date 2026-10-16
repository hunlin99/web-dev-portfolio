import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Persona {
  id: number;
  thumbnail: string;
  image: string;
}

@Component({
  selector: 'app-cuisines-around-us',
  imports: [RouterLink],
  templateUrl: './cuisines-around-us.component.html',
  styleUrl: './cuisines-around-us.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuisinesAroundUsComponent {
  readonly personas: readonly Persona[] = [1, 2, 3].map(id => ({
    id,
    thumbnail: `/images/Cuisines-Around-Us/thumbnail-${id}.png`,
    image: `/images/Cuisines-Around-Us/full-screen-${id}.jpg`
  }));
  readonly selectedPersona = signal<Persona | null>(null);

  openPersona(persona: Persona, dialog: HTMLDialogElement): void {
    this.selectedPersona.set(persona);
    dialog.showModal();
  }

  closeOnBackdrop(event: MouseEvent, dialog: HTMLDialogElement): void {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  }
}
