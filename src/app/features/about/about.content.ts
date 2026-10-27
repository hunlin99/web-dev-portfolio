// --- TYPES & INTERFACES ---
export interface Intro {
    title: string;
    content: string;
}

export interface AboutLink {
    linkTo: string;
    link: string;
}

export interface Education {
    period: string;
    college: string;
    major: string;
    focus: string;
    gpa?: string; // Optional since not all entries have a GPA
}

export interface WorkHighlightPart {
    text: string;
    bold?: boolean;
    href?: string;
}

export interface WorkExperience {
    period: string;
    jobTitle: string;
    company: string;
    highlights: WorkHighlightPart[][];
    project?: { url: string; external: boolean };
}

export interface Activity {
    period: string;
    jobTitle: string;
    organization: string;
    highlights: string[];
}

// --- DATA ---

export const intro: Intro = {
    title: "About Me",
    content: "Front-End Developer and UI/UX Designer with a background in industrial design and web content management. Skilled in HTML, CSS, JavaScript, React, and UI design, with experience in website management and product development. Passionate about creating user-friendly digital experiences."
};

export const aboutLinks: AboutLink[] = [
    { linkTo: "LinkedIn", link: "https://www.linkedin.com/in/ling-chang-a287621a7/" },
    { linkTo: "GitHub", link: "https://github.com/hunlin99" },
    { linkTo: "Gmail", link: "mailto:christine.chang00226@gmail.com" }
];

export const education: Education[] = [
    {
        period: "2025 - 2026",
        college: "George Brown College",
        major: "Postgraduate Certificate in Mobile Application Development and Strategy",
        focus: "Server-side scripting/Object-oriented programming",
        gpa: "3.70"
    },
    {
        period: "2024 - 2025",
        college: "George Brown College",
        major: "Postgraduate Certificate in Web Development - Front End Design",
        focus: "Interface Design, UI Design, Front-End Development, Project Management",
        gpa: "3.88"
    },
    {
        period: "2018 - 2022",
        college: "Asia Eastern University of Science and Technology",
        major: "B.A. in Industrial and Commercial Design",
        focus: "Product Design, 3D Modeling, UI/UX Design, Mechanical Drafting"
    }
];

export const workExperience: WorkExperience[] = [
    {
        period: "May 2026 - August 2026",
        jobTitle: "Co-op Web Developer",
        project: { url: "https://dc3-viral-menace-web-dev.web.app/", external: true },
        company: "S-Qubed Entertainment Inc. | Toronto, Canada",
        highlights: [
            [{ "text": "Built and maintained responsive production web interfaces and a " }, { "text": "custom CMS", "bold": true }, { "text": ", implementing " }, { "text": "authentication, article CRUD, publishing workflows, image uploads", "bold": true }, { "text": ", and data-driven UI using Firebase services." }],
            [{ "text": "Debugged " }, { "text": "frontend and integration issues", "bold": true }, { "text": " across " }, { "text": "development and production environments", "bold": true }, { "text": ", troubleshooting application behavior, responsive layouts, Firebase data flows, authentication, and deployment issues." }],
            [{ "text": "Translated UI/UX requirements into " }, { "text": "responsive, implementation-ready interfaces", "bold": true }, { "text": ", maintaining usability, visual consistency, and reliable behavior across screen sizes." }],
            [{ "text": "Managed " }, { "text": "Firebase Authentication, Firestore, Cloud Storage", "bold": true }, { "text": ", hosting, security rules, and " }, { "text": "production deployments", "bold": true }, { "text": ", supporting end-to-end delivery of web features." }]
        ]
    },
    {
        period: "May 2025 - Present",
        jobTitle: "UX Designer",
        project: { url: "https://afroidentity.com/", external: true },
        company: "Afroidentity Inc. | Toronto, Canada",
        highlights: [
            [{ "text": "Translated product requirements and user research into " }, { "text": "end-to-end user flows", "bold": true }, { "text": ", responsive interfaces, and " }, { "text": "interactive Figma prototypes", "bold": true }, { "text": " for web and mobile experiences." }],
            [{ "text": "Evaluated interface accessibility and usability using " }, { "text": "WCAG criteria", "bold": true }, { "text": ", identifying issues involving color contrast, typography, component behavior, and responsive presentation." }],
            [{ "text": "Developed and maintained " }, { "text": "reusable UI patterns and design-system guidance", "bold": true }, { "text": ", improving consistency between design specifications and implemented interfaces." }]
        ]
    },
    {
        period: "May 2025 - August 2025",
        jobTitle: "Co-op Web Designer",
        project: { url: "/dc3-viral-menace", external: false },
        company: "S-Qubed Entertainment Inc. | Toronto, Canada",
        highlights: [
            [{ "text": "Created " }, { "text": "responsive web layouts and reusable UI components", "bold": true }, { "text": ", accounting for content behavior across different screen sizes and interface states." }],
            [{ "text": "Prototyped and tested interface concepts", "bold": true }, { "text": " to identify usability, navigation, responsive-layout, and interaction issues before implementation." }],
            [{ "text": "Translated design requirements into structured, " }, { "text": "development-ready specifications", "bold": true }, { "text": ", supporting efficient implementation and UI consistency." }]
        ]
    },
    {
        period: "2022 - 2023",
        jobTitle: "Industrial Design Engineer", // Removed the duplicate string repetition
        company: "Create Electronic Optical Co., Ltd, New Taipei, Taiwan",
        highlights: [
            [{ "text": "Conducted " }, { "text": "market research", "bold": true }, { "text": " to identify trends, leading to the initiation of a motorcycle dash-cam project." }],
            [{ "text": "Designed " }, { "text": "UI and icons", "bold": true }, { "text": " for product models, improving user experience and branding." }],
            [{ "text": "Developed a product concept selected as the company’s sole entry for the " }, { "text": "iF Design Award", "bold": true }, { "text": ", advancing to the " }, { "text": "Berlin finals", "bold": true }, { "text": "." }],
            [{ "text": "Edited and updated " }, { "text": "website content", "href": "https://www.create-eop.com.tw/en/" }, { "text": ", ensuring accurate and engaging user experiences." }]
        ]
    }
];

export const activities: Activity[] = [
    {
        period: "Jul 2021 - May 2022",
        jobTitle: "Public Relations Director, 2022 Design Exhibition Committee",
        organization: "Asia Eastern University of Science and Technology, Taiwan",
        highlights: [
            "Secured six sponsorship deals by negotiating with industry partners, ensuring financial and resource support for the event.",
            "Coordinated cross-functional communication between sponsors, faculty, and the exhibition team, streamlining event logistics.",
            "Organized and led team meetings, assisting team leaders in task allocation to enhance productivity and collaboration."
        ]
    },
    {
        period: "Jul 2019",
        jobTitle: "Volunteer Arts Lecturer",
        organization: "Shang-Hu Elementary School, Taoyuan, Taiwan",
        highlights: [
            "Developed engaging art lessons that encouraged creative thinking in children, fostering their artistic expression.",
            "Taught color theory and blending techniques, improving students' understanding of visual aesthetics.",
            "Led sustainability workshops, guiding students in crafting eco-friendly toys using recycled materials."
        ]
    }
];
