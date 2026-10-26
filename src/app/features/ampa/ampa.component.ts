import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { ampaProject } from './ampa.content';

@Component({
  selector: 'app-ampa',
  imports: [RouterLink, HeaderComponent],
  templateUrl: './ampa.component.html',
  styleUrl: './ampa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmpaComponent {
  readonly project = ampaProject;
}
