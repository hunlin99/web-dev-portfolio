import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-organic-care',
  imports: [RouterLink],
  templateUrl: './organic-care.component.html',
  styleUrl: './organic-care.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganicCareComponent {}
