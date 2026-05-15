"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <SectionHeader
                        eyebrow="Experience"
                        title="Practical experience building real interfaces."
                        text="I’ve worked on personal, client, and professional projects focused on usability, responsiveness, and clean frontend development."
                    />

                    <div className="space-y-4">
                        {experiences.map((item, index) => (
                            <motion.div
                                key={item.company}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="card rounded-[1.6rem] p-6"
                            >
                                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                                    <div>
                                        <h3 className="text-xl font-black tracking-[-0.03em]">
                                            {item.role}
                                        </h3>
                                        <p className="mt-1 text-sm font-bold text-black/55">
                                            {item.company}
                                        </p>
                                    </div>

                                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40">
                                        {item.date}
                                    </p>
                                </div>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-black/60">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
