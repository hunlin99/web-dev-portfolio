import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-projects',
  imports: [HeaderComponent, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  //section title: Web development and design
  webProjects = [
    { title: "DC3: Viral Menace", type: "Full stack Development", Skills: "Figma, Angular,Tailwind, Firebase", year: "2026", image: "images/DC3-Viral-Menace/DC3-Viral-Menace-project-img.jpg", link: "/dc3-viral-menace" },
    { title: "Cuisines Around Us", type: "Full stack Development", Skills: "React,Bootstrap, SQL", year: "2024", image: "images/Cuisines-Around-Us/cuisines-around-us.png", link: "/cuisines-around-us" },
    { title: "AMPA Project", type: "Landing Pages Web Design", Skills: "Prototyping, UX Design", year: "2025", image: "images/AMPA/AMPA-project-img.jpg", link: "https://afroidentity.ca/" },
    { title: "Organic Care", type: "E-commers Web Design", Skills: "Figma, HTML, CSS", year: "2024", image: "images/Organic-Care/organic-care-img.jpg", link: "/organic-care" }
  ]

  //section title: APP development and design
  appProjects = [
    { title: "TracLocal", type: "App design and front end Development", Skills: "Figma, Angular, JavaScript", year: "2025", image: "images/TravLocal/TravLocal-image.jpg", link: "/tracLocal" },
    { title: "Health Pocket", type: "APP UI Design", Skills: "Figma, Interactive Prototype", year: "2022", image: "images/Health-Pocket/health-pocket-imgpng.png", link: "/health-pocket" },
  ]
}
