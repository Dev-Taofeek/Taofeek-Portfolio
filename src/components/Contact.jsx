"use client";

import { motion } from "framer-motion";
import {
    Download,
    Mail,
    MapPin,
    Phone,
    Send,
    UserRoundPlus,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="overflow-hidden rounded-4xl bg-black text-white">
                    <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-">
                            <SectionHeader
                                eyebrow="Contact"
                                title="Have a project or role in mind? Let’s talk."
                                text="I’m open to frontend roles, internships, freelance projects, and collaborations where I can build useful products."
                            />

                            <div className="space-y-4">
                                <ContactItem
                                    icon={Mail}
                                    text="obayomitaofeek7@gmail.com"
                                    href="mailto:obayomitaofeek7@gmail.com"
                                />

                                <ContactItem
                                    icon={Phone}
                                    text="+234 704 857 8739"
                                    href="tel:+2347048578739"
                                />

                                <ContactItem
                                    icon={MapPin}
                                    text="Ogun State, Nigeria"
                                />
                            </div>

                            <div className="my-4 grid gap-3 sm:grid-cols-2">
                                <a
                                    href="/Obayomi-Taofeek-Resume.pdf"
                                    download
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:-translate-y-1"
                                >
                                    <Download size={15} />
                                    Resume
                                </a>

                                <a
                                    href="/obayomi-taofeek.vcf"
                                    download
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-black"
                                >
                                    <UserRoundPlus size={15} />
                                    vCard
                                </a>
                            </div>

                            <div className="mt-2 lg:mt-4 flex flex-wrap gap-3">
                                <Social
                                    icon={GithubIcon}
                                    link="https://github.com/Dev-Taofeek?tab=repositories"
                                    label="GitHub"
                                />

                                <Social
                                    icon={LinkedinIcon}
                                    link="https://www.linkedin.com/in/taofeek-obayomi-a7b29a36b/"
                                    label="LinkedIn"
                                />

                                <Social
                                    icon={Mail}
                                    link="mailto:obayomitaofeek7@gmail.com"
                                    label="Email"
                                />
                            </div>
                        </div>

                        <motion.form
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-4 sm:p-6 lg:p-8 xl:p-10"
                        >
                            <div className="rounded-3xl border border-white/10 bg-white/6 p-4 sm:p-5 md:p-6">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <Field
                                        label="Name"
                                        placeholder="Your name"
                                        type="text"
                                    />

                                    <Field
                                        label="Email"
                                        placeholder="your@email.com"
                                        type="email"
                                    />
                                </div>

                                <div className="mt-4">
                                    <Field
                                        label="Subject"
                                        placeholder="Project inquiry / Job opportunity"
                                        type="text"
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                                        Message
                                    </label>

                                    <textarea
                                        placeholder="Tell me about your project, role, or idea..."
                                        className="h-36 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/40 sm:h-44"
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-black transition hover:-translate-y-1"
                                >
                                    Send Message <Send size={14} />
                                </button>

                                <p className="mt-4 text-center text-xs leading-6 text-white/35">
                                    Prefer direct contact? Email me and I’ll
                                    respond as soon as possible.
                                </p>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Field({ label, placeholder, type }) {
    return (
        <div>
            <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/40"
            />
        </div>
    );
}

function ContactItem({ icon: Icon, text, href }) {
    const content = (
        <>
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10">
                <Icon size={17} />
            </div>

            <span className="break-all text-sm text-white/65 sm:break-normal">
                {text}
            </span>
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className="flex items-center gap-3 rounded-2xl transition hover:text-white"
            >
                {content}
            </a>
        );
    }

    return <div className="flex items-center gap-3">{content}</div>;
}

function Social({ icon: Icon, link, label }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:bg-white hover:text-black"
        >
            <Icon className="h-5 w-5" />
        </a>
    );
}

function GithubIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.8c0 .27.18.6.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}

function LinkedinIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.28 8.01h4.44V23H.28V8.01ZM8.15 8.01h4.25v2.05h.06c.59-1.12 2.03-2.3 4.18-2.3C21.11 7.76 22 10.7 22 14.53V23h-4.43v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.96V23H7.77V8.01h.38Z" />
        </svg>
    );
}
