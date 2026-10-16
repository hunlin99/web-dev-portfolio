import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-traclocal',
  imports: [RouterLink],
  templateUrl: './traclocal.component.html',
  styleUrl: './traclocal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TraclocalComponent {}
