"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";

export default function ProjectCard({ project, index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group overflow-hidden rounded-[1.8rem] border border-black/10 bg-[#f7f7f5]"
        >
            <div className="relative h-56 overflow-hidden border-b border-black/10 bg-[#e5e5e1] p-5">
                <div className="absolute inset-0 grid-bg opacity-60" />

                <div className="relative z-10 h-full rounded-[1.3rem] border border-black/10 bg-[#eeeeec] p-4 shadow-xl shadow-black/5 transition duration-500 group-hover:-translate-y-2">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-black" />
                            <span className="h-2.5 w-2.5 rounded-full bg-black/25" />
                            <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                        </div>
                        <Layers size={17} />
                    </div>

                    <div className="mt-8">
                        <p className="mini-label text-black/35">
                            {project.type}
                        </p>
                        <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                            {project.title}
                        </h3>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <p className="text-sm leading-7 text-black/60">
                    {project.description}
                </p>

                <div className="mt-5 space-y-4 border-t border-black/10 pt-5">
                    <Info label="Problem" text={project.problem} />
                    <Info label="Solution" text={project.solution} />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-bold text-black/55"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] transition hover:gap-3"
                >
                    View Project <ArrowUpRight size={15} />
                </a>
            </div>
        </motion.article>
    );
}

function Info({ label, text }) {
    return (
        <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/35">
                {label}
            </p>
            <p className="mt-1 text-sm leading-6 text-black/65">{text}</p>
        </div>
    );
}
