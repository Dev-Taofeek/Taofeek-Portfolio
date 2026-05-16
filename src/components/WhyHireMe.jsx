"use client";

import { motion } from "framer-motion";
import { Brain, Code2, MessageCircle, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const reasons = [
    {
        icon: Brain,
        title: "Problem First",
        text: "I think through the user journey and business goal before writing code.",
    },
    {
        icon: Code2,
        title: "Clean Execution",
        text: "I build responsive, organized, and maintainable frontend interfaces.",
    },
    {
        icon: Rocket,
        title: "Fast Learner",
        text: "I learn quickly, adapt to feedback, and improve with every project.",
    },
    {
        icon: MessageCircle,
        title: "Clear Communication",
        text: "I explain ideas clearly and keep projects easy to follow.",
    },
];

export default function WhyHireMe() {
    return (
        <section id="why-hire-me" className="section">
            <div className="container">
                <SectionHeader
                    eyebrow="Why Hire Me"
                    title="I don’t just build screens. I build useful frontend experiences."
                    text="I focus on solving the right problem, building clean interfaces, and creating web products that feel professional and easy to use."
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            whileHover={{ y: -6 }}
                            className={`rounded-[1.6rem] p-6 ${
                                index === 0
                                    ? "bg-black text-white"
                                    : "border border-black/10 bg-[#f7f7f5] text-black"
                            }`}
                        >
                            <div
                                className={`grid h-11 w-11 place-items-center rounded-2xl ${
                                    index === 0
                                        ? "bg-white text-black"
                                        : "bg-black text-white"
                                }`}
                            >
                                <reason.icon size={18} />
                            </div>

                            <h3 className="mt-8 text-xl font-black tracking-[-0.03em]">
                                {reason.title}
                            </h3>

                            <p
                                className={`mt-3 text-sm leading-7 ${
                                    index === 0
                                        ? "text-white/65"
                                        : "text-black/60"
                                }`}
                            >
                                {reason.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
