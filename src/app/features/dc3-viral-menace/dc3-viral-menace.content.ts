export interface Dc3CaseStudy {
  title: string; subtitle: string; summary: string; website: string;
  coverImage: string; coverWidth: number; coverHeight: number;
  metadata: { label: string; value: string }[];
  colors: { name: string; hex: string; ink: string }[];
  sections: { id: string; title: string }[];
}

export const dc3Project: Dc3CaseStudy = {
  "title": "DC3: Viral Menace",
  "subtitle": "S-Qubed Entertainment — Website Redesign & Development",
  "summary": "Designing and developing a responsive game studio website with a custom content management system.",
  "website": "https://dc3-viral-menace-web-dev.web.app/",
  "coverImage": "/images/DC3-Viral-Menace/dc3-viral-menace-design-mockup.png",
  "metadata": [
    {
      "label": "Company",
      "value": "S-Qubed Entertainment Inc."
    },
    {
      "label": "Project",
      "value": "Professional Co-op Project"
    },
    {
      "label": "Timeline",
      "value": "May–August 2025 & May–August 2026"
    },
    {
      "label": "Roles",
      "value": "Web Designer (2025) · Web Developer (2026)"
    },
    {
      "label": "Location",
      "value": "Toronto, Canada"
    },
    {
      "label": "Tools",
      "value": "Figma · Angular · TypeScript · Tailwind CSS · Firebase · Git"
    }
  ],
  "colors": [
    {
      "name": "Dark Navy",
      "hex": "#021B2E",
      "ink": "#FFFFFF"
    },
    {
      "name": "Dark Gray",
      "hex": "#3B454E",
      "ink": "#FFFFFF"
    },
    {
      "name": "Blue",
      "hex": "#274A5D",
      "ink": "#FFFFFF"
    },
    {
      "name": "Off-White",
      "hex": "#F7F5E8",
      "ink": "#021B2E"
    },
    {
      "name": "Light Blue",
      "hex": "#DCF2FD",
      "ink": "#021B2E"
    },
    {
      "name": "Yellow",
      "hex": "#FED001",
      "ink": "#021B2E"
    }
  ],
  "sections": [
    {
      "id": "goals",
      "title": "Project Goals"
    },
    {
      "id": "responsibilities",
      "title": "My Responsibilities"
    },
    {
      "id": "architecture",
      "title": "Information Architecture"
    },
    {
      "id": "visual-design",
      "title": "Visual Design"
    },
    {
      "id": "high-fidelity",
      "title": "High-Fidelity Design"
    },
    {
      "id": "iteration",
      "title": "Design Iteration"
    },
    {
      "id": "development",
      "title": "Responsive Website Development"
    },
    {
      "id": "cms",
      "title": "Custom Content Management System"
    },
    {
      "id": "outcome",
      "title": "Final Outcome"
    },
    {
      "id": "reflection",
      "title": "Reflection"
    }
  ],
  "coverWidth": 2773,
  "coverHeight": 1532
};
