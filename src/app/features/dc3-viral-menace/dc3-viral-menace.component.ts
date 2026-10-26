import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectDetailPageHeaderComponent } from '../../shared/components/project-detail-page-header/project-detail-page-header.component';
import { dc3Content, dc3Project } from './dc3-viral-menace.content';

@Component({
  selector: 'app-dc3-viral-menace',
  imports: [RouterLink, ProjectDetailPageHeaderComponent],
  templateUrl: './dc3-viral-menace.component.html',
  styleUrl: './dc3-viral-menace.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DC3ViralMenaceComponent {
  readonly project = dc3Project;
  readonly content = dc3Content;
}
