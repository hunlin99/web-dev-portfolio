import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectDetailPageHeaderComponent } from '../../shared/components/project-detail-page-header/project-detail-page-header.component';

@Component({
  selector: 'app-organic-care',
  imports: [RouterLink, ProjectDetailPageHeaderComponent],
  templateUrl: './organic-care.component.html',
  styleUrl: './organic-care.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganicCareComponent { }
