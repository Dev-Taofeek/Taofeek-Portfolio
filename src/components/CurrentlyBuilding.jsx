"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Hammer, Sparkles } from "lucide-react";

export default function CurrentlyBuilding() {
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid gap-5 rounded-4xl border border-black/10 bg-[#f7f7f5] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
                >
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                            Currently Building —
                        </p>

                        <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-4xl">
                            Improving EduTest Pro and building more real-world
                            frontend projects.
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <BuildCard
                            icon={Hammer}
                            title="Product Focus"
                            text="Building projects with authentication, dashboards, APIs, and useful user flows."
                        />

                        <BuildCard
                            icon={Sparkles}
                            title="Frontend Quality"
                            text="Improving responsiveness, accessibility, animations, and performance."
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function BuildCard({ icon: Icon, title, text }) {
    return (
        <div className="rounded-3xl bg-white p-5">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black text-white">
                <Icon size={18} />
            </div>

            <h3 className="mt-6 text-lg font-black tracking-[-0.03em]">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-black/60">{text}</p>

            <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-black/45">
                In Progress <ArrowUpRight size={13} />
            </div>
        </div>
    );
}
