"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle,
    Download,
    Mail,
    MapPin,
    Phone,
    Send,
    UserRoundPlus,
    X,
    AlertCircle,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
    const [notification, setNotification] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function showNotification(type, title, message) {
        setNotification({ type, title, message });

        setTimeout(() => {
            setNotification(null);
        }, 4500);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            showNotification(
                "error",
                "Missing access key",
                "Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env.local file and restart your server.",
            );
            return;
        }

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", accessKey);

        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                showNotification(
                    "success",
                    "Message sent",
                    "Thanks! I’ll get back to you as soon as possible.",
                );
                form.reset();
            } else {
                showNotification(
                    "error",
                    "Message failed",
                    data.message || "Please email me directly instead.",
                );
            }
        } catch (error) {
            showNotification(
                "error",
                "Network error",
                "Something went wrong. Please email me directly.",
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <Notification
                notification={notification}
                onClose={() => setNotification(null)}
            />

            <section id="contact" className="section">
                <div className="container">
                    <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <SectionHeader
                            eyebrow="Contact"
                            title="Ready to build something useful?"
                            text="I’m open to frontend roles, internships, freelance projects, and collaborations where I can help turn ideas into clean, responsive web products."
                        />

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/Obayomi-Taofeek-Resume.pdf"
                                download
                                className="inline-flex items-center gap-2 bg-black px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1"
                            >
                                <Download size={14} />
                                Resume
                            </a>

                            <a
                                href="/obayomi-taofeek.vcf"
                                download
                                className="inline-flex items-center gap-2 border border-black/15 px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-black transition hover:-translate-y-1 hover:bg-black hover:text-white"
                            >
                                <UserRoundPlus size={14} />
                                vCard
                            </a>
                        </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <ContactCard
                            icon={Mail}
                            label="Email"
                            value="obayomitaofeek7@gmail.com"
                            href="mailto:obayomitaofeek7@gmail.com"
                        />

                        <ContactCard
                            icon={Phone}
                            label="Phone"
                            value="+234 704 857 8739"
                            href="tel:+2347048578739"
                        />

                        <ContactCard
                            icon={MapPin}
                            label="Location"
                            value="Ogun State, Nigeria"
                        />
                    </div>

                    <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-4xl border border-black/10 bg-[#f7f7f5] p-5 sm:p-6 lg:p-8"
                        >
                            <input
                                type="hidden"
                                name="from_name"
                                value="Obayomi Taofeek Portfolio"
                            />

                            <input
                                type="hidden"
                                name="subject"
                                value="New message from Obayomi Taofeek's portfolio"
                            />

                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                tabIndex="-1"
                                autoComplete="off"
                            />

                            <div className="mb-8">
                                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                                    Message
                                </p>

                                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                                    Tell me what you need.
                                </h3>

                                <p className="mt-3 max-w-xl text-sm leading-7 text-black/60">
                                    Whether it’s a job opportunity, freelance
                                    project, or collaboration, send the details
                                    and I’ll respond as soon as possible.
                                </p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <Field
                                    label="Name"
                                    name="name"
                                    placeholder="Your name"
                                    type="text"
                                />

                                <Field
                                    label="Email"
                                    name="email"
                                    placeholder="your@email.com"
                                    type="email"
                                />
                            </div>

                            <div className="mt-4">
                                <Field
                                    label="Subject"
                                    name="message_subject"
                                    placeholder="Project inquiry / Job opportunity"
                                    type="text"
                                />
                            </div>

                            <div className="mt-4">
                                <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.2em] text-black/40">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    required
                                    placeholder="Tell me about your project, role, or idea..."
                                    className="h-44 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/40"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-black px-5 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={14} />
                            </button>
                        </motion.form>

                        <aside className="grid gap-4">
                            <div className="rounded-4xl bg-black p-6 text-white sm:p-7">
                                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/35">
                                    Availability
                                </p>

                                <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em]">
                                    Open to frontend opportunities.
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/60">
                                    Available for junior frontend roles,
                                    internships, freelance work, and
                                    collaborations.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                <MiniInfoCard
                                    title="What I Build"
                                    items={[
                                        "Portfolio websites",
                                        "Landing pages",
                                        "Dashboards",
                                        "Web apps",
                                    ]}
                                />

                                <MiniInfoCard
                                    title="My Focus"
                                    items={[
                                        "Responsive design",
                                        "Clean UI",
                                        "Smooth interactions",
                                        "Problem solving",
                                    ]}
                                />
                            </div>

                            <div className="rounded-4xl border border-black/10 bg-[#f7f7f5] p-6">
                                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                                    Social Links
                                </p>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    <Social
                                        icon={GithubIcon}
                                        link="https://github.com/Dev-Taofeek?tab=repositories"
                                        label="GitHub"
                                        dark
                                    />

                                    <Social
                                        icon={LinkedinIcon}
                                        link="https://www.linkedin.com/in/taofeek-obayomi-a7b29a36b/"
                                        label="LinkedIn"
                                        dark
                                    />

                                    <Social
                                        icon={Mail}
                                        link="mailto:obayomitaofeek7@gmail.com"
                                        label="Email"
                                        dark
                                    />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

function Notification({ notification, onClose }) {
    return (
        <AnimatePresence>
            {notification && (
                <motion.div
                    initial={{ opacity: 0, y: -18, x: 18 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -18, x: 18 }}
                    transition={{ duration: 0.22 }}
                    className="fixed right-4 top-4 z-9999 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-black/10 bg-white p-4 shadow-2xl shadow-black/15"
                >
                    <div className="flex gap-3">
                        <div
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                                notification.type === "success"
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "bg-red-100 text-red-700"
                            }`}
                        >
                            {notification.type === "success" ? (
                                <CheckCircle size={18} />
                            ) : (
                                <AlertCircle size={18} />
                            )}
                        </div>

                        <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-black text-black">
                                {notification.title}
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-black/60">
                                {notification.message}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-black/40 transition hover:bg-black hover:text-white"
                            aria-label="Close notification"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function ContactCard({ icon: Icon, label, value, href }) {
    const content = (
        <div className="group flex min-h-35 flex-col justify-between rounded-3xl border border-black/10 bg-[#f7f7f5] p-5 transition hover:-translate-y-1 hover:bg-black hover:text-white">
            <div className="flex items-center justify-between gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-black text-white transition group-hover:bg-white group-hover:text-black">
                    <Icon size={17} />
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-black/35 transition group-hover:text-white/35">
                    {label}
                </span>
            </div>

            <p className="mt-6 wrap-break-word text-sm font-bold leading-6 text-black/70 transition group-hover:text-white/75">
                {value}
            </p>
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block">
                {content}
            </a>
        );
    }

    return content;
}

function Field({ label, placeholder, type, name }) {
    return (
        <div>
            <label className="mb-2 block text-[11px] font-black uppercase tracking-[0.2em] text-black/40">
                {label}
            </label>

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                required
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/40"
            />
        </div>
    );
}

function MiniInfoCard({ title, items }) {
    return (
        <div className="rounded-4xl border border-black/10 bg-[#f7f7f5] p-6">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                {title}
            </p>

            <div className="mt-5 space-y-3">
                {items.map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-black/65"
                    >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Social({ icon: Icon, link, label, dark = false }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`grid h-11 w-11 place-items-center rounded-full transition hover:-translate-y-1 ${
                dark
                    ? "border border-black/10 bg-white text-black hover:bg-black hover:text-white"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white hover:text-black"
            }`}
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
