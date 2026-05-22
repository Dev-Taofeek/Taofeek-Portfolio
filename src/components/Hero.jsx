"use client";

import { motion, LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

// ─── Use LazyMotion to cut Framer bundle from ~95KB → ~18KB ───
// domAnimation includes only what we need (animate, whileInView, etc.)
// Full framer-motion is only loaded when needed

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 28 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const stackItems = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Supabase",
    "Redux",
    "Firebase",
    "REST APIs",
    "Git & GitHub",
    "Shadcn UI",
];

export default function Hero() {
    return (
        // LazyMotion loads only the animation features we use — saves ~77KB JS
        <LazyMotion features={domAnimation} strict>
            <section
                id="home"
                aria-label="Introduction"
                className="grid-bg relative min-h-screen px-5 pt-28 pb-16"
            >
                <div className="container relative flex min-h-[calc(100vh-112px)] flex-col justify-center gap-16 lg:flex-row lg:items-center lg:gap-10">
                    {/* ─── Left: Text ─── */}
                    <m.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex-1"
                    >
                        {/* Available badge */}
                        <m.div
                            variants={fadeUp}
                            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur-sm"
                        >
                            <span
                                className="relative flex h-2.5 w-2.5"
                                aria-hidden="true"
                            >
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            </span>
                            <span className="mini-label text-black/55">
                                Available for work
                            </span>
                        </m.div>

                        {/* h1 — this is the LCP element, keep it render-unblocked */}
                        <m.h1
                            variants={fadeUp}
                            className="max-w-2xl text-[2.6rem] font-black leading-[0.93] tracking-[-0.065em] md:text-[3.5rem] lg:text-[4.4rem]"
                        >
                            Building web{" "}
                            <span className="relative inline-block">
                                products
                                <m.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        delay: 0.6,
                                        duration: 0.45,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="absolute -bottom-1 left-0 h-0.75 w-full origin-left bg-black"
                                    aria-hidden="true"
                                />
                            </span>
                            <br />
                            that solve real problems.
                        </m.h1>

                        <m.p
                            variants={fadeUp}
                            className="mt-7 max-w-120 text-base leading-[1.85] text-black/60"
                        >
                            I&apos;m{" "}
                            <strong className="font-black text-black">
                                Obayomi Taofeek
                            </strong>
                            , a Frontend Developer crafting fast, responsive,
                            and professional web experiences with React,
                            Next.js, TypeScript, and Tailwind CSS.
                        </m.p>

                        <m.div
                            variants={fadeUp}
                            className="mt-9 flex flex-wrap gap-3"
                        >
                            <a
                                href="#work"
                                className="inline-flex items-center gap-2.5 bg-black px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                aria-label="View my work"
                            >
                                View My Work
                                <ArrowRight size={14} aria-hidden="true" />
                            </a>

                            <a
                                href="/Obayomi%20Taofeek%20-%20Software%20Developer.pdf"
                                download
                                className="inline-flex items-center gap-2.5 border border-black/20 px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                aria-label="Download my resume"
                            >
                                <Download size={14} aria-hidden="true" />
                                Resume
                            </a>
                        </m.div>

                        <m.div
                            variants={fadeUp}
                            className="mt-12 flex flex-wrap gap-0 divide-x divide-black/10"
                            role="list"
                            aria-label="Key statistics"
                        >
                            {[
                                { value: "2+", label: "Years Coding" },
                                { value: "5+", label: "Projects Built" },
                                { value: "100%", label: "Responsive" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="px-8 first:pl-0"
                                    role="listitem"
                                >
                                    <p className="text-2xl font-black tracking-[-0.04em]">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-black/45">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </m.div>
                    </m.div>

                    {/* ─── Right: Code card ─── */}
                    <m.div
                        variants={fadeRight}
                        initial="hidden"
                        animate="show"
                        className="relative mx-auto w-full max-w-md lg:max-w-105 xl:max-w-115"
                        aria-hidden="true"
                    >
                        <div className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 rounded-full border border-black/6" />
                        <div className="pointer-events-none absolute -right-16 -top-16 h-96 w-96 rounded-full border border-black/4" />

                        <m.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                duration: 5.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10 rounded-3xl border border-black/10 bg-[#f7f7f5] p-5 shadow-2xl shadow-black/8"
                        >
                            <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-3.5">
                                <div className="flex gap-1.5">
                                    <span className="h-3 w-3 rounded-full bg-black" />
                                    <span className="h-3 w-3 rounded-full bg-black/25" />
                                    <span className="h-3 w-3 rounded-full bg-black/12" />
                                </div>
                                <span className="mini-label text-[9px] text-black/35">
                                    developer.js
                                </span>
                            </div>

                            <div className="rounded-2xl bg-[#e8e8e6] px-5 py-5">
                                <pre className="overflow-x-auto font-mono text-[12.5px] leading-[1.85] text-black/80">
                                    <code>{`// Who I am
const developer = {
  name: "Obayomi Taofeek",
  role: "Frontend Dev",
  stack: ["React", "Next.js"],
  mindset: "Solve → Build",
  available: true,
}`}</code>
                                </pre>
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-2.5">
                                {[
                                    { label: "Performance", value: "Fast" },
                                    { label: "Design", value: "Clean" },
                                    { label: "UX", value: "Useful" },
                                    { label: "Code", value: "Scalable" },
                                ].map(({ label, value }) => (
                                    <div
                                        key={label}
                                        className="rounded-xl border border-black/8 bg-white p-3.5"
                                    >
                                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-black/35">
                                            {label}
                                        </p>
                                        <p className="mt-1.5 text-sm font-black">
                                            {value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </m.div>

                        <m.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.85, duration: 0.35 }}
                            className="absolute -right-3 top-8 z-20 hidden rounded-2xl border border-black/8 bg-white px-4 py-3 shadow-xl sm:block"
                        >
                            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-black/40">
                                Focus
                            </p>
                            <p className="mt-0.5 text-[13px] font-black">
                                Problem Solving
                            </p>
                        </m.div>

                        <m.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.35 }}
                            className="absolute -bottom-4 right-6 z-20 hidden rounded-2xl bg-black p-3.5 text-white shadow-lg md:block"
                        >
                            <Sparkles size={18} />
                        </m.div>
                    </m.div>
                </div>

                {/* ─── Stack ticker ─── */}
                <div
                    className="container mt-16 overflow-hidden border-t border-black/8 pt-8"
                    aria-label="Technology stack"
                >
                    <div className="ticker-track" aria-hidden="true">
                        {[...stackItems, ...stackItems].map((item, i) => (
                            <span
                                key={i}
                                className="mx-6 whitespace-nowrap text-[11px] font-black uppercase tracking-[0.22em] text-black/30"
                            >
                                {item}
                                <span className="ml-6 text-black/15">·</span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}
