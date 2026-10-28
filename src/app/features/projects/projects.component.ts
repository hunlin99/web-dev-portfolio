import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-projects',
  imports: [ScrollRevealDirective, HeaderComponent, CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  // Featured case studies are intentionally ordered, independent of date.
  featuredProjects = [
    { title: "DC3: Viral Menace", type: "Website Design & Full-Stack Development", Skills: "Responsive UI Design, Angular, TypeScript, Tailwind CSS, Firebase, Custom CMS", year: "2025–2026", image: "images/DC3-Viral-Menace/DC3-Viral-Menace-project-img.jpg", link: "/dc3-viral-menace" },
    { title: "AMPA Project", type: "Product Design & Brand Identity", Skills: "Brand Identity, UX Architecture, Design Systems, Interaction Design, Prototyping", year: "2025–2026", image: "images/AMPA/AMPA-project-img.jpg", link: "/ampa" }
  ];

  experienceProjects = [
    { title: "Cuisines Around Us", type: "Web Application Development", Skills: "React, Bootstrap, SQL", year: "2024", image: "images/Cuisines-Around-Us/cuisines-around-us.png", link: "/cuisines-around-us" },
    { title: "TravLocal", type: "Travel App UX/UI Design", Skills: "Figma, User Journeys, Interaction Design, UI Design, Product Pitch", year: "2025", image: "images/TravLocal/TravLocal-image.jpg", link: "/traclocal" },
    { title: "Health Pocket", type: "Mobile App UI Design", Skills: "Figma, Interactive Prototype", year: "2022", image: "images/Health-Pocket/health-pocket-imgpng.png", link: "/health-pocket" }
  ];

  // Temporarily excluded from the list; its route, assets, and component remain available.
  hiddenProjects = [
    { title: "Organic Care", type: "E-commerce Web Design", Skills: "Figma, HTML, CSS", year: "2024", image: "images/Organic-Care/organic-care-img.jpg", link: "/organic-care" }
  ];
}
