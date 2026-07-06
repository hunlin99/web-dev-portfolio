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
    { linkTo: "LinkedIn", link: "https://linkedin.com" },
    { linkTo: "GitHub", link: "https://github.com" },
    { linkTo: "Download Resume", link: "assets/your-resume.pdf" }
];

export const education: Education[] = [
    {
        period: "Expected 2025",
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
        period: "2025 - Current",
        jobTitle: "UX Designer (Freelance)",
        company: "Afroidentity Inc, Toronto, ON",
        highlights: [
            "Developed intuitive user flows and wireframes, improving navigation efficiency.",
            "Conducted accessibility testing and usability reviews to ensure WCAG compliance and inclusive design practices.",
            "Created app interface prototypes and pre-load website design, accelerating development timelines and aligning product vision with stakeholder requirements.",
            "Designed and implemented branding assets (logo systems, color palettes, typography) to create a consistent visual identity across digital platforms."
        ]
    },
    {
        period: "2024 - 2025", // Fixed typo from 2025 in text to match your previous timeline alignment
        jobTitle: "Web Designer (Co-op)",
        company: "S-Qubed Entertainment Inc., Toronto, ON",
        highlights: [
            "Designed responsive website layouts, delivering visually engaging and user-friendly experiences.",
            "Collaborated with cross-functional teams to refine web architecture, aligning design execution with entertainment brand objectives."
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
