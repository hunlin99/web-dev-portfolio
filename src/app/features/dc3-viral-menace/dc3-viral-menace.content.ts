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
  lowFidelity: {
    eyebrow: '04 / THE CASE STUDY',
    title: 'Low-Fidelity Design',
    brief: 'Early wireframes establish the content hierarchy and layout before adding game artwork and detailed visual styling.',
    imageAlt: 'Low-fidelity wireframes for the S-Qubed website layout'
  },
  "goals": {
    "eyebrow": "01 / THE CASE STUDY",
    "title": "Project Goals",
    "paragraphs": [
      "The website needed to introduce S-Qubed Entertainment's games while supporting the studio's promotional and communication goals.",
      "The project focused on four main objectives:",
      "Encourage visitors to explore the studio's games on Steam and add them to their wishlists.",
      "Provide a way for visitors to subscribe to updates about the studio and its games.",
      "Make social media channels easy to find and access.",
      "Create a blog section for publishing articles, game news, and company updates.",
      "These goals informed the website's structure, content sections, and calls to action."
    ],
    "subheadings": [
      "01 — Increase Steam Wishlists",
      "02 — Encourage Newsletter Sign-ups",
      "03 — Connect Visitors with Social Media",
      "04 — Share News and Updates"
    ],
    "images": [
      {
        "alt": "DC3: Viral Menace website project showcase"
      }
    ]
  },
  "responsibilities": {
    "eyebrow": "02 / THE CASE STUDY",
    "title": "My Responsibilities",
    "headings": [
      "Phase 1 — Website Design (2025)",
      "Phase 2 — Website Development (2026)"
    ],
    "paragraphs": [
      "During my first co-op placement, I contributed to the design process.",
      "My responsibilities included:",
      "I returned to S-Qubed Entertainment in 2026 as a Web Developer.",
      "My responsibilities included:",
      "The two placements helped me understand how design decisions connect to technical implementation."
    ],
    "items": [
      "Participating in brainstorming and design discussions.",
      "Contributing to the website sitemap and information architecture.",
      "Creating wireframes and visual mockups.",
      "Designing the website's visual style.",
      "Creating responsive layouts.",
      "Translating UI designs into front-end interfaces.",
      "Completing the responsive website.",
      "Developing a custom CMS for managing articles.",
      "Implementing administrator authentication.",
      "Connecting the website to Firebase services.",
      "Managing hosting, security rules, and deployment.",
      "Improving SEO and optimizing images."
    ]
  },
  "architecture": {
    "eyebrow": "03 / THE CASE STUDY",
    "title": "Information Architecture",
    "headings": [
      "Organizing the Website Content"
    ],
    "paragraphs": [
      "Before working on detailed visuals, I contributed to the website's sitemap.",
      "The sitemap organized the website into four main sections:",
      "The Home page was designed to highlight the featured game, DC3: Viral Menace, while the other sections provided additional information about the studio.",
      "The sitemap gave the project a structure for organizing content and planning navigation."
    ],
    "items": [
      "Home: Introduce the featured game, show its trailer and gameplay, and encourage visitors to take action.",
      "Products: Showcase games, published works, and visual media.",
      "About: Introduce the studio, its values, team, and contact information.",
      "Blog: Display articles and provide access to individual article pages."
    ],
    "images": [
      {
        "alt": "S-Qubed website sitemap with Home, Products, About, and Blog sections"
      }
    ]
  },
  "visualDesign": {
    "eyebrow": "05 / THE CASE STUDY",
    "title": "Visual Design",
    "headings": [
      "Creating a Visual Style Inspired by the Game"
    ],
    "paragraphs": [
      "The website needed to showcase the game's artwork while keeping its content readable.",
      "The visual style included:"
    ],
    "items": [
      "Dark backgrounds to support the game's visual identity.",
      "Yellow highlights for important headings and calls to action.",
      "Light-colored content panels for readability.",
      "Angular shapes and speech bubbles inspired by comic books.",
      "Game artwork and screenshots throughout the page."
    ]
  },
  "highFidelity": {
    "eyebrow": "06 / THE CASE STUDY",
    "title": "High-Fidelity Design",
    "paragraphs": [
      "The high-fidelity design brings together game artwork, a prominent Steam wishlist action, gameplay panels, character selections, and newsletter and social links in a comic-inspired layout."
    ],
    "images": [
      {
        "alt": "DC3 high-fidelity website design with game artwork and promotional sections"
      }
    ]
  },
  "iteration": {
    "eyebrow": "07 / THE CASE STUDY",
    "title": "Design Iteration",
    "headings": [
      "Refining the Interface",
      "01 — Making the Steam Button Clearer",
      "02 — Improving Text Readability",
      "03 — Strengthening Section Hierarchy",
      "04 — Refining the Color Balance"
    ],
    "paragraphs": [
      "As the design developed, I made changes to improve the clarity and consistency of the interface.",
      "The main changes focused on calls to action, readability, and visual organization.",
      "The earlier hero design included two smaller buttons: \"Wishlist\" and \"Learn More.\"",
      "In a later iteration, I changed the main button to a wider, more noticeable call to action labeled \"Wishlist on Steam Now.\"",
      "This made the intended action more explicit and gave it greater visual emphasis.",
      "The gameplay sections originally used several divided content areas.",
      "I reduced the number of visual splits and introduced dark gradients behind text.",
      "This was intended to improve readability while keeping the gameplay screenshots visible.",
      "I used bright section headings to distinguish content areas.",
      "For example, the Character Art section received a yellow title block, making it easier to identify within the long page.",
      "I adjusted the use of blue, yellow, and light-colored panels to create a more consistent visual style.",
      "The goal was to keep the website visually connected to the game's artwork without making the content difficult to read."
    ],
    "images": [
      {
        "alt": "Progression from initial wireframe to refined DC3 visual design"
      }
    ]
  },
  "development": {
    "eyebrow": "08 / THE CASE STUDY",
    "title": "Responsive Website Development",
    "paragraphs": [
      "I translated the game-inspired designs into responsive Angular interfaces, focusing on character interactions and custom comic-book layouts.",
      "Selecting a character thumbnail updates the featured illustration and character details, letting visitors explore the cast without leaving the section.",
      "I used CSS clip-path to shape angled panels and custom dividers, bringing the comic-book visual direction into layouts that adapt to different screen sizes."
    ],
    "headings": [
      "Interactive character showcase",
      "Comic-book layouts with CSS clip-path"
    ],
    "videos": [
      {
        "label": "Silent demonstration of selecting character thumbnails"
      },
      {
        "label": "Silent demonstration of comic-book layouts using CSS clip-path"
      }
    ]
  },
  "cms": {
    "eyebrow": "09 / THE CASE STUDY",
    "title": "Custom Content Management System",
    "headings": [
      "Making Website Content Easier to Manage",
      "Key Features"
    ],
    "paragraphs": [
      "The CMS supports article management without requiring content to be edited directly in the website's source code.",
      "It uses Firebase Authentication, Firestore, and Cloud Storage.",
      "Firebase Authentication provides secure login for administrators.",
      "Administrators can create, view, edit, and delete articles.",
      "The CMS supports managing articles through the publishing process.",
      "Cloud Storage supports image uploads for article content.",
      "Firestore stores the article data used by the website and CMS.",
      "The CMS became an important part of the completed website by supporting ongoing content management."
    ],
    "subheadings": [
      "Administrator Login",
      "Article Management",
      "Publishing Workflow",
      "Image Uploads",
      "Database Integration"
    ],
    "images": [
      {
        "alt": "S-Qubed custom CMS administration interface, first view"
      },
      {
        "alt": "S-Qubed custom CMS administration interface, second view"
      }
    ]
  },
  "outcome": {
    "eyebrow": "10 / THE CASE STUDY",
    "title": "Final Outcome",
    "headings": [
      "From Website Design to a Completed Product",
      "Project Deliverables"
    ],
    "paragraphs": [
      "The project developed across two co-op placements.",
      "In 2025, I helped establish the website's structure, layouts, and visual design.",
      "In 2026, I returned to complete the website, build its CMS, and manage the production deployment.",
      "The final result was a completed website and content management system that supports the studio's game promotion and content publishing needs."
    ],
    "items": [
      "Responsive website for S-Qubed Entertainment.",
      "Website navigation and content structure.",
      "Game showcase and promotional sections.",
      "Blog and article pages.",
      "Custom administrator CMS.",
      "Article publishing and image management features.",
      "Firebase hosting and production configuration.",
      "SEO improvements with a 90+ PageSpeed Insights SEO score."
    ]
  },
  "reflection": {
    "eyebrow": "11 / THE CASE STUDY",
    "title": "Reflection",
    "headings": [
      "What I Learned",
      "Final Thoughts"
    ],
    "subheadings": [
      "01 — Design and Development Are Connected",
      "02 — Clear Content Structure Matters",
      "03 — Visual Design Should Support the Content",
      "04 — A Website Needs More Than a Front End"
    ],
    "paragraphs": [
      "Working on both design and development helped me understand how visual decisions translate into functional interfaces.",
      "I gained more experience considering responsive behavior, reusable components, and implementation requirements during the design process.",
      "Creating wireframes and contributing to the sitemap helped me understand the importance of organizing content before focusing on visual details.",
      "This was especially useful for a website containing game information, media, company information, and blog articles.",
      "The project gave me experience balancing expressive game artwork with readable website content.",
      "I learned to use color, spacing, section headings, and layout changes to make the content easier to follow.",
      "Building the CMS and managing deployment helped me understand the systems that support a website after the initial design is completed.",
      "I learned how content management, authentication, data storage, security, and SEO contribute to a working product.",
      "This project gave me the opportunity to contribute to a website from its early design stages through development and deployment.",
      "As a junior designer, the most valuable part of this experience was understanding how design ideas become a functional product and how technical requirements can influence design decisions."
    ]
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
    {
      "id": "goals",
      "title": dc3Content.goals.title
    },
    {
      "id": "responsibilities",
      "title": dc3Content.responsibilities.title
    },
    {
      "id": "architecture",
      "title": dc3Content.architecture.title
    },
    { "id": "low-fidelity", "title": dc3Content.lowFidelity.title },
    {
      "id": "visual-design",
      "title": dc3Content.visualDesign.title
    },
    {
      "id": "high-fidelity",
      "title": dc3Content.highFidelity.title
    },
    {
      "id": "iteration",
      "title": dc3Content.iteration.title
    },
    {
      "id": "development",
      "title": dc3Content.development.title
    },
    {
      "id": "cms",
      "title": dc3Content.cms.title
    },
    {
      "id": "outcome",
      "title": dc3Content.outcome.title
    },
    {
      "id": "reflection",
      "title": dc3Content.reflection.title
    }
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
