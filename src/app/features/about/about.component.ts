import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../layout/header/header.component';

import {
  intro,
  aboutLinks,
  education,
  workExperience,
  activities
} from './about.content';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  intro = intro;

  aboutLinks = aboutLinks;

  education = education;

  workExperience = workExperience;

  activities = activities;

}