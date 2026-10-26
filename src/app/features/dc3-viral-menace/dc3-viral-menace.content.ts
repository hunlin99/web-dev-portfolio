export interface CaseStudyBlock {
  type: 'paragraph' | 'heading' | 'subheading' | 'list';
  text?: string;
  items?: string[];
}
export interface CaseStudyImage {
  src: string; alt: string; caption: string; width: number; height: number;
}
export interface CaseStudySection {
  id: string; title: string; blocks: CaseStudyBlock[]; images?: CaseStudyImage[];
}
export interface Dc3CaseStudy {
  title: string; subtitle: string; summary: string; website: string;
  coverImage: string; coverWidth: number; coverHeight: number;
  metadata: { label: string; value: string }[];
  colors: { name: string; hex: string; ink: string }[];
  sections: CaseStudySection[];
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
      "id": "overview",
      "title": "Project Overview",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Company: S-Qubed Entertainment Inc. Project Type: Professional Co-op Project Timeline: May–August 2025 & May–August 2026 Roles: Web Designer (2025), Web Developer (2026) Location: Toronto, Canada"
        },
        {
          "type": "subheading",
          "text": "Tools & Technologies:"
        },
        {
          "type": "list",
          "items": [
            "Design: Figma",
            "Front-end: Angular, TypeScript, Tailwind CSS",
            "Back-end & CMS: Firebase Authentication, Firestore, Cloud Storage",
            "Deployment: Firebase Hosting",
            "Other: Git, Responsive Testing, Google PageSpeed Insights"
          ]
        },
        {
          "type": "heading",
          "text": "About the Project"
        },
        {
          "type": "paragraph",
          "text": "S-Qubed Entertainment is a game development studio."
        },
        {
          "type": "paragraph",
          "text": "The project focused on creating a responsive website to showcase the studio's games, share updates, and encourage visitors to explore its titles on Steam."
        },
        {
          "type": "paragraph",
          "text": "I worked on this project during two co-op placements."
        },
        {
          "type": "paragraph",
          "text": "In 2025, I worked as a Web Designer, contributing to the website's structure, visual design, and responsive layouts."
        },
        {
          "type": "paragraph",
          "text": "In 2026, I returned as a Web Developer to complete the website, develop a custom content management system (CMS), and deploy the project."
        },
        {
          "type": "paragraph",
          "text": "This experience allowed me to participate in both the design and development stages of a real company website."
        }
      ],
      "images": [
        {
          "src": "/images/DC3-Viral-Menace/DC3-Viral-Menace-project-img.jpg",
          "alt": "DC3: Viral Menace website project showcase",
          "caption": "Website project showcase.",
          "width": 5693,
          "height": 3201
        }
      ]
    },
    {
      "id": "goals",
      "title": "Project Goals",
      "blocks": [
        {
          "type": "paragraph",
          "text": "The website needed to introduce S-Qubed Entertainment's games while supporting the studio's promotional and communication goals."
        },
        {
          "type": "paragraph",
          "text": "The project focused on four main objectives:"
        },
        {
          "type": "subheading",
          "text": "01 — Increase Steam Wishlists"
        },
        {
          "type": "paragraph",
          "text": "Encourage visitors to explore the studio's games on Steam and add them to their wishlists."
        },
        {
          "type": "subheading",
          "text": "02 — Encourage Newsletter Sign-ups"
        },
        {
          "type": "paragraph",
          "text": "Provide a way for visitors to subscribe to updates about the studio and its games."
        },
        {
          "type": "subheading",
          "text": "03 — Connect Visitors with Social Media"
        },
        {
          "type": "paragraph",
          "text": "Make social media channels easy to find and access."
        },
        {
          "type": "subheading",
          "text": "04 — Share News and Updates"
        },
        {
          "type": "paragraph",
          "text": "Create a blog section for publishing articles, game news, and company updates."
        },
        {
          "type": "paragraph",
          "text": "These goals informed the website's structure, content sections, and calls to action."
        }
      ]
    },
    {
      "id": "responsibilities",
      "title": "My Responsibilities",
      "blocks": [
        {
          "type": "heading",
          "text": "Phase 1 — Website Design (2025)"
        },
        {
          "type": "paragraph",
          "text": "During my first co-op placement, I contributed to the design process."
        },
        {
          "type": "paragraph",
          "text": "My responsibilities included:"
        },
        {
          "type": "list",
          "items": [
            "Participating in brainstorming and design discussions.",
            "Contributing to the website sitemap and information architecture.",
            "Creating wireframes and visual mockups.",
            "Designing the website's visual style.",
            "Creating responsive layouts.",
            "Translating UI designs into front-end interfaces."
          ]
        },
        {
          "type": "heading",
          "text": "Phase 2 — Website Development (2026)"
        },
        {
          "type": "paragraph",
          "text": "I returned to S-Qubed Entertainment in 2026 as a Web Developer."
        },
        {
          "type": "paragraph",
          "text": "My responsibilities included:"
        },
        {
          "type": "list",
          "items": [
            "Completing the responsive website.",
            "Developing a custom CMS for managing articles.",
            "Implementing administrator authentication.",
            "Connecting the website to Firebase services.",
            "Managing hosting, security rules, and deployment.",
            "Improving SEO and optimizing images."
          ]
        },
        {
          "type": "paragraph",
          "text": "The two placements helped me understand how design decisions connect to technical implementation."
        }
      ]
    },
    {
      "id": "architecture",
      "title": "Information Architecture",
      "blocks": [
        {
          "type": "heading",
          "text": "Organizing the Website Content"
        },
        {
          "type": "paragraph",
          "text": "Before working on detailed visuals, I contributed to the website's sitemap."
        },
        {
          "type": "paragraph",
          "text": "The sitemap organized the website into four main sections:"
        },
        {
          "type": "list",
          "items": [
            "Home: Introduce the featured game, show its trailer and gameplay, and encourage visitors to take action.",
            "Products: Showcase games, published works, and visual media.",
            "About: Introduce the studio, its values, team, and contact information.",
            "Blog: Display articles and provide access to individual article pages."
          ]
        },
        {
          "type": "paragraph",
          "text": "The Home page was designed to highlight the featured game, DC3: Viral Menace, while the other sections provided additional information about the studio."
        },
        {
          "type": "paragraph",
          "text": "The sitemap gave the project a structure for organizing content and planning navigation."
        }
      ],
      "images": [
        {
          "src": "/images/DC3-Viral-Menace/dc3-viral-menace-sitemap.png",
          "alt": "S-Qubed website sitemap with Home, Products, About, and Blog sections",
          "caption": "Website sitemap showing the main navigation and content structure.",
          "width": 1709,
          "height": 1758
        }
      ]
    },
    {
      "id": "wireframing",
      "title": "Wireframing",
      "blocks": [
        {
          "type": "heading",
          "text": "Exploring the Page Layout"
        },
        {
          "type": "paragraph",
          "text": "I worked on low-fidelity wireframes to organize content before applying detailed visual styles."
        },
        {
          "type": "paragraph",
          "text": "The early layouts explored how to present the featured game, gameplay information, character artwork, and promotional content."
        },
        {
          "type": "paragraph",
          "text": "The design included several key sections:"
        },
        {
          "type": "subheading",
          "text": "Hero Section"
        },
        {
          "type": "paragraph",
          "text": "Placed the featured game and Steam call to action near the top of the page."
        },
        {
          "type": "subheading",
          "text": "Game Trailer"
        },
        {
          "type": "paragraph",
          "text": "Provided a video section to introduce the game."
        },
        {
          "type": "subheading",
          "text": "Gameplay Showcase"
        },
        {
          "type": "paragraph",
          "text": "Used screenshots and short descriptions to explain gameplay features."
        },
        {
          "type": "subheading",
          "text": "Character Artwork"
        },
        {
          "type": "paragraph",
          "text": "Introduced the game's characters and visual identity."
        },
        {
          "type": "subheading",
          "text": "Additional Content"
        },
        {
          "type": "paragraph",
          "text": "Included artwork, music samples, newsletter registration, and social media links."
        },
        {
          "type": "paragraph",
          "text": "The wireframes helped establish the order of the content and the overall page structure."
        }
      ]
    },
    {
      "id": "visual-design",
      "title": "Visual Design",
      "blocks": [
        {
          "type": "heading",
          "text": "Creating a Visual Style Inspired by the Game"
        },
        {
          "type": "paragraph",
          "text": "The website needed to showcase the game's artwork while keeping its content readable."
        },
        {
          "type": "paragraph",
          "text": "I developed a visual direction using dark blue backgrounds, bright yellow highlights, and comic-inspired shapes."
        },
        {
          "type": "paragraph",
          "text": "The visual style included:"
        },
        {
          "type": "list",
          "items": [
            "Dark backgrounds to support the game's visual identity.",
            "Yellow highlights for important headings and calls to action.",
            "Light-colored content panels for readability.",
            "Angular shapes and speech bubbles inspired by comic books.",
            "Game artwork and screenshots throughout the page."
          ]
        },
        {
          "type": "heading",
          "text": "Color Palette"
        },
        {
          "type": "subheading",
          "text": "Dark Navy — #021B2E"
        },
        {
          "type": "paragraph",
          "text": "Used for dark backgrounds and text."
        },
        {
          "type": "subheading",
          "text": "Dark Gray — #3B454E"
        },
        {
          "type": "paragraph",
          "text": "Used for text and shadow details."
        },
        {
          "type": "subheading",
          "text": "Blue — #274A5D"
        },
        {
          "type": "paragraph",
          "text": "Used as a main background color."
        },
        {
          "type": "subheading",
          "text": "Off-White — #F7F5E8"
        },
        {
          "type": "paragraph",
          "text": "Used for light content sections."
        },
        {
          "type": "subheading",
          "text": "Light Blue — #DCF2FD"
        },
        {
          "type": "paragraph",
          "text": "Used for highlighted content areas."
        },
        {
          "type": "subheading",
          "text": "Yellow — #FED001"
        },
        {
          "type": "paragraph",
          "text": "Used for important headings and calls to action."
        },
        {
          "type": "paragraph",
          "text": "These colors helped connect the website to the game's visual style while separating different content sections."
        }
      ]
    },
    {
      "id": "high-fidelity",
      "title": "High-Fidelity Design",
      "blocks": [
        {
          "type": "heading",
          "text": "Bringing the Layout and Visual Style Together"
        },
        {
          "type": "paragraph",
          "text": "After establishing the page structure and visual direction, I developed high-fidelity designs."
        },
        {
          "type": "paragraph",
          "text": "The designs combined game artwork, typography, colored panels, and interactive elements."
        },
        {
          "type": "heading",
          "text": "Hero and Trailer Sections"
        },
        {
          "type": "paragraph",
          "text": "The hero section used the featured game's artwork and a prominent Steam wishlist button."
        },
        {
          "type": "paragraph",
          "text": "The trailer section appeared directly below, allowing visitors to explore the game through video."
        },
        {
          "type": "heading",
          "text": "Gameplay Showcase"
        },
        {
          "type": "paragraph",
          "text": "Gameplay screenshots were paired with short descriptions to introduce the game's features."
        },
        {
          "type": "paragraph",
          "text": "Angled dividers and alternating layouts helped separate each gameplay section."
        },
        {
          "type": "heading",
          "text": "Character and Artwork Sections"
        },
        {
          "type": "paragraph",
          "text": "The character section highlighted the game's artwork and included smaller character selections."
        },
        {
          "type": "paragraph",
          "text": "The artwork section explored a comic-book-inspired presentation."
        },
        {
          "type": "heading",
          "text": "Newsletter and Social Links"
        },
        {
          "type": "paragraph",
          "text": "The lower part of the page included a newsletter registration section and links to the studio's social channels."
        }
      ]
    },
    {
      "id": "iteration",
      "title": "Design Iteration",
      "blocks": [
        {
          "type": "heading",
          "text": "Refining the Interface"
        },
        {
          "type": "paragraph",
          "text": "As the design developed, I made changes to improve the clarity and consistency of the interface."
        },
        {
          "type": "paragraph",
          "text": "The main changes focused on calls to action, readability, and visual organization."
        },
        {
          "type": "heading",
          "text": "01 — Making the Steam Button Clearer"
        },
        {
          "type": "paragraph",
          "text": "The earlier hero design included two smaller buttons: \"Wishlist\" and \"Learn More.\""
        },
        {
          "type": "paragraph",
          "text": "In a later iteration, I changed the main button to a wider, more noticeable call to action labeled \"Wishlist on Steam Now.\""
        },
        {
          "type": "paragraph",
          "text": "This made the intended action more explicit and gave it greater visual emphasis."
        },
        {
          "type": "heading",
          "text": "02 — Improving Text Readability"
        },
        {
          "type": "paragraph",
          "text": "The gameplay sections originally used several divided content areas."
        },
        {
          "type": "paragraph",
          "text": "I reduced the number of visual splits and introduced dark gradients behind text."
        },
        {
          "type": "paragraph",
          "text": "This was intended to improve readability while keeping the gameplay screenshots visible."
        },
        {
          "type": "heading",
          "text": "03 — Strengthening Section Hierarchy"
        },
        {
          "type": "paragraph",
          "text": "I used bright section headings to distinguish content areas."
        },
        {
          "type": "paragraph",
          "text": "For example, the Character Art section received a yellow title block, making it easier to identify within the long page."
        },
        {
          "type": "heading",
          "text": "04 — Refining the Color Balance"
        },
        {
          "type": "paragraph",
          "text": "I adjusted the use of blue, yellow, and light-colored panels to create a more consistent visual style."
        },
        {
          "type": "paragraph",
          "text": "The goal was to keep the website visually connected to the game's artwork without making the content difficult to read."
        }
      ],
      "images": [
        {
          "src": "/images/DC3-Viral-Menace/Design-iteration.png",
          "alt": "Progression from initial wireframe to refined DC3 visual design",
          "caption": "Progression from the initial wireframe to the refined visual design.",
          "width": 3103,
          "height": 2273
        }
      ]
    },
    {
      "id": "development",
      "title": "Responsive Website Development",
      "blocks": [
        {
          "type": "heading",
          "text": "Turning the Designs into a Functional Website"
        },
        {
          "type": "paragraph",
          "text": "During my co-op placements, I translated the visual designs into responsive interfaces."
        },
        {
          "type": "paragraph",
          "text": "The website was developed using Angular, TypeScript, and Tailwind CSS."
        },
        {
          "type": "paragraph",
          "text": "I worked on:"
        },
        {
          "type": "list",
          "items": [
            "Implementing page layouts and navigation.",
            "Creating reusable components.",
            "Supporting different screen sizes.",
            "Maintaining visual consistency between designs and implementation.",
            "Resolving layout and implementation issues."
          ]
        },
        {
          "type": "paragraph",
          "text": "Working on the front end helped me understand how design decisions affect development."
        },
        {
          "type": "paragraph",
          "text": "It also gave me experience adjusting interfaces to work across different devices."
        }
      ]
    },
    {
      "id": "cms",
      "title": "Custom Content Management System",
      "blocks": [
        {
          "type": "heading",
          "text": "Making Website Content Easier to Manage"
        },
        {
          "type": "paragraph",
          "text": "During my second co-op placement in 2026, I developed a custom CMS for S-Qubed Entertainment."
        },
        {
          "type": "paragraph",
          "text": "The CMS supports article management without requiring content to be edited directly in the website's source code."
        },
        {
          "type": "paragraph",
          "text": "It uses Firebase Authentication, Firestore, and Cloud Storage."
        },
        {
          "type": "heading",
          "text": "Key Features"
        },
        {
          "type": "subheading",
          "text": "Administrator Login"
        },
        {
          "type": "paragraph",
          "text": "Firebase Authentication provides secure login for administrators."
        },
        {
          "type": "subheading",
          "text": "Article Management"
        },
        {
          "type": "paragraph",
          "text": "Administrators can create, view, edit, and delete articles."
        },
        {
          "type": "subheading",
          "text": "Publishing Workflow"
        },
        {
          "type": "paragraph",
          "text": "The CMS supports managing articles through the publishing process."
        },
        {
          "type": "subheading",
          "text": "Image Uploads"
        },
        {
          "type": "paragraph",
          "text": "Cloud Storage supports image uploads for article content."
        },
        {
          "type": "subheading",
          "text": "Database Integration"
        },
        {
          "type": "paragraph",
          "text": "Firestore stores the article data used by the website and CMS."
        },
        {
          "type": "paragraph",
          "text": "The CMS became an important part of the completed website by supporting ongoing content management."
        }
      ]
    },
    {
      "id": "deployment",
      "title": "Deployment and SEO",
      "blocks": [
        {
          "type": "heading",
          "text": "Preparing the Website for Production"
        },
        {
          "type": "paragraph",
          "text": "Beyond the interface and CMS, I also worked on the website's production setup."
        },
        {
          "type": "paragraph",
          "text": "This included:"
        },
        {
          "type": "list",
          "items": [
            "Configuring Firebase Hosting.",
            "Connecting Firestore and Cloud Storage.",
            "Managing Firebase security rules.",
            "Configuring the custom domain.",
            "Handling production deployments.",
            "Troubleshooting development and deployment issues."
          ]
        },
        {
          "type": "heading",
          "text": "SEO Improvements"
        },
        {
          "type": "paragraph",
          "text": "I also worked on technical and on-page SEO."
        },
        {
          "type": "paragraph",
          "text": "The improvements included:"
        },
        {
          "type": "list",
          "items": [
            "Updating page metadata.",
            "Configuring the sitemap and robots settings.",
            "Improving search engine crawlability.",
            "Optimizing website images."
          ]
        },
        {
          "type": "paragraph",
          "text": "Following these improvements, the website achieved a 90+ SEO score in Google PageSpeed Insights."
        },
        {
          "type": "paragraph",
          "text": "This provided a measurable result for the technical improvements made during development."
        }
      ]
    },
    {
      "id": "outcome",
      "title": "Final Outcome",
      "blocks": [
        {
          "type": "heading",
          "text": "From Website Design to a Completed Product"
        },
        {
          "type": "paragraph",
          "text": "The project developed across two co-op placements."
        },
        {
          "type": "paragraph",
          "text": "In 2025, I helped establish the website's structure, layouts, and visual design."
        },
        {
          "type": "paragraph",
          "text": "In 2026, I returned to complete the website, build its CMS, and manage the production deployment."
        },
        {
          "type": "heading",
          "text": "Project Deliverables"
        },
        {
          "type": "list",
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
        {
          "type": "paragraph",
          "text": "The final result was a completed website and content management system that supports the studio's game promotion and content publishing needs."
        }
      ]
    },
    {
      "id": "reflection",
      "title": "Reflection",
      "blocks": [
        {
          "type": "heading",
          "text": "What I Learned"
        },
        {
          "type": "subheading",
          "text": "01 — Design and Development Are Connected"
        },
        {
          "type": "paragraph",
          "text": "Working on both design and development helped me understand how visual decisions translate into functional interfaces."
        },
        {
          "type": "paragraph",
          "text": "I gained more experience considering responsive behavior, reusable components, and implementation requirements during the design process."
        },
        {
          "type": "subheading",
          "text": "02 — Clear Content Structure Matters"
        },
        {
          "type": "paragraph",
          "text": "Creating wireframes and contributing to the sitemap helped me understand the importance of organizing content before focusing on visual details."
        },
        {
          "type": "paragraph",
          "text": "This was especially useful for a website containing game information, media, company information, and blog articles."
        },
        {
          "type": "subheading",
          "text": "03 — Visual Design Should Support the Content"
        },
        {
          "type": "paragraph",
          "text": "The project gave me experience balancing expressive game artwork with readable website content."
        },
        {
          "type": "paragraph",
          "text": "I learned to use color, spacing, section headings, and layout changes to make the content easier to follow."
        },
        {
          "type": "subheading",
          "text": "04 — A Website Needs More Than a Front End"
        },
        {
          "type": "paragraph",
          "text": "Building the CMS and managing deployment helped me understand the systems that support a website after the initial design is completed."
        },
        {
          "type": "paragraph",
          "text": "I learned how content management, authentication, data storage, security, and SEO contribute to a working product."
        },
        {
          "type": "heading",
          "text": "Final Thoughts"
        },
        {
          "type": "paragraph",
          "text": "This project gave me the opportunity to contribute to a website from its early design stages through development and deployment."
        },
        {
          "type": "paragraph",
          "text": "As a junior designer, the most valuable part of this experience was understanding how design ideas become a functional product and how technical requirements can influence design decisions."
        }
      ]
    }
  ],
  "coverWidth": 2773,
  "coverHeight": 1532
};
