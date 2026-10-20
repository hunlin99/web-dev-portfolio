import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectDetailPageHeaderComponent } from '../../shared/components/project-detail-page-header/project-detail-page-header.component';

@Component({
  selector: 'app-traclocal',
  imports: [RouterLink, ProjectDetailPageHeaderComponent],
  templateUrl: './traclocal.component.html',
  styleUrl: './traclocal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TraclocalComponent { }
