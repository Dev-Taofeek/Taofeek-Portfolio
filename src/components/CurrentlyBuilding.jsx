"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Hammer, Sparkles } from "lucide-react";

export default function CurrentlyBuilding() {
    return (
        <section className="section" aria-label="Currently building">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-6 rounded-4xl border border-black/8 bg-[#f7f7f5] p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:p-10"
                >
                    {/* Left: heading */}
                    <div className="flex flex-col justify-between gap-6">
                        <div>
                            {/* Live badge */}
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-3 py-1.5">
                                <span
                                    className="relative flex h-2 w-2"
                                    aria-hidden="true"
                                >
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">
                                    In Progress
                                </span>
                            </div>

                            <p className="mini-label text-black/35">
                                Currently Building —
                            </p>

                            <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight tracking-[-0.04em] md:text-4xl">
                                Improving EduTest Pro and building more
                                real-world frontend projects.
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-[1.85] text-black/55">
                            I build to learn and grow. Every project pushes me
                            to solve harder problems and write cleaner code.
                        </p>
                    </div>

                    {/* Right: cards */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-4 xl:grid-cols-2">
                        <BuildCard
                            icon={Hammer}
                            title="Product Focus"
                            text="Building projects with auth, dashboards, APIs, and real user flows."
                        />
                        <BuildCard
                            icon={Sparkles}
                            title="Frontend Quality"
                            text="Improving accessibility, animations, responsiveness, and performance."
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function BuildCard({ icon: Icon, title, text }) {
    return (
        <div className="group rounded-3xl border border-black/8 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/6">
            <div
                className="grid h-11 w-11 place-items-center rounded-2xl bg-black text-white transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
            >
                <Icon size={18} />
            </div>

            <h3 className="mt-6 text-lg font-black tracking-[-0.03em]">
                {title}
            </h3>

            <p className="mt-2.5 text-sm leading-[1.85] text-black/57">
                {text}
            </p>

            <div
                className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-black/40"
                aria-label="Status: In progress"
            >
                In Progress
                <ArrowUpRight size={12} aria-hidden="true" />
            </div>
        </div>
    );
}
