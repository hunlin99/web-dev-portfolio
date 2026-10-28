import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectDetailPageHeaderComponent } from '../../shared/components/project-detail-page-header/project-detail-page-header.component';
import { ProjectWebsiteButtonComponent } from '../../shared/components/project-website-button/project-website-button.component';
import { travlocalContent, travlocalProject } from './traclocal.content';

@Component({
  selector: 'app-traclocal',
  imports: [RouterLink, ProjectDetailPageHeaderComponent, ProjectWebsiteButtonComponent],
  templateUrl: './traclocal.component.html',
  styleUrl: './traclocal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TraclocalComponent {
  readonly project = travlocalProject;
  readonly content = travlocalContent;
}
