import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-detail-page-header',
  imports: [RouterLink, HeaderComponent],
  templateUrl: './project-detail-page-header.component.html',
  styleUrl: './project-detail-page-header.component.scss'
})

export class ProjectDetailPageHeaderComponent {

}
