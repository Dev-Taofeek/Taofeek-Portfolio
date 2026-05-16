import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Obayomi Taofeek`,
        description: project.shortDescription,
    };
}

export default async function ProjectDetails({ params }) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#eeeeec] px-5 py-8 text-black">
            <div className="container">
                <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <Link
                        href="/#projects"
                        className="inline-flex w-fit items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-black/55 transition hover:text-black"
                    >
                        <ArrowLeft size={15} />
                        Back
                    </Link>

                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
                        >
                            <GithubIcon className="h-4 w-4" />
                            GitHub
                        </a>

                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1"
                        >
                            Live Site
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>

                <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div className="lg:sticky lg:top-8">
                        <p className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-black/40">
                            {project.type} —
                        </p>

                        <h1 className="max-w-2xl text-4xl font-black leading-[0.98] tracking-[-0.055em] md:text-6xl">
                            {project.title}
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                            {project.description}
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            <InfoBox label="Role" value={project.role} />
                            <InfoBox label="Year" value={project.year} />
                        </div>

                        <div className="mt-6">
                            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.24em] text-black/35">
                                Tools Used
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-black/10 bg-[#f7f7f5] px-3 py-1 text-xs font-bold text-black/60"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <OverviewCard project={project} />

                        <DetailBlock
                            title="The Problem"
                            text={project.problem}
                        />

                        <DetailBlock
                            title="The Solution"
                            text={project.solution}
                        />

                        <ListBlock
                            title="Key Features"
                            items={project.features}
                        />

                        <ListBlock
                            title="What I Improved"
                            items={project.improvements}
                        />

                        <div className="rounded-4xl bg-black p-6 text-white md:p-8">
                            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/35">
                                Like this project?
                            </p>

                            <h2 className="mt-4 max-w-xl text-3xl font-black tracking-[-0.04em]">
                                I can help you build a clean, responsive, and
                                professional web experience.
                            </h2>

                            <Link
                                href="/#contact"
                                className="mt-6 inline-flex items-center gap-2 bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-black transition hover:-translate-y-1"
                            >
                                Contact Me <ArrowUpRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

function OverviewCard({ project }) {
    return (
        <div className="rounded-4xl border border-black/10 bg-[#f7f7f5] p-5 md:p-8">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                Overview
            </p>

            <div className="mt-8 rounded-3xl border border-black/10 bg-[#e5e5e1] p-5">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-black" />
                        <span className="h-2.5 w-2.5 rounded-full bg-black/25" />
                        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    </div>

                    <ArrowUpRight size={17} />
                </div>

                <div className="grid-bg min-h-65 rounded-[1.2rem] border border-black/10 bg-[#eeeeec] p-6">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                        Case Study
                    </p>

                    <h2 className="mt-4 max-w-md text-3xl font-black tracking-[-0.04em]">
                        {project.title}
                    </h2>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-black/60">
                        {project.shortDescription}
                    </p>
                </div>
            </div>
        </div>
    );
}

function InfoBox({ label, value }) {
    return (
        <div className="rounded-2xl border border-black/10 bg-[#f7f7f5] p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-black/35">
                {label}
            </p>

            <p className="mt-2 text-sm font-black">{value}</p>
        </div>
    );
}

function DetailBlock({ title, text }) {
    return (
        <div className="rounded-4xl border border-black/10 bg-[#f7f7f5] p-6 md:p-8">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                {title}
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                {text}
            </p>
        </div>
    );
}

function ListBlock({ title, items }) {
    return (
        <div className="rounded-4xl border border-black/10 bg-[#f7f7f5] p-6 md:p-8">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                {title}
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {items.map((item) => (
                    <div
                        key={item}
                        className="rounded-2xl border border-black/10 bg-white p-4 text-sm font-medium leading-6 text-black/65"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

function GithubIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.8c0 .27.18.6.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}
