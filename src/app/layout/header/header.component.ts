import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuVisible = false;

  openMenu() {
    this.menuVisible = true;
  }

  closeMenu() {
    this.menuVisible = false;
  }
}
