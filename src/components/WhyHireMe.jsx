"use client";

import { motion } from "framer-motion";
import { Brain, Code2, MessageCircle, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const reasons = [
    {
        icon: Brain,
        title: "Problem First",
        text: "I think through the user journey and business goal before writing a single line of code.",
        stat: "Always",
        statLabel: "Before coding",
    },
    {
        icon: Code2,
        title: "Clean Execution",
        text: "I build responsive, organized, and maintainable frontend interfaces that scale.",
        stat: "100%",
        statLabel: "Responsive",
    },
    {
        icon: Rocket,
        title: "Fast Learner",
        text: "I pick up new tools quickly, adapt to feedback, and improve with every project.",
        stat: "2+",
        statLabel: "Years growing",
    },
    {
        icon: MessageCircle,
        title: "Clear Communicator",
        text: "I explain ideas clearly, ask the right questions, and keep work easy to follow.",
        stat: "Open",
        statLabel: "To feedback",
    },
];

export default function WhyHireMe() {
    return (
        <section
            id="why-hire-me"
            className="section"
            aria-labelledby="why-hire-me-heading"
        >
            <div className="container">
                <SectionHeader
                    id="why-hire-me-heading"
                    eyebrow="Why Hire Me"
                    title="I don't just build screens. I build useful frontend experiences."
                    text="I focus on solving the right problem, building clean interfaces, and shipping web products that feel professional and are easy to use."
                />

                <ul
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                    role="list"
                    aria-label="Reasons to hire me"
                >
                    {reasons.map((reason, index) => (
                        <motion.li
                            key={reason.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                delay: index * 0.07,
                                duration: 0.48,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.18 },
                            }}
                            className={`group relative overflow-hidden rounded-[1.6rem] p-6 transition-shadow hover:shadow-xl ${
                                index === 0
                                    ? "bg-black text-white hover:shadow-black/25"
                                    : "border border-black/8 bg-[#f7f7f5] hover:shadow-black/8"
                            }`}
                        >
                            {/* Icon */}
                            <div
                                className={`grid h-11 w-11 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                                    index === 0
                                        ? "bg-white text-black"
                                        : "bg-black text-white"
                                }`}
                                aria-hidden="true"
                            >
                                <reason.icon size={18} />
                            </div>

                            {/* Stat */}
                            <div className="mt-10 mb-4">
                                <p
                                    className={`text-2xl font-black tracking-[-0.04em] ${
                                        index === 0
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                    aria-label={`${reason.stat} ${reason.statLabel}`}
                                >
                                    {reason.stat}
                                </p>
                                <p
                                    className={`mt-0.5 text-[10px] font-black uppercase tracking-[0.22em] ${
                                        index === 0
                                            ? "text-white/35"
                                            : "text-black/35"
                                    }`}
                                >
                                    {reason.statLabel}
                                </p>
                            </div>

                            {/* Divider */}
                            <div
                                className={`mb-4 h-px w-full ${
                                    index === 0 ? "bg-white/12" : "bg-black/8"
                                }`}
                                aria-hidden="true"
                            />

                            <h3 className="text-xl font-black tracking-[-0.03em]">
                                {reason.title}
                            </h3>

                            <p
                                className={`mt-3 text-sm leading-[1.85] ${
                                    index === 0
                                        ? "text-white/60"
                                        : "text-black/57"
                                }`}
                            >
                                {reason.text}
                            </p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
