"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
            <nav className="container relative flex items-center justify-between rounded-full border border-black/10 bg-[#eeeeec]/85 px-4 py-3 backdrop-blur-xl md:px-5">
                <a
                    href="#home"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2"
                >
                    <span className="grid h-8 w-8 place-items-center rounded bg-black text-xs font-black text-white">
                        TO
                    </span>

                    <span className="text-sm font-black tracking-tight">
                        OBAYOMI
                    </span>
                </a>

                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-[11px] font-black uppercase tracking-[0.22em] text-black/55 transition hover:text-black"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f7f7f5] px-4 py-2 transition hover:bg-black hover:text-white"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>

                        <span className="text-[10px] font-black uppercase tracking-[0.18em]">
                            Available
                        </span>
                    </a>

                    <a
                        href="/Obayomi-Taofeek-Resume.pdf"
                        download
                        className="inline-flex rounded-full bg-black px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1"
                    >
                        Resume
                    </a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/40 transition hover:bg-black hover:text-white lg:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="container mt-3 overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#eeeeec]/95 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl lg:hidden"
                    >
                        <div className="grid gap-1">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setOpen(false)}
                                    className="group flex items-center justify-between rounded-[1.2rem] px-4 py-3 transition hover:bg-black hover:text-white"
                                >
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-black/65 transition group-hover:text-white">
                                        {link}
                                    </span>

                                    <span className="text-[10px] font-black text-black/35 transition group-hover:text-white/40">
                                        0{index + 1}
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="mt-2 grid grid-cols-2 gap-2 border-t border-black/10 pt-2">
                            <a
                                href="/Obayomi-Taofeek-Resume.pdf"
                                download
                                onClick={() => setOpen(false)}
                                className="rounded-[1.2rem] bg-black px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.18em] text-white"
                            >
                                Resume
                            </a>

                            <a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="rounded-[1.2rem] border border-black/10 bg-[#f7f7f5] px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.18em] text-black"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
