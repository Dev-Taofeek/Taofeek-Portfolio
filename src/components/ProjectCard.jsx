"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full"
        >
            <Link
                href={`/projects/${project.slug}`}
                className="group flex h-full min-h-125 flex-col overflow-hidden rounded-[1.7rem] border border-black/8 bg-[#f7f7f5] transition-all duration-300 hover:-translate-y-1.5 hover:border-black/15 hover:shadow-2xl hover:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label={`View ${project.title} — ${project.type}`}
            >
                {/* Image area */}
                <div className="relative h-56 shrink-0 overflow-hidden bg-[#e5e5e1] p-3">
                    <div className="relative h-full overflow-hidden rounded-[1.2rem] border border-black/8 bg-[#eeeeec] shadow-lg shadow-black/6">
                        {/* Browser chrome */}
                        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-white/85 px-4 py-2.5 backdrop-blur-md">
                            <div className="flex gap-1.5" aria-hidden="true">
                                <span className="h-2.5 w-2.5 rounded-full bg-black" />
                                <span className="h-2.5 w-2.5 rounded-full bg-black/22" />
                                <span className="h-2.5 w-2.5 rounded-full bg-black/12" />
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-black/38">
                                Preview
                            </span>
                        </div>

                        <Image
                            src={project.image}
                            alt={`Screenshot of ${project.title}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top pt-9 transition-transform duration-700 will-change-transform group-hover:scale-105"
                            loading={index === 0 ? "eager" : "lazy"}
                            quality={85}
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                    <div className="flex-1">
                        {/* Type label */}
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/35">
                            {project.type}
                        </p>

                        {/* Title */}
                        <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-sm leading-[1.85] text-black/57">
                            {project.shortDescription}
                        </p>

                        {/* Stack tags */}
                        <ul
                            className="mt-5 flex flex-wrap gap-1.5"
                            role="list"
                            aria-label="Technologies used"
                        >
                            {project.stack.slice(0, 4).map((item) => (
                                <li
                                    key={item}
                                    className="rounded-full border border-black/8 px-3 py-1 text-[11px] font-bold text-black/50"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 flex items-center justify-between border-t border-black/8 pt-5">
                        <time
                            className="text-[11px] font-black uppercase tracking-[0.2em] text-black/38"
                            dateTime={project.year}
                        >
                            {project.year}
                        </time>

                        <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.18em] transition-all group-hover:gap-2.5">
                            View Details{" "}
                            <ArrowUpRight
                                size={14}
                                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                aria-hidden="true"
                            />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
