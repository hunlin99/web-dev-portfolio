import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-health-pocket',
  imports: [RouterLink],
  templateUrl: './health-pocket.component.html',
  styleUrl: './health-pocket.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthPocketComponent {}
