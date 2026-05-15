"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
    eyebrow,
    title,
    text,
    align = "left",
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className={`mb-1 lg:mb-4 ${align === "center" ? "mx-auto text-center" : ""}`}
        >
            <p className="mini-label mb-4 text-black/45">{eyebrow} —</p>

            <h2 className="max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.04em] md:text-5xl">
                {title}
            </h2>

            {text && (
                <p
                    className={`mt-5 max-w-2xl text-sm leading-7 text-black/60 md:text-base ${
                        align === "center" ? "mx-auto" : ""
                    }`}
                >
                    {text}
                </p>
            )}
        </motion.div>
    );
}
