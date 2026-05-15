import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <SectionHeader
                        eyebrow="Projects"
                        title="Selected work built with purpose."
                        text="Each project shows how I think through problems, structure interfaces, and build usable digital products."
                    />

                    <a
                        href="#contact"
                        className="mb-10 inline-flex w-fit border border-black/15 px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition hover:bg-black hover:text-white"
                    >
                        Let’s Work
                    </a>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
