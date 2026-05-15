"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skills } from "@/data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <SectionHeader
                    eyebrow="Skills"
                    title="A focused frontend stack for building modern products."
                    text="I use tools that help me build responsive, maintainable, and professional web experiences."
                />

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04 }}
                            whileHover={{ y: -6 }}
                            className="card rounded-2xl p-5"
                        >
                            <div className="mb-8 h-1 w-8 rounded-full bg-black" />
                            <p className="text-sm font-black tracking-[-0.02em]">
                                {skill}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
