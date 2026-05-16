import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

// Server component — no "use client" needed here
// ProjectCard is client-side for animations

export default function Projects() {
    return (
        <section
            id="projects"
            className="section"
            aria-labelledby="projects-heading"
        >
            <div className="container">
                {/* Section header + CTA */}
                <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <SectionHeader
                        id="projects-heading"
                        eyebrow="Projects"
                        title="Selected work built with purpose."
                        text="Real projects with full breakdowns — stack, problem, solution, and results. Click any card to see the complete case study."
                    />

                    <Link
                        href="/#contact"
                        className="inline-flex shrink-0 items-center gap-2 border border-black/15 px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                        aria-label="Contact me about working together"
                    >
                        Let&apos;s Work
                        <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                </div>

                {/* Cards grid */}
                <ul
                    className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3"
                    role="list"
                    aria-label="Portfolio projects"
                >
                    {projects.map((project, index) => (
                        <li key={project.slug}>
                            <ProjectCard project={project} index={index} />
                        </li>
                    ))}
                </ul>

                {/* GitHub CTA */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="https://github.com/Dev-Taofeek?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 rounded-full border border-black/12 bg-[#f7f7f5] px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-black/60 transition-all hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                        aria-label="View all projects on GitHub (opens in new tab)"
                    >
                        View All on GitHub
                        <GithubIcon className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}

function GithubIcon({ className }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.8c0 .27.18.6.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}
