import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { dc3Project } from './dc3-viral-menace.content';
import { ProjectDetailPageHeaderComponent } from '../../shared/components/project-detail-page-header/project-detail-page-header.component';

@Component({
  selector: 'app-dc3-viral-menace',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    HeaderComponent,
    ProjectDetailPageHeaderComponent
  ],
  templateUrl: './dc3-viral-menace.component.html',
  styleUrl: './dc3-viral-menace.component.css'
})
export class DC3ViralMenaceComponent {

  project = dc3Project;

}