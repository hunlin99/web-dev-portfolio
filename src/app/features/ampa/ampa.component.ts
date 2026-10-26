import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { ampaProject } from './ampa.content';
import { ProjectDetailPageHeaderComponent } from '../../shared/components/project-detail-page-header/project-detail-page-header.component';

@Component({
  selector: 'app-ampa',
  imports: [RouterLink, HeaderComponent, ProjectDetailPageHeaderComponent],
  templateUrl: './ampa.component.html',
  styleUrl: './ampa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmpaComponent {
  readonly project = ampaProject;
}
