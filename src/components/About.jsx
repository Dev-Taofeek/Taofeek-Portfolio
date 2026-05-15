"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Compass, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const process = [
    {
        icon: Brain,
        title: "Understand",
        text: "I first understand the problem, the user, and the goal before writing code.",
    },
    {
        icon: Compass,
        title: "Structure",
        text: "I organize ideas into clear layouts, user flows, and reusable components.",
    },
    {
        icon: Code2,
        title: "Build",
        text: "I develop clean, responsive, and maintainable interfaces using modern tools.",
    },
    {
        icon: Rocket,
        title: "Improve",
        text: "I test, refine, and optimize the experience so the final product feels polished.",
    },
];

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div className="lg:sticky lg:top-28">
                        <SectionHeader
                            eyebrow="About"
                            title="I don’t just make websites look good. I make them work better."
                            text="My process is simple: understand the problem, plan the user experience, build cleanly, and improve the final product."
                        />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                whileHover={{ y: -6 }}
                                className={`group relative min-h-57.5 overflow-hidden rounded-[1.6rem] p-6 transition ${
                                    index === 0
                                        ? "bg-black text-white"
                                        : "border border-black/10 bg-[#f7f7f5] text-black"
                                }`}
                            >
                                <div
                                    className={`absolute right-0 top-0 h-24 w-24 rounded-full blur-2xl transition ${
                                        index === 0
                                            ? "bg-white/10"
                                            : "bg-black/4"
                                    }`}
                                />

                                <div
                                    className={`grid h-11 w-11 place-items-center rounded-xl ${
                                        index === 0
                                            ? "bg-white text-black"
                                            : "bg-black text-white"
                                    }`}
                                >
                                    <item.icon size={19} />
                                </div>

                                <div className="mt-12">
                                    <p
                                        className={`mb-3 text-[10px] font-black uppercase tracking-[0.24em] ${
                                            index === 0
                                                ? "text-white/35"
                                                : "text-black/35"
                                        }`}
                                    >
                                        Step 0{index + 1}
                                    </p>

                                    <h3 className="text-xl font-black tracking-[-0.03em]">
                                        {item.title}
                                    </h3>

                                    <p
                                        className={`mt-3 text-sm leading-7 ${
                                            index === 0
                                                ? "text-white/65"
                                                : "text-black/60"
                                        }`}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
