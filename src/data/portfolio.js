export const navLinks = [
    "Home",
    "Work",
    "Skills",
    "About",
    "Contact",
];

export const skills = [
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "next" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Redux", icon: "redux" },
    { name: "Firebase", icon: "firebase" },
    { name: "Supabase", icon: "supabase" },
    { name: "Shadcn UI", icon: "shadcn" },
    { name: "Framer Motion", icon: "framer" },
    { name: "REST APIs", icon: "api" },
    { name: "Git & GitHub", icon: "github" },
];

export const projects = [
    {
        slug: "flexflow",
        title: "FlexFlow",
        type: "Full-Stack Project Management SaaS",
        image: "/projects/flexflow-1.webp",
        images: [
            "/projects/flexflow-1.webp",
            "/projects/flexflow-2.webp",
            "/projects/flexflow-3.webp",
        ],
        shortDescription:
            "A production-grade project management app with Kanban boards, real-time updates, multi-workspace orgs, and role-based access control.",
        description:
            "FlexFlow is a full-stack SaaS project management platform built as a Jira/Linear alternative. It supports multi-organization and multi-workspace structures, real-time Kanban drag-and-drop, multiple issue assignees, activity feeds, in-app notifications, and a complete settings system with 2FA, profile management, and team invites.",
        problem:
            "Teams need a lightweight but powerful project management tool that supports real collaboration — multiple assignees, real-time updates, workspace-level access control, and email notifications — without paying enterprise prices.",
        solution:
            "I built a full-stack monorepo application with a Next.js frontend and an Express.js REST API, backed by PostgreSQL via Neon. The app features JWT-based auth with silent token refresh, Socket.io for real-time Kanban sync, Resend for transactional emails, and a free-tier gate that limits organizations and workspaces to encourage upgrades.",
        role: "Full-Stack Developer",
        stack: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Express.js",
            "Prisma",
            "PostgreSQL",
            "Socket.io",
            "NextAuth v4",
            "Tailwind CSS v4",
            "Turborepo",
        ],
        features: [
            "Kanban board with real-time drag-and-drop",
            "Multi-org and multi-workspace (up to 3 free)",
            "Multiple issue assignees with email notifications",
            "Role-based access control (Owner, Admin, Member)",
            "In-app notifications + toast alerts",
            "Team invites via email or shareable invite code",
            "2FA setup with TOTP (Google Authenticator)",
            "Profile, password, and settings management",
            "Project activity feed with load-more pagination",
            "GitHub OAuth + Google OAuth sign-in",
        ],
        improvements: [
            "Reduced notification polling from 30s to 180s to prevent cold-start spam on free hosting",
            "Silent JWT token refresh eliminates session dropouts without re-login",
            "Free-tier limits (1 org, 3 workspaces) with clear upgrade prompts instead of silent failures",
        ],
        live: "https://flexflow-site.vercel.app",
        github: "https://github.com/Dev-Taofeek/Flexflow-site",
        year: "2026",
    },
    {
        slug: "edutest-pro",
        title: "EduTest Pro",
        type: "AI-Powered CBT Platform",
        image: "/projects/edutest-pro-1.webp",
        images: [
            "/projects/edutest-pro-1.webp",
            "/projects/edutest-pro-2.webp",
            "/projects/edutest-pro-3.webp",
        ],
        shortDescription:
            "An exam preparation platform with smart testing, feedback, and performance tracking.",
        description:
            "EduTest Pro is a modern AI-powered CBT exam preparation platform built to help students practice smarter, track progress, and improve performance through structured testing.",
        problem:
            "Students need a better way to practice exams, track progress, receive feedback, and prepare with a realistic testing experience.",
        solution:
            "I built a responsive CBT platform with real-time feedback, performance tracking, smart timer, anti-cheat features, and a clean exam-focused interface.",
        role: "Frontend Developer",
        stack: [
            "Next.js",
            "JavaScript",
            "Tailwind CSS",
            "Framer Motion",
            "Supabase",
        ],
        features: [
            "CBT exam interface",
            "Smart timer system",
            "Performance tracking",
            "Anti-cheat exam flow",
            "Responsive student dashboard",
        ],
        improvements: [
            "Created a more realistic exam experience",
            "Improved student practice structure",
            "Made exam progress easier to monitor",
        ],
        live: "https://online-cbt-exam.vercel.app/",
        github: "https://github.com/Dev-Taofeek/Edu-Test-Pro",
        year: "2026",
    },

    {
        slug: "camp-connect",
        title: "Camp Connect",
        type: "NYSC Social Platform",
        image: "/projects/camp-connect-1.webp",
        images: [
            "/projects/camp-connect-1.webp",
            "/projects/camp-connect-2.webp",
            "/projects/camp-connect-3.webp",
        ],
        shortDescription:
            "A social platform for NYSC corps members to connect, share updates, and access useful resources.",
        description:
            "Camp Connect is a modern social platform designed for NYSC corps members. It helps corps members connect, communicate, share updates, and access useful camp-related resources through a clean and responsive user experience.",
        problem:
            "NYSC corps members need a simple and accessible way to connect with others, stay updated, and engage with camp-related information.",
        solution:
            "I built a responsive social-style platform with clean navigation, modern UI sections, mobile-first layouts, and interactive frontend experiences.",
        role: "Frontend Developer",
        stack: ["Next.js", "Tailwind CSS", "Firebase"],
        features: [
            "Responsive social-style interface",
            "Clean landing page structure",
            "Mobile-first layouts",
            "User-focused navigation",
            "Modern UI interactions",
        ],
        improvements: [
            "Improved accessibility across devices",
            "Created a cleaner user journey",
            "Focused on real NYSC community needs",
        ],
        live: "https://mvp-1-pi.vercel.app/",
        github: "https://github.com/Dev-Taofeek?tab=repositories",
        year: "2026",
    },

    {
        slug: "gabriel-adewumni-portfolio",
        title: "Gabriel Adewumni Portfolio",
        type: "Client Portfolio Website",
        image: "/projects/gabriel-portfolio-1.webp",
        images: [
            "/projects/gabriel-portfolio-1.webp",
            "/projects/gabriel-portfolio-2.webp",
            "/projects/gabriel-portfolio-3.webp",
        ],
        shortDescription:
            "A professional portfolio website for a London-based Product Manager.",
        description:
            "A modern portfolio website built for Gabriel Adewumni, a London-based Product Manager. The website presents his experience, work, skills, and personal brand in a clean and professional way.",
        problem:
            "The client needed a credible online presence that clearly communicated his professional value and product management experience.",
        solution:
            "I designed and developed a clean, responsive portfolio with strong content structure, smooth sections, and a polished interface that works across all devices.",
        role: "Frontend Developer",
        stack: ["React", "Tailwind CSS", "Framer Motion"],
        features: [
            "Professional personal brand layout",
            "Responsive portfolio sections",
            "Smooth page interactions",
            "Clear project presentation",
            "Contact-focused structure",
        ],
        improvements: [
            "Improved online credibility",
            "Created a stronger personal brand presence",
            "Made the content easier for recruiters and clients to scan",
        ],
        live: "https://gabirel-portfolio.vercel.app/",
        github: "https://github.com/Dev-Taofeek/Gabirel-Portfolio",
        year: "2026",
    },
];

export const experiences = [
    {
        role: "Frontend Engineer",
        company: "HavenHive Marketing",
        date: "Feb 2025 — Aug 2025",
        description:
            "Built responsive frontend interfaces, reusable React components, and modern user experiences for web products.",
    },
    {
        role: "Frontend Developer",
        company: "Camp Connect",
        date: "Jul 2025 — Present",
        description:
            "Developed a social platform for NYSC corps members with a focus on responsiveness, usability, and product experience.",
    },
    {
        role: "Frontend Developer",
        company: "Gabriel Adewumni Portfolio",
        date: "2026",
        description:
            "Designed and developed a professional portfolio website for a London-based Product Manager.",
    },
];
