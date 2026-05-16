"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectScreenshots({ project }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const images = project.images;

    const openImage = useCallback((index) => setActiveIndex(index), []);
    const closeImage = useCallback(() => setActiveIndex(null), []);

    const goNext = useCallback(() => {
        setActiveIndex((i) => (i + 1) % images.length);
    }, [images.length]);

    const goPrev = useCallback(() => {
        setActiveIndex((i) => (i - 1 + images.length) % images.length);
    }, [images.length]);

    // Keyboard navigation in lightbox
    useEffect(() => {
        if (activeIndex === null) return;

        function onKey(e) {
            if (e.key === "Escape") closeImage();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
        }

        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [activeIndex, closeImage, goNext, goPrev]);

    return (
        <>
            <div className="rounded-4xl border border-black/8 bg-[#f7f7f5] p-5 md:p-8">
                <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                            Project Preview
                        </p>
                        <h2 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                            Screens from the project
                        </h2>
                    </div>
                    <p
                        className="text-xs font-bold text-black/40"
                        aria-hidden="true"
                    >
                        Click any image to enlarge
                    </p>
                </div>

                <div className="space-y-5">
                    {/* Hero screenshot */}
                    <ScreenshotFrame
                        image={images[0]}
                        title={`${project.title} — Main Screen`}
                        onClick={() => openImage(0)}
                        priority
                    />

                    {/* Grid of remaining screenshots */}
                    {images.length > 1 && (
                        <div className="grid gap-5 sm:grid-cols-2">
                            {images.slice(1).map((image, index) => (
                                <ScreenshotFrame
                                    key={image}
                                    image={image}
                                    title={`${project.title} — Screen ${index + 2}`}
                                    onClick={() => openImage(index + 1)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="fixed inset-0 z-9999 flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
                        onClick={closeImage}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Fullscreen view of ${project.title} screenshot ${activeIndex + 1} of ${images.length}`}
                    >
                        {/* Close */}
                        <button
                            onClick={closeImage}
                            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-black transition hover:bg-white hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            aria-label="Close fullscreen image (Escape)"
                        >
                            <X size={19} aria-hidden="true" />
                        </button>

                        {/* Counter */}
                        <div className="absolute left-4 top-4 z-20 rounded-full bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/80">
                            {activeIndex + 1} / {images.length}
                        </div>

                        {/* Prev button */}
                        {images.length > 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goPrev();
                                }}
                                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                aria-label="Previous image (Left arrow)"
                            >
                                <ChevronLeft size={20} aria-hidden="true" />
                            </button>
                        )}

                        {/* Next button */}
                        {images.length > 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goNext();
                                }}
                                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                                aria-label="Next image (Right arrow)"
                            >
                                <ChevronRight size={20} aria-hidden="true" />
                            </button>
                        )}

                        {/* Image */}
                        <motion.div
                            key={activeIndex}
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-[#eeeeec]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[activeIndex]}
                                alt={`${project.title} fullscreen — screen ${activeIndex + 1}`}
                                fill
                                sizes="100vw"
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function ScreenshotFrame({ image, title, onClick, priority = false }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="group w-full overflow-hidden rounded-3xl border border-black/8 bg-[#e5e5e1] p-3 text-left transition-all hover:-translate-y-1 hover:border-black/15 hover:shadow-2xl hover:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            aria-label={`View ${title} fullscreen`}
        >
            <div className="overflow-hidden rounded-[1.2rem] border border-black/8 bg-[#eeeeec]">
                {/* Browser chrome */}
                <div className="flex items-center justify-between border-b border-black/8 bg-white/85 px-4 py-2.5 backdrop-blur-md">
                    <div className="flex gap-1.5" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-full bg-black" />
                        <span className="h-2.5 w-2.5 rounded-full bg-black/22" />
                        <span className="h-2.5 w-2.5 rounded-full bg-black/12" />
                    </div>
                    <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-black/38">
                        <ZoomIn size={12} aria-hidden="true" />
                        View
                    </span>
                </div>

                {/* Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        priority={priority}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-top transition-transform duration-700 will-change-transform group-hover:scale-[1.03]"
                        quality={85}
                    />
                </div>
            </div>
        </button>
    );
}
