import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectDetailPageHeaderComponent } from '../../shared/components/project-detail-page-header/project-detail-page-header.component';

@Component({
  selector: 'app-health-pocket',
  imports: [RouterLink, ProjectDetailPageHeaderComponent],
  templateUrl: './health-pocket.component.html',
  styleUrl: './health-pocket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthPocketComponent { }
