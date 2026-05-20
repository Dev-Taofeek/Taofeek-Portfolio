"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Close on Escape key
    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") setOpen(false);
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    // Scroll shadow
    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 20);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Active section tracking via IntersectionObserver
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.toLowerCase());
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { rootMargin: "-40% 0px -55% 0px" },
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <header
            className="fixed left-0 top-0 z-50 w-full px-4 py-4"
            role="banner"
        >
            <nav
                className={`container relative flex items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 md:px-5 ${
                    scrolled
                        ? "border-black/15 bg-[#eeeeec]/90 shadow-lg shadow-black/6"
                        : "border-black/8 bg-[#eeeeec]/75"
                }`}
                aria-label="Main navigation"
            >
                {/* Logo */}
                <a
                    href="#home"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                    aria-label="Obayomi Taofeek — home"
                >
                    <span
                        className="grid h-8 w-8 place-items-center rounded bg-black text-[11px] font-black text-white"
                        aria-hidden="true"
                    >
                        TO
                    </span>
                    <span className="text-sm font-black tracking-tight">
                        OBAYOMI
                    </span>
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-7 lg:flex" role="list">
                    {navLinks.map((link) => {
                        const id = link.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <li key={link}>
                                <a
                                    href={`#${id}`}
                                    className={`relative text-[11px] font-black uppercase tracking-[0.22em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ${
                                        isActive
                                            ? "text-black"
                                            : "text-black/50 hover:text-black"
                                    }`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {link}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-indicator"
                                            className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-black"
                                            aria-hidden="true"
                                        />
                                    )}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop right actions */}
                <div className="hidden items-center gap-2.5 md:flex">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f7f7f5] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition-all hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                        aria-label="Contact me — I'm available for work"
                    >
                        <span
                            className="relative flex h-2 w-2 shrink-0"
                            aria-hidden="true"
                        >
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Available
                    </a>

                    <a
                        href="/Obayomi%20Taofeek%20-%20Software%20Engineer.pdf"
                        download
                        className="inline-flex rounded-full bg-black px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                        aria-label="Download my resume"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/40 transition hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 lg:hidden"
                    aria-label={
                        open ? "Close navigation menu" : "Open navigation menu"
                    }
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={open ? "close" : "open"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            {open ? (
                                <X size={17} aria-hidden="true" />
                            ) : (
                                <Menu size={17} aria-hidden="true" />
                            )}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="container mt-2.5 overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#eeeeec]/97 p-2 shadow-2xl shadow-black/10 backdrop-blur-xl lg:hidden"
                        role="dialog"
                        aria-label="Mobile navigation"
                    >
                        <nav>
                            <ul className="grid gap-0.5" role="list">
                                {navLinks.map((link, index) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase()}`}
                                            onClick={() => setOpen(false)}
                                            className="group flex items-center justify-between rounded-[1.2rem] px-4 py-3.5 transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                        >
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-black/65 transition-colors group-hover:text-white">
                                                {link}
                                            </span>
                                            <span className="text-[10px] font-black text-black/30 transition-colors group-hover:text-white/40">
                                                0{index + 1}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-black/8 pt-2">
                                <a
                                    href="/Obayomi%20Taofeek%20-%20Software%20Engineer.pdf"
                                    download
                                    onClick={() => setOpen(false)}
                                    className="rounded-[1.2rem] bg-black px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.18em] text-white transition-all hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                    aria-label="Download my resume"
                                >
                                    Resume
                                </a>

                                <a
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                    className="rounded-[1.2rem] border border-black/10 bg-[#f7f7f5] px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.18em] transition-all hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                                    aria-label="Go to contact section"
                                >
                                    Contact
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
