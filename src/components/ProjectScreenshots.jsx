"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectScreenshots({ project }) {
    const [activeImage, setActiveImage] = useState(null);

    return (
        <>
            <div className="rounded-4xl border border-black/10 bg-[#f7f7f5] p-5 md:p-8">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-black/35">
                            Project Preview
                        </p>

                        <h2 className="mt-3 text-2xl font-black tracking-[-0.04em]">
                            Screens from the project
                        </h2>
                    </div>

                    <p className="text-sm font-medium text-black/45">
                        Click any image to view fullscreen
                    </p>
                </div>

                <div className="mt-8 space-y-5">
                    <ScreenshotFrame
                        image={project.images[0]}
                        title={`${project.title} — Main Screen`}
                        onClick={() => setActiveImage(project.images[0])}
                        priority
                    />

                    <div className="grid gap-5 md:grid-cols-2">
                        {project.images.slice(1).map((image, index) => (
                            <ScreenshotFrame
                                key={image}
                                image={image}
                                title={`${project.title} — Screen ${index + 2}`}
                                onClick={() => setActiveImage(image)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {activeImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setActiveImage(null)}
                    >
                        <button
                            onClick={() => setActiveImage(null)}
                            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-black transition hover:scale-105"
                            aria-label="Close fullscreen image"
                        >
                            <X size={20} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative h-[85vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-[#eeeeec]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={activeImage}
                                alt={`${project.title} fullscreen screenshot`}
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
            className="group w-full overflow-hidden rounded-3xl border border-black/10 bg-[#e5e5e1] p-3 text-left transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10"
        >
            <div className="overflow-hidden rounded-[1.2rem] border border-black/10 bg-[#eeeeec]">
                <div className="flex items-center justify-between border-b border-black/10 bg-white/80 px-4 py-3 backdrop-blur-md">
                    <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-black" />
                        <span className="h-2.5 w-2.5 rounded-full bg-black/25" />
                        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    </div>

                    <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-black/40">
                        <ZoomIn size={13} />
                        View
                    </span>
                </div>

                <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        priority={priority}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                </div>
            </div>
        </button>
    );
}
