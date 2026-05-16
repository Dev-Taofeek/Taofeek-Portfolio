"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
                className="group flex h-full min-h-125 flex-col overflow-hidden rounded-[1.7rem] border border-black/10 bg-[#f7f7f5] transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
            >
                <div className="relative h-56 shrink-0 overflow-hidden border-b border-black/10 bg-[#e5e5e1] p-3">
                    <div className="relative h-full overflow-hidden rounded-[1.2rem] border border-black/10 bg-[#eeeeec] shadow-xl shadow-black/5">
                        <Image
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover object-top transition duration-700 group-hover:scale-105 rounded-[1.2rem]"
                        />

                        <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-white/80 px-4 py-3 backdrop-blur-md">
                            <div className="flex gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-black" />
                                <span className="h-2.5 w-2.5 rounded-full bg-black/25" />
                                <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                            </div>

                            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-black/40">
                                Preview
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/35">
                            {project.type}
                        </p>

                        <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]">
                            {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-black/60">
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
