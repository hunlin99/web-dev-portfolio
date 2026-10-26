import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ampaProject } from './ampa.content';
import { ProjectDetailPageHeaderComponent } from '../../shared/components/project-detail-page-header/project-detail-page-header.component';

@Component({
  selector: 'app-ampa',
  imports: [RouterLink, ProjectDetailPageHeaderComponent],
  templateUrl: './ampa.component.html',
  styleUrl: './ampa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmpaComponent {
  readonly project = ampaProject;
}
