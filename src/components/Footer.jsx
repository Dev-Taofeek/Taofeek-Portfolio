export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="border-t border-black/8 px-5 py-10"
            role="contentinfo"
        >
            <div className="container">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    {/* Logo / branding */}
                    <a
                        href="#home"
                        className="flex items-center gap-2.5 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                        aria-label="Obayomi Taofeek — back to top"
                    >
                        <span
                            className="grid h-7 w-7 place-items-center rounded bg-black text-[10px] font-black text-white"
                            aria-hidden="true"
                        >
                            TO
                        </span>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-black/50">
                            Obayomi Taofeek
                        </span>
                    </a>

                    {/* Center: nav links */}
                    <nav aria-label="Footer navigation">
                        <ul
                            className="flex flex-wrap justify-center gap-6"
                            role="list"
                        >
                            {[
                                { label: "About", href: "#about" },
                                { label: "Projects", href: "#projects" },
                                { label: "Skills", href: "#skills" },
                                { label: "Contact", href: "#contact" },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right: copyright */}
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/35">
                        <span aria-label={`Copyright ${year}`}>© {year}</span>
                        {" · "}
                        Built with Next.js &amp; Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
