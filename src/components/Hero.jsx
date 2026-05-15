"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Play, Sparkles, Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="grid-bg relative min-h-screen px-5 pt-28">
            <div className="container grid min-h-[calc(100vh-110px)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                >
                    <p className="mini-label mb-8 text-black/45">
                        Design. Build. Deploy.
                    </p>

                    <h1 className="max-w-2xl text-[2.8rem] font-black leading-[0.95] tracking-[-0.065em] sm:text-3xl md:text-4xl lg:text-[4.75rem]">
                        Building web products that solve real problems.
                    </h1>

                    <p className="mt-6 max-w-md text-sm leading-7 text-black/60 md:text-[15px]">
                        I’m Obayomi Taofeek, a Frontend Developer focused on
                        creating fast, responsive, and professional web
                        experiences with React, Next.js, TypeScript, and
                        Tailwind CSS.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-3 bg-black px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-white transition hover:-translate-y-1"
                        >
                            <span className="grid h-8 w-8 place-items-center border border-white/20">
                                <Play size={13} fill="white" />
                            </span>
                            View Work
                        </a>

                        <a
                            href="/Obayomi-Taofeek-Resume.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 border border-black/15 px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition hover:-translate-y-1 hover:bg-black hover:text-white"
                        >
                            Resume <Download size={14} />
                        </a>
                    </div>

                    <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                        <Stat value="2+" label="Years" />
                        <Stat value="5+" label="Projects" />
                        <Stat value="3" label="Experiences" />
                        <Stat value="100%" label="Responsive" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.75 }}
                    className="relative mx-auto w-full max-w-150"
                >
                    <div className="absolute right-0 top-8 h-80 w-80 rounded-full bg-black/[0.035] blur-3xl" />

                    <div className="relative min-h-97.5">
                        <div className="absolute right-8 top-6 hidden h-72 w-72 rounded-full border border-black/10 md:block" />
                        <div className="absolute right-24 top-20 hidden h-52 w-52 rounded-full border border-black/10 md:block" />

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10 mx-auto rounded-4xl border border-black/10 bg-[#f7f7f5] p-5 shadow-2xl shadow-black/10"
                        >
                            <div className="mb-5 flex items-center justify-between border-b border-black/10 pb-4">
                                <div className="flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-black" />
                                    <span className="h-3 w-3 rounded-full bg-black/30" />
                                    <span className="h-3 w-3 rounded-full bg-black/15" />
                                </div>

                                <Code2 size={20} />
                            </div>

                            <div className="rounded-[1.4rem] bg-[#eeeeec] p-5">
                                <div className="space-y-4 font-mono text-[13px] leading-6 text-black/75">
                                    <p>
                                        <span className="font-bold text-black">
                                            const
                                        </span>{" "}
                                        developer = {"{"}
                                    </p>
                                    <p className="pl-5">
                                        name: &quot;Obayomi Taofeek&quot;,
                                    </p>
                                    <p className="pl-5">
                                        role: &quot;Frontend Developer&quot;,
                                    </p>
                                    <p className="pl-5">
                                        stack: [&quot;Next.js&quot;,
                                        &quot;React&quot;,
                                        &quot;Tailwind&quot;],
                                    </p>
                                    <p className="pl-5">
                                        mindset: &quot;Solve before
                                        coding&quot;,
                                    </p>
                                    <p>{"}"}</p>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-2 gap-3">
                                <MiniCard title="Performance" value="Fast" />
                                <MiniCard title="Design" value="Clean" />
                                <MiniCard title="UX" value="Useful" />
                                <MiniCard title="Code" value="Scalable" />
                            </div>
                        </motion.div>

                        <div className="absolute right-1 top-12 z-20 hidden rounded-xl bg-white px-5 py-4 shadow-xl sm:block">
                            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/40">
                                Focus
                            </p>
                            <p className="font-black">Problem Solving</p>
                        </div>

                        <div className="absolute bottom-20 right-3 z-20 hidden rounded-full bg-black p-4 text-white md:block">
                            <Sparkles size={19} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function Stat({ value, label }) {
    return (
        <div className="border-l border-black/10 pl-4">
            <p className="text-2xl font-black tracking-[-0.04em]">{value}</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-black/45">
                {label}
            </p>
        </div>
    );
}

function MiniCard({ title, value }) {
    return (
        <div className="rounded-2xl border border-black/10 bg-white p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">
                {title}
            </p>
            <p className="mt-2 text-sm font-black">{value}</p>
        </div>
    );
}
