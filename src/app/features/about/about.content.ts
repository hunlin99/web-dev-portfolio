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

export interface WorkExperience {
    period: string;
    jobTitle: string;
    company: string;
    highlights: string[];
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
    { linkTo: "LinkedIn", link: "https://linkedin.com/" },
    { linkTo: "GitHub", link: "https://github.com/" },
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
        company: "S-Qubed Entertainment Inc. | Toronto, Canada",
        highlights: [
            "Built and maintained responsive production web interfaces and a custom CMS, implementing authentication, article CRUD, publishing workflows, image uploads, and data-driven UI using Firebase services.",
            "Debugged frontend and integration issues across development and production environments, troubleshooting application behavior, responsive layouts, Firebase data flows, authentication, and deployment issues.",
            "Translated UI/UX requirements into responsive, implementation-ready interfaces, maintaining usability, visual consistency, and reliable behavior across screen sizes.",
            "Managed Firebase Authentication, Firestore, Cloud Storage, hosting, security rules, and production deployments, supporting end-to-end delivery of web features."
        ]
    },
    {
        period: "May 2025 - Present",
        jobTitle: "UX Designer",
        company: "Afroidentity Inc. | Toronto, Canada",
        highlights: [
            "Translated product requirements and user research into end-to-end user flows, responsive interfaces, and interactive Figma prototypes for web and mobile experiences.",
            "Evaluated interface accessibility and usability using WCAG criteria, identifying issues involving color contrast, typography, component behavior, and responsive presentation.",
            "Developed and maintained reusable UI patterns and design-system guidance, improving consistency between design specifications and implemented interfaces."
        ]
    },
    {
        period: "May 2025 - August 2025",
        jobTitle: "Co-op Web Designer",
        company: "S-Qubed Entertainment Inc. | Toronto, Canada",
        highlights: [
            "Created responsive web layouts and reusable UI components, accounting for content behavior across different screen sizes and interface states.",
            "Prototyped and tested interface concepts to identify usability, navigation, responsive-layout, and interaction issues before implementation.",
            "Translated design requirements into structured, development-ready specifications, supporting efficient implementation and UI consistency."
        ]
    },
    {
        period: "2022 - 2023",
        jobTitle: "Industrial Design Engineer", // Removed the duplicate string repetition
        company: "Create Electronic Optical Co., Ltd, New Taipei, Taiwan",
        highlights: [
            "Conducted market research to identify trends, leading to the initiation of a motorcycle dash-cam project.",
            "Designed UI and icons for product models, improving user experience and branding.",
            "Developed a product concept selected as the company’s sole entry for the iF Design Award, advancing to the Berlin finals.",
            "Edited and updated website content, ensuring accurate and engaging user experiences."
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
