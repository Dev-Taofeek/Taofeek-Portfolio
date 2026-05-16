"use client";

import { useState, useId } from "react";
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
    Loader2,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
    const [notification, setNotification] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formId = useId();

    function showNotification(type, title, message) {
        setNotification({ type, title, message });
        setTimeout(() => setNotification(null), 5000);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

        if (!accessKey) {
            showNotification(
                "error",
                "Configuration error",
                "The contact form isn't configured yet. Please email me directly.",
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
                    "Message sent!",
                    "Thanks for reaching out — I'll get back to you soon.",
                );
                form.reset();
            } else {
                showNotification(
                    "error",
                    "Failed to send",
                    data.message || "Please email me directly instead.",
                );
            }
        } catch {
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

            <section
                id="contact"
                className="section"
                aria-labelledby="contact-heading"
            >
                <div className="container">
                    {/* Header row */}
                    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <SectionHeader
                            id="contact-heading"
                            eyebrow="Contact"
                            title="Ready to build something useful?"
                            text="Open to frontend roles, internships, freelance projects, and collaborations. Let's turn your idea into a clean, responsive web product."
                        />

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/Obayomi-Taofeek-Resume.pdf"
                                download
                                className="inline-flex items-center gap-2 bg-black px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                aria-label="Download my resume as PDF"
                            >
                                <Download size={13} aria-hidden="true" />
                                Resume
                            </a>

                            <a
                                href="/obayomi-taofeek.vcf"
                                download
                                className="inline-flex items-center gap-2 border border-black/15 px-5 py-3 text-[11px] font-black uppercase tracking-[0.18em] transition-all hover:-translate-y-0.5 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                aria-label="Download my contact card (vCard)"
                            >
                                <UserRoundPlus size={13} aria-hidden="true" />
                                vCard
                            </a>
                        </div>
                    </div>

                    {/* Contact info cards */}
                    <div
                        className="grid gap-3 md:grid-cols-3"
                        role="list"
                        aria-label="Contact information"
                    >
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

                    {/* Main grid: form + aside */}
                    <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                        {/* Contact form */}
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-4xl border border-black/8 bg-[#f7f7f5] p-6 sm:p-8"
                            aria-label="Contact form"
                            noValidate
                        >
                            {/* Hidden honeypot fields */}
                            <input
                                type="hidden"
                                name="from_name"
                                value="Obayomi Taofeek Portfolio"
                            />
                            <input
                                type="hidden"
                                name="subject"
                                value="New enquiry from portfolio"
                            />
                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                tabIndex="-1"
                                autoComplete="off"
                                aria-hidden="true"
                            />

                            {/* Form header */}
                            <div className="mb-8">
                                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                                    Send a message
                                </p>
                                <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                                    Tell me what you need.
                                </h3>
                                <p className="mt-2.5 max-w-lg text-sm leading-[1.85] text-black/57">
                                    Whether it&apos;s a job opportunity,
                                    freelance project, or collaboration — send
                                    the details and I&apos;ll respond promptly.
                                </p>
                            </div>

                            {/* Fields */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field
                                    id={`${formId}-name`}
                                    label="Name"
                                    name="name"
                                    placeholder="Your name"
                                    type="text"
                                    autoComplete="name"
                                />
                                <Field
                                    id={`${formId}-email`}
                                    label="Email"
                                    name="email"
                                    placeholder="your@email.com"
                                    type="email"
                                    autoComplete="email"
                                />
                            </div>

                            <div className="mt-4">
                                <Field
                                    id={`${formId}-subject`}
                                    label="Subject"
                                    name="message_subject"
                                    placeholder="Project inquiry / Job opportunity"
                                    type="text"
                                />
                            </div>

                            <div className="mt-4">
                                <label
                                    htmlFor={`${formId}-message`}
                                    className="mb-2 block text-[11px] font-black uppercase tracking-[0.2em] text-black/40"
                                >
                                    Message
                                </label>
                                <textarea
                                    id={`${formId}-message`}
                                    name="message"
                                    required
                                    placeholder="Tell me about your project, role, or idea..."
                                    aria-required="true"
                                    className="h-44 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-black outline-none transition-all placeholder:text-black/30 focus:border-black/35 focus:ring-1 focus:ring-black/15"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-black px-5 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/25 disabled:cursor-not-allowed disabled:opacity-55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                                aria-busy={isSubmitting}
                                aria-label={
                                    isSubmitting
                                        ? "Sending your message..."
                                        : "Send your message"
                                }
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2
                                            size={14}
                                            className="animate-spin"
                                            aria-hidden="true"
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={13} aria-hidden="true" />
                                    </>
                                )}
                            </button>
                        </motion.form>

                        {/* Aside */}
                        <aside
                            className="grid gap-4"
                            aria-label="Additional contact information"
                        >
                            {/* Availability */}
                            <div className="rounded-4xl bg-black p-6 text-white sm:p-7">
                                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-white/30">
                                    Availability
                                </p>
                                <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.04em]">
                                    Open to frontend opportunities.
                                </h3>
                                <p className="mt-4 text-sm leading-[1.85] text-white/55">
                                    Available for junior frontend roles,
                                    internships, freelance work, and remote
                                    collaborations.
                                </p>
                            </div>

                            {/* Info cards */}
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
                                        "Performance",
                                    ]}
                                />
                            </div>

                            {/* Social links */}
                            <div className="rounded-4xl border border-black/8 bg-[#f7f7f5] p-6">
                                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                                    Social Links
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2.5">
                                    <SocialLink
                                        href="https://github.com/Dev-Taofeek?tab=repositories"
                                        label="GitHub"
                                    >
                                        <GithubIcon className="h-4.5 w-4.5" />
                                    </SocialLink>
                                    <SocialLink
                                        href="https://www.linkedin.com/in/taofeek-obayomi-a7b29a36b/"
                                        label="LinkedIn"
                                    >
                                        <LinkedinIcon className="h-4.5 w-4.5" />
                                    </SocialLink>
                                    <SocialLink
                                        href="mailto:obayomitaofeek7@gmail.com"
                                        label="Send email"
                                    >
                                        <Mail size={17} aria-hidden="true" />
                                    </SocialLink>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

