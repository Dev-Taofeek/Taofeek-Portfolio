"use client";

import { useState } from "react";
import { Menu, X, Search, Grid3X3, UserCircle } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
            <nav className="container flex items-center justify-between rounded-full border border-black/10 bg-[#eeeeec]/85 px-4 py-3 backdrop-blur-xl md:px-5">
                <a href="#home" className="flex items-center gap-2">
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

                <div className="hidden items-center gap-4 md:flex">
                    <Search size={17} strokeWidth={1.8} />
                    <Grid3X3 size={17} strokeWidth={1.8} />
                    <a href="#contact" aria-label="Contact">
                        <UserCircle size={20} strokeWidth={1.8} />
                    </a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="grid h-9 w-9 place-items-center rounded-full border border-black/10 lg:hidden"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </nav>

            {open && (
                <div className="container mt-3 rounded-3xl border border-black/10 bg-[#eeeeec] p-4 shadow-xl lg:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setOpen(false)}
                            className="block rounded-2xl px-4 py-3 text-xs font-black uppercase tracking-[0.22em] text-black/65 hover:bg-black hover:text-white"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
