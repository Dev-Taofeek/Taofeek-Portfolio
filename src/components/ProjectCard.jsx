"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers } from "lucide-react";

export default function ProjectCard({ project, index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="h-full"
        >
            <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full min-h-130 flex-col overflow-hidden rounded-[1.7rem] border border-black/10 bg-[#f7f7f5] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
            >
                <div className="relative h-52 shrink-0 overflow-hidden border-b border-black/10 bg-[#e5e5e1] p-5">
                    <div className="absolute inset-0 grid-bg opacity-60" />

                    <div className="relative z-10 h-full rounded-[1.2rem] border border-black/10 bg-[#eeeeec] p-4 shadow-xl shadow-black/5 transition duration-500 group-hover:-translate-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-black" />
                                <span className="h-2.5 w-2.5 rounded-full bg-black/25" />
                                <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                            </div>

                            <Layers size={17} />
                        </div>

                        <div className="mt-10">
                            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/35">
                                {project.type}
                            </p>

                            <h3 className="mt-3 max-w-65 text-2xl font-black leading-tight tracking-[-0.04em]">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                    <div>
                        <p className="text-sm leading-7 text-black/60">
                            {project.shortDescription}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.stack.slice(0, 4).map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-bold text-black/55"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pt-8">
                        <div className="flex items-center justify-between border-t border-black/10 pt-5">
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40">
                                {project.year}
                            </span>

                            <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] transition group-hover:gap-3">
                                View Details <ArrowUpRight size={15} />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