/* ─── Sub-components ────────────────────────────────────────── */

function Notification({ notification, onClose }) {
    return (
        <AnimatePresence>
            {notification && (
                <motion.div
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, y: -20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: -20, x: 20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed right-4 top-4 z-9999 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-black/8 bg-white p-4 shadow-2xl shadow-black/12"
                >
                    <div className="flex gap-3">
                        <div
                            className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                                notification.type === "success"
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "bg-red-100 text-red-700"
                            }`}
                            aria-hidden="true"
                        >
                            {notification.type === "success" ? (
                                <CheckCircle size={17} />
                            ) : (
                                <AlertCircle size={17} />
                            )}
                        </div>

                        <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-black text-black">
                                {notification.title}
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-black/57">
                                {notification.message}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-black/38 transition hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                            aria-label="Dismiss notification"
                        >
                            <X size={15} aria-hidden="true" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function ContactCard({ icon: Icon, label, value, href }) {
    const content = (
        <div className="group flex min-h-35 flex-col justify-between rounded-3xl border border-black/8 bg-[#f7f7f5] p-5 transition-all hover:-translate-y-1 hover:bg-black hover:shadow-xl hover:shadow-black/15">
            <div className="flex items-center justify-between gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-black text-white transition group-hover:bg-white group-hover:text-black">
                    <Icon size={16} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-black/32 transition group-hover:text-white/30">
                    {label}
                </span>
            </div>
            <p className="mt-6 break-all text-sm font-bold leading-6 text-black/65 transition group-hover:text-white/72">
                {value}
            </p>
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label={`${label}: ${value}`}
            >
                {content}
            </a>
        );
    }

    return <div role="listitem">{content}</div>;
}

function Field({ id, label, placeholder, type, name, autoComplete }) {
    return (
        <div>
            <label
                htmlFor={id}
                className="mb-2 block text-[11px] font-black uppercase tracking-[0.2em] text-black/40"
            >
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                required
                autoComplete={autoComplete}
                aria-required="true"
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-black outline-none transition-all placeholder:text-black/30 focus:border-black/35 focus:ring-1 focus:ring-black/15"
            />
        </div>
    );
}

function MiniInfoCard({ title, items }) {
    return (
        <div className="rounded-4xl border border-black/8 bg-[#f7f7f5] p-6">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                {title}
            </p>
            <ul className="mt-5 space-y-3" role="list">
                {items.map((item) => (
                    <li
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium text-black/62"
                    >
                        <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                            aria-hidden="true"
                        />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function SocialLink({ href, label, children }) {
    const isEmail = href.startsWith("mailto:");
    return (
        <a
            href={href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            aria-label={`${label}${isEmail ? "" : " (opens in new tab)"}`}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-black transition-all hover:-translate-y-0.5 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        >
            {children}
        </a>
    );
}

function GithubIcon({ className }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.8c0 .27.18.6.69.49A10.15 10.15 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}

function LinkedinIcon({ className }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.28 8.01h4.44V23H.28V8.01ZM8.15 8.01h4.25v2.05h.06c.59-1.12 2.03-2.3 4.18-2.3C21.11 7.76 22 10.7 22 14.53V23h-4.43v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.96V23H7.77V8.01h.38Z" />
        </svg>
    );
}
