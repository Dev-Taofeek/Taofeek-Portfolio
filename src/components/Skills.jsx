"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skills } from "@/data/portfolio";

const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.04,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="section"
            aria-labelledby="skills-heading"
        >
            <div className="container">
                <SectionHeader
                    id="skills-heading"
                    eyebrow="Skills"
                    title="A focused frontend stack for building modern products."
                    text="I use tools that help me build responsive, maintainable, and professional web experiences — and I know each one well."
                />

                <ul
                    className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
                    role="list"
                    aria-label="Technical skills"
                >
                    {skills.map((skill, index) => (
                        <motion.li
                            key={skill.name}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.18 },
                            }}
                            className="group relative cursor-default rounded-2xl border border-black/8 bg-[#f7f7f5] p-5 transition-shadow hover:border-transparent hover:bg-black hover:shadow-xl hover:shadow-black/20"
                        >
                            {/* Top accent bar */}
                            <div
                                className="mb-5 h-0.5 w-8 rounded-full bg-black transition-colors group-hover:bg-white"
                                aria-hidden="true"
                            />

                            {/* Icon */}
                            <div
                                className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl border border-black/8 bg-white transition-all group-hover:border-white/10 group-hover:bg-white/10"
                                aria-hidden="true"
                            >
                                <SkillIcon type={skill.icon} />
                            </div>

                            {/* Name */}
                            <p className="text-[13px] font-black tracking-[-0.02em] text-black transition-colors group-hover:text-white">
                                {skill.name}
                            </p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function SkillIcon({ type }) {
    const icons = {
        html: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
                focusable="false"
            >
                <path
                    fill="#E34F26"
                    d="M3 2h18l-1.64 18.38L12 22l-7.36-1.62L3 2Z"
                />
                <path fill="#EF652A" d="M12 4v15.93l5.95-1.32L19.35 4H12Z" />
                <path
                    fill="#FFFFFF"
                    d="M7.1 6.5h9.8l-.17 2H9.28l.18 2h7.1l-.55 6.14L12 17.75l-4.02-1.11-.27-3.05h1.97l.14 1.56L12 15.73l2.18-.58.23-2.65H7.62L7.1 6.5Z"
                />
            </svg>
        ),
        css: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
                focusable="false"
            >
                <path
                    fill="#1572B6"
                    d="M3 2h18l-1.64 18.38L12 22l-7.36-1.62L3 2Z"
                />
                <path fill="#33A9DC" d="M12 4v15.93l5.95-1.32L19.35 4H12Z" />
                <text
                    x="12"
                    y="16.2"
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="900"
                    fontFamily="Arial, sans-serif"
                    fill="#ffffff"
                >
                    3
                </text>
            </svg>
        ),
        javascript: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
                focusable="false"
            >
                <rect
                    width="18"
                    height="18"
                    x="3"
                    y="3"
                    fill="#F7DF1E"
                    rx="1"
                />
                <path
                    fill="#111"
                    d="M8.6 16.1c.34.55.66 1.02 1.4 1.02.7 0 1.15-.28 1.15-1.36V8.4h2.1v7.38c0 2.17-1.27 3.15-3.12 3.15-1.67 0-2.64-.86-3.13-1.9l1.6-.93Zm5.78-.18 1.6-.92c.42.68.96 1.18 1.93 1.18.81 0 1.33-.4 1.33-.96 0-.67-.53-.9-1.42-1.3l-.49-.21c-1.4-.6-2.34-1.36-2.34-2.96 0-1.47 1.12-2.6 2.88-2.6 1.25 0 2.15.44 2.8 1.58l-1.53.98c-.34-.6-.7-.84-1.27-.84-.58 0-.95.37-.95.84 0 .59.37.82 1.21 1.18l.49.21c1.65.71 2.58 1.43 2.58 3.05 0 1.75-1.37 2.7-3.22 2.7-1.8 0-2.97-.86-3.54-1.99Z"
                />
            </svg>
        ),
        typescript: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
                focusable="false"
            >
                <rect
                    width="18"
                    height="18"
                    x="3"
                    y="3"
                    fill="#3178C6"
                    rx="1"
                />
                <path
                    fill="#fff"
                    d="M13.2 7.7H5.7v2.05h2.55v7.55h2.35V9.75h2.6V7.7Zm.85 8.95c.75.82 1.85 1.22 3.25 1.22 2.25 0 3.7-1.15 3.7-3.05 0-1.5-.8-2.35-2.75-3.2l-.58-.25c-.98-.42-1.35-.7-1.35-1.18 0-.42.35-.75.98-.75.65 0 1.12.28 1.55.95l1.75-1.12c-.82-1.35-1.95-1.88-3.3-1.88-2.08 0-3.42 1.25-3.42 2.95 0 1.82 1.07 2.62 2.7 3.32l.58.25c1.05.45 1.48.72 1.48 1.27 0 .6-.55.93-1.42.93-1.05 0-1.65-.5-2.12-1.22l-1.85 1.08Z"
                />
            </svg>
        ),
        react: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="#61DAFB"
                strokeWidth="1.7"
                aria-hidden="true"
                focusable="false"
            >
                <circle cx="12" cy="12" r="2.2" fill="#61DAFB" stroke="none" />
                <ellipse cx="12" cy="12" rx="9" ry="3.6" />
                <ellipse
                    cx="12"
                    cy="12"
                    rx="9"
                    ry="3.6"
                    transform="rotate(60 12 12)"
                />
                <ellipse
                    cx="12"
                    cy="12"
                    rx="9"
                    ry="3.6"
                    transform="rotate(120 12 12)"
                />
            </svg>
        ),
        next: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="#000"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.1 6.2 5.9 8.85h-2.05l-3.95-5.92v5.92H8.9V8.2h2Zm3.95 0h1.85v5.8l-1.85-2.78V8.2Z" />
            </svg>
        ),
        tailwind: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="#06B6D4"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.48 6 12 6ZM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.48 12 7 12Z" />
            </svg>
        ),
        redux: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="#764ABC"
                strokeWidth="1.8"
                aria-hidden="true"
                focusable="false"
            >
                <circle cx="6.5" cy="16.5" r="2" />
                <circle cx="17.5" cy="17" r="2" />
                <circle cx="14.5" cy="6.5" r="2" />
                <path d="M8.2 15.4c2.2-1.7 5.8-1.7 7.7.2M16.8 15.2c.7-2.4.1-5.4-1.4-7M13.1 8.2c-2.4.6-4.8 2.8-5.8 6" />
            </svg>
        ),
        firebase: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="#FFCA28"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M4 20.5 6.2 4.2c.08-.6.86-.8 1.22-.32l2.34 3.82 1.72-3.26c.28-.54 1.07-.47 1.25.1L20 20.5l-8 2.2-8-2.2Zm6.55-10.08L6.7 16.9l5.3-11.2-1.45 4.72Zm1.75 9.6 5.3-1.45-2.2-5.4-3.1 6.85Z" />
            </svg>
        ),
        supabase: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="#3ECF8E"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M13.7 2.4 4.5 13.6c-.6.72-.08 1.82.86 1.82h6.2l-1.28 5.78c-.18.84.9 1.36 1.44.7l9.25-11.5c.58-.72.06-1.8-.86-1.8h-6.26l1.26-5.5c.2-.86-.86-1.4-1.42-.7Z" />
            </svg>
        ),
        shadcn: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="#111"
                strokeWidth="2"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M7 17 17 7" />
                <path d="M11 21 21 11" />
            </svg>
        ),
        framer: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="#0055FF"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M5 3h14v6h-7l7 6H5V9h7L5 3Zm0 12h7v6l-7-6Z" />
            </svg>
        ),
        api: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="#10B981"
                strokeWidth="1.8"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M8 9 5 12l3 3" />
                <path d="m16 9 3 3-3 3" />
                <path d="m14 5-4 14" />
            </svg>
        ),
        github: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="#181717"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.8c0 .27.18.6.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
        ),
    };

    return icons[type] || icons.api;
}
