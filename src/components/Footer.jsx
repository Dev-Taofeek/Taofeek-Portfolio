export default function Footer() {
    return (
        <footer className="border-t border-black/10 px-5 py-8">
            <div className="container flex flex-col items-center justify-between gap-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-black/45 md:flex-row">
                <p>© {new Date().getFullYear()} Obayomi Taofeek</p>
                <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
            </div>
        </footer>
    );
}
