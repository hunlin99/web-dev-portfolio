import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // loading = true;

  // hideLoader() {
  //   console.log('Video loaded');
  //   this.loading = false;
  // }
}
