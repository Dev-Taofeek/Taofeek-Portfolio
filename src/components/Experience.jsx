"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/portfolio";

export default function Experience() {
    return (
        <section
            id="experience"
            className="section"
            aria-labelledby="experience-heading"
        >
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                    <SectionHeader
                        id="experience-heading"
                        eyebrow="Experience"
                        title="Practical experience building real interfaces."
                        text="I've worked on personal, client, and professional projects focused on usability, responsiveness, and clean frontend development."
                    />

                    {/* Timeline */}
                    <ol
                        className="relative space-y-4 pl-6"
                        role="list"
                        aria-label="Work experience timeline"
                    >
                        {/* Vertical line */}
                        <div
                            className="pointer-events-none absolute left-0 top-3 h-[calc(100%-24px)] w-px bg-black/8"
                            aria-hidden="true"
                        />

                        {experiences.map((item, index) => (
                            <motion.li
                                key={item.company}
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.48,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute -left-6.25 top-5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#eeeeec] bg-black ring-1 ring-black/10"
                                    aria-hidden="true"
                                />

                                <div className="rounded-[1.6rem] border border-black/8 bg-[#f7f7f5] p-6 transition-shadow hover:border-black/12 hover:shadow-lg hover:shadow-black/6">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="text-xl font-black tracking-[-0.03em]">
                                                {item.role}
                                            </h3>
                                            <p className="mt-1 text-sm font-bold text-black/50">
                                                {item.company}
                                            </p>
                                        </div>

                                        <time
                                            className="shrink-0 rounded-full border border-black/8 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-black/40"
                                            aria-label={`Employment period: ${item.date}`}
                                        >
                                            {item.date}
                                        </time>
                                    </div>

                                    <p className="mt-5 text-sm leading-[1.85] text-black/57">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
