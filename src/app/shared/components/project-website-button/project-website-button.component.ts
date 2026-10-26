import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** External project link. Appearance can be themed with --project-button-* CSS properties. */
@Component({
  selector: 'app-project-website-button',
  templateUrl: './project-website-button.component.html',
  styleUrl: './project-website-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectWebsiteButtonComponent {
  readonly href = input.required<string>();
  readonly label = input.required<string>();
  readonly ariaLabel = input<string>();
}
