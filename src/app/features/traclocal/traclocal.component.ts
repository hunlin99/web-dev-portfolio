import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectDetailPageHeaderComponent } from '../../shared/components/project-detail-page-header/project-detail-page-header.component';
import { ProjectWebsiteButtonComponent } from '../../shared/components/project-website-button/project-website-button.component';
import { travlocalContent, travlocalProject } from './traclocal.content';

interface PersonaProfile { id: number; thumbnail: string; image: string; }

@Component({
  selector: 'app-traclocal',
  imports: [RouterLink, ProjectDetailPageHeaderComponent, ProjectWebsiteButtonComponent],
  templateUrl: './traclocal.component.html',
  styleUrl: './traclocal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TraclocalComponent {
  readonly personas: readonly PersonaProfile[] = [1, 2].map(id => ({
    id, thumbnail: `/images/TravLocal/persona-${id}-thumbnail.webp`, image: `/images/TravLocal/user${id}.png`
  }));
  readonly selectedPersona = signal<PersonaProfile | null>(null);

  openPersona(persona: PersonaProfile, dialog: HTMLDialogElement): void {
    this.selectedPersona.set(persona);
    dialog.showModal();
  }

  closeOnBackdrop(event: MouseEvent, dialog: HTMLDialogElement): void {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  }

  readonly project = travlocalProject;
  readonly content = travlocalContent;
}
