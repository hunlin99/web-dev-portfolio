export interface Dc3CaseStudy {
  title: string; subtitle: string; summary: string; website: string;
  eyebrow: string; visitLabel: string; visitAriaLabel: string; coverAlt: string;
  contentsLabel: string; paletteLabel: string; moreProjectsLabel: string;
  coverImage: string; coverWidth: number; coverHeight: number;
  metadata: { label: string; value: string }[];
  colors: { name: string; hex: string; ink: string }[];
  sections: { id: string; title: string }[];
}

/** Section copy only. Each section keeps its own editable layout in the HTML template.
 * Arrays follow the order of the explicit bindings within that section.
 */
export const dc3Content = {
  "goals": {
    "eyebrow": "01 / THE CASE STUDY",
    "title": "Project Overview & Goals",
    "paragraphs": [
      "The website needed to introduce S-Qubed Entertainment’s games while supporting the studio’s promotional and communication goals. DC3: Viral Menace became the featured game, with its artwork, gameplay, and key actions shaping the page structure."
    ],
    "items": [
      "Increase Steam wishlists.",
      "Encourage newsletter subscriptions.",
      "Connect visitors with social media.",
      "Publish game news and studio updates."
    ],
    "imageAlt": "DC3: Viral Menace website project showcase"
  },
  "responsibilities": {
    "eyebrow": "02 / THE CASE STUDY",
    "title": "My Role & Responsibilities",
    "phases": [
      {
        "title": "2025 — Web Designer",
        "brief": "During my first co-op placement, I contributed to the website’s structure and visual direction before detailed front-end implementation.",
        "items": [
          "Sitemap and information architecture.",
          "Wireframes and visual design.",
          "Responsive UI planning."
        ]
      },
      {
        "title": "2026 — Web Developer",
        "brief": "I returned for a second co-op placement to translate the design into a working website and support its production delivery.",
        "items": [
          "Angular website development.",
          "Custom admin CMS and Firebase integration.",
          "Production deployment and SEO improvements."
        ]
      }
    ]
  },
  "designProcess": {
    "eyebrow": "03 / THE CASE STUDY",
    "title": "Design Process",
    "architecture": {
      "title": "Step 1 — Information Architecture",
      "paragraph": "I contributed to a sitemap organizing Home around the featured game, Products around the studio’s games and media, About around the team and contact details, and Blog around news and individual articles. This structure guided navigation before detailed layouts.",
      "imageAlt": "S-Qubed website sitemap with Home, Products, About, and Blog sections"
    },
    "lowFidelity": {
      "title": "Step 2 — Low-Fidelity Wireframes",
      "paragraph": "Early wireframes established the content hierarchy and layout before adding game artwork and detailed visual styling.",
      "imageAlt": "Low-fidelity wireframes for the S-Qubed website layout"
    },
    "visualDirection": {
      "title": "Step 3 — Visual Direction & High-Fidelity Design",
      "items": [
        "Dark backgrounds support the game’s visual identity.",
        "Yellow highlights emphasize calls to action.",
        "Light content panels improve readability.",
        "Comic-inspired shapes connect the website to the game."
      ],
      "paragraph": "The high-fidelity mockup brings this direction into gameplay panels, character selections, and promotional actions.",
      "imageAlt": "DC3 high-fidelity website design with game artwork and promotional sections"
    }
  },
  "iteration": {
    "eyebrow": "04 / THE CASE STUDY",
    "title": "Design Decisions & Iterations",
    "cases": [
      {
        "title": "Stronger Steam CTA",
        "problem": "Two smaller hero actions competed for attention.",
        "change": "I replaced them with a wider “Wishlist on Steam Now” button.",
        "intention": "Make the primary action explicit and easier to identify."
      },
      {
        "title": "Improved Text Readability",
        "problem": "Divided gameplay areas placed text against busy screenshots.",
        "change": "I simplified the content divisions and added dark gradients behind text.",
        "intention": "Keep the artwork visible while giving copy a clearer background."
      },
      {
        "title": "Clearer Visual Hierarchy",
        "problem": "Content areas needed stronger separation on the long page.",
        "change": "I used contrasting section headings, including a yellow Character Art title block.",
        "intention": "Help visitors distinguish sections while scanning."
      }
    ],
    "note": "These changes describe design intent, not measured usability improvements.",
    "imageAlt": "Progression from initial wireframe to refined DC3 visual design"
  },
  "development": {
    "eyebrow": "05 / THE CASE STUDY",
    "title": "Development & CMS",
    "websiteTitle": "Responsive Website Development",
    "paragraph": "I translated the game-inspired designs into responsive Angular interfaces. Selecting a character thumbnail updates the featured illustration and character details without leaving the section. CSS clip-path shapes angled panels and custom dividers, carrying the comic-book direction into layouts that adapt across screen sizes. The two silent demonstrations show these interactions and layout treatments in the implemented website.",
    "videos": [
      {
        "title": "Interactive character showcase",
        "label": "Silent demonstration of selecting character thumbnails"
      },
      {
        "title": "Comic-book layouts with CSS clip-path",
        "label": "Silent demonstration of comic-book layouts using CSS clip-path"
      }
    ],
    "cms": {
      "title": "Custom Content Management System",
      "paragraph": "I built a custom admin CMS so administrators can update website content without editing source code. The interface connects article editing and publishing to the same Firebase data used by the public website.",
      "items": [
        "Firebase Authentication for administrator login.",
        "Firestore for article data and database integration.",
        "Cloud Storage for article image uploads.",
        "Article CRUD: create, view, edit, and delete.",
        "Publishing workflow for managing articles before release."
      ],
      "images": [
        {
          "alt": "S-Qubed custom CMS administration interface, first view"
        },
        {
          "alt": "S-Qubed custom CMS administration interface, second view"
        }
      ]
    }
  },
  "outcome": {
    "eyebrow": "06 / THE CASE STUDY",
    "title": "Final Outcomes",
    "items": [
      {
        "title": "Responsive Production Website",
        "text": "Completed and deployed the website for S-Qubed Entertainment, bringing the studio’s game artwork and promotional content into responsive interfaces."
      },
      {
        "title": "Custom Admin CMS",
        "text": "Delivered the content-management interface supporting ongoing article updates by administrators."
      },
      {
        "title": "SEO Optimization",
        "text": "Achieved a 90+ PageSpeed Insights SEO score through the website’s SEO optimization work."
      }
    ],
    "note": "This is the reported SEO result, not a performance score or evidence of traffic, wishlist, or conversion growth."
  },
  "reflection": {
    "eyebrow": "07 / THE CASE STUDY",
    "title": "Reflection",
    "paragraph": "Working across design and development strengthened my understanding of how visual decisions, responsive implementation, content management, and deployment requirements influence one another. Returning to implement the design helped me connect the intended experience with the practical work needed to deliver and maintain a production website."
  }
} as const;

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
    { "id": "goals", "title": dc3Content.goals.title },
    { "id": "responsibilities", "title": dc3Content.responsibilities.title },
    { "id": "design-process", "title": dc3Content.designProcess.title },
    { "id": "iteration", "title": dc3Content.iteration.title },
    { "id": "development", "title": dc3Content.development.title },
    { "id": "outcome", "title": dc3Content.outcome.title },
    { "id": "reflection", "title": dc3Content.reflection.title }
  ],
  "coverWidth": 2773,
  "coverHeight": 1532,
  "eyebrow": "S-QUBED ENTERTAINMENT · DESIGN & DEVELOPMENT",
  "visitLabel": "Visit S-Qubed Entertainment",
  "visitAriaLabel": "Visit S-Qubed Entertainment website (opens in a new tab)",
  "coverAlt": "DC3: Viral Menace website design mockup",
  "contentsLabel": "Case study sections",
  "paletteLabel": "Website color palette",
  "moreProjectsLabel": "← Explore more projects"
};
