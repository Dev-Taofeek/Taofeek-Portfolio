"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Compass, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const process = [
    {
        icon: Brain,
        title: "Understand",
        text: "I study the user, business goal, and constraints before writing a single line of code.",
        step: "01",
    },
    {
        icon: Compass,
        title: "Structure",
        text: "I map out clear user flows, information hierarchies, and reusable component systems.",
        step: "02",
    },
    {
        icon: Code2,
        title: "Build",
        text: "I develop clean, accessible, responsive interfaces using modern, scalable tools.",
        step: "03",
    },
    {
        icon: Rocket,
        title: "Refine",
        text: "I test, improve performance, and polish interactions until the product feels right.",
        step: "04",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function About() {
    return (
        <section id="about" className="section" aria-labelledby="about-heading">
            <div className="container">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    {/* Sticky left header */}
                    <div className="lg:sticky lg:top-28">
                        <SectionHeader
                            id="about-heading"
                            eyebrow="About"
                            title="I don't just make websites look good. I make them work better."
                            text="My process is intentional: understand the real problem, plan the user experience, build cleanly, and continuously improve until it's genuinely useful."
                        />

                        {/* Personal note */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mt-8 rounded-2xl border border-black/8 bg-[#f7f7f5] p-5"
                        >
                            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-black/35">
                                Quick note
                            </p>
                            <p className="mt-3 text-sm leading-[1.85] text-black/60">
                                Based in Ogun State, Nigeria — open to remote
                                and hybrid roles. I bring a sharp eye for design
                                and a strong foundation in building maintainable
                                frontend systems.
                            </p>
                        </motion.div>
                    </div>

                    {/* Process cards grid */}
                    <div
                        className="grid gap-4 sm:grid-cols-2"
                        role="list"
                        aria-label="My development process"
                    >
                        {process.map((item, index) => (
                            <motion.article
                                key={item.title}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-60px" }}
                                whileHover={{
                                    y: -6,
                                    transition: { duration: 0.2 },
                                }}
                                className={`group relative overflow-hidden rounded-[1.6rem] p-6 transition-shadow hover:shadow-xl ${
                                    index === 0
                                        ? "bg-black text-white hover:shadow-black/25"
                                        : "border border-black/8 bg-[#f7f7f5] hover:shadow-black/8"
                                }`}
                                role="listitem"
                            >
                                {/* Decorative circle */}
                                <div
                                    className={`pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150 ${
                                        index === 0
                                            ? "bg-white/8"
                                            : "bg-black/4"
                                    }`}
                                    aria-hidden="true"
                                />

                                {/* Step label */}
                                <p
                                    className={`mini-label text-[9px] ${
                                        index === 0
                                            ? "text-white/30"
                                            : "text-black/30"
                                    }`}
                                    aria-label={`Step ${item.step}`}
                                >
                                    Step {item.step}
                                </p>

                                {/* Icon */}
                                <div
                                    className={`mt-4 grid h-11 w-11 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                                        index === 0
                                            ? "bg-white text-black"
                                            : "bg-black text-white"
                                    }`}
                                    aria-hidden="true"
                                >
                                    <item.icon size={19} />
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-xl font-black tracking-[-0.03em]">
                                        {item.title}
                                    </h3>
                                    <p
                                        className={`mt-3 text-sm leading-[1.85] ${
                                            index === 0
                                                ? "text-white/60"
                                                : "text-black/57"
                                        }`}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
