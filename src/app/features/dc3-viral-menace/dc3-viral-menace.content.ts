// dc3-viral-menace.content.ts

export interface ProjectPhase {
    title: string;
    organization: string;
    timeline: string;
    description: string;
    roles: string[];
}

export interface TechCategory {
    category: string;
    items: string[];
}

export interface ProjectData {
    title: string;
    subtitle: string;
    website: string;

    coverImage: string;
    mainPagesImage: string;
    sitemapImage: string;
    designIterationImage: string;

    interactiveVideo: string;
    clipPathVideo: string;

    phases: ProjectPhase[];

    goals: string[];

    techStack: TechCategory[];
}

export const dc3Project: ProjectData = {

    title: 'DC3: Viral Menace',

    subtitle: 'Website Redesign & Development',

    website: 'https://dc3-viral-menace-web-dev.web.app/',

    coverImage:
        'images/DC3-Viral-Menace/dc3-viral-menace-design-mockup.png',

    mainPagesImage:
        'images/DC3-Viral-Menace/DC3-Viral-Menace-project-img.jpg',

    sitemapImage:
        'images/DC3-Viral-Menace/dc3-viral-menace-sitemap.png',

    designIterationImage:
        'images/DC3-Viral-Menace/Design-iteration.png',

    interactiveVideo:
        'images/DC3-Viral-Menace/interactive.mp4',

    clipPathVideo:
        'images/DC3-Viral-Menace/clip-path.mp4',

    phases: [

        {
            title: 'Co-op Project',

            organization:
                'George Brown College × S-Qubed Entertainment',

            timeline: 'May – August 2025',

            description:
                'The goal of the co-op project was to design a landing page experience that highlights current and upcoming titles developed by S-Qubed Entertainment.',

            roles: [
                'Participated in design brainstorming and ideation sessions.',
                'Contributed to website structure and sitemap design.',
                'Designed the overall web style and visual system.',
                'Created responsive layouts and component structure.'
            ]
        },

        {
            title: 'Continuation Project',

            organization:
                'Personal Portfolio Development',

            timeline:
                'December 2025 – January 2026',

            description:
                'Following the completion of the co-op placement, I continued developing the project independently during my personal time. This phase focused on front-end and interaction development, extending the original design work into a fully functional prototype. This version is non-commercial and created strictly for demonstration and portfolio purposes.',

            roles: [
                'Developed the site using Angular and Tailwind CSS.',
                'Implemented routing, reusable components, and shared state management.',
                'Ensured responsive behavior and accessibility across devices.'
            ]
        }

    ],

    goals: [

        'Primary: Drive traffic to Steam to increase wishlists.',

        'Secondary: Encourage newsletter sign-ups and developer updates.',

        'Tertiary: Grow social media following.',

        'Additional: Share long-form content through a dedicated Blog section.'

    ],

    techStack: [

        {
            category: 'Design',

            items: [

                'Figma — Wireframes',

                'Visual mockups',

                'Interaction design'

            ]
        },

        {
            category: 'Front-End Development',

            items: [

                'Angular',

                'Tailwind CSS',

                'TypeScript'

            ]
        },

        {
            category: 'Workflow & Other',

            items: [

                'Git',

                'Version Control',

                'Responsive Testing',

                'Asset Optimization'

            ]
        }

    ]

};