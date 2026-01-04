"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface BlueprintPageProps {
    children: ReactNode;
    index: number;
    total: number;
    progress: MotionValue<number>;
}

export function BlueprintPage({ children, index, total, progress }: BlueprintPageProps) {
    // Calculate range for this specific page
    // e.g. if total 4 pages:
    // page 0: 0.0 - 0.25
    // page 1: 0.25 - 0.5
    // etc.
    const step = 1 / total;
    const start = index * step;
    const end = (index + 1) * step;

    // Fade in/out logic
    const opacity = useTransform(
        progress,
        [start, start + step * 0.2, end - step * 0.2, end],
        [0, 1, 1, 0]
    );

    // Slide logic for a "card stack" feel
    const y = useTransform(
        progress,
        [start, end],
        ["50px", "-50px"]
    );

    // Scale logic
    const scale = useTransform(
        progress,
        [start, start + step * 0.2, end - step * 0.2, end],
        [0.9, 1, 1, 0.95]
    );

    // For the very first page, we want it visible initially without scrolling if it's the cover
    const isFirst = index === 0;
    const opacityFinal = isFirst
        ? useTransform(progress, [0, step * 0.2, end - step * 0.2, end], [1, 1, 1, 0])
        : opacity;

    const yFinal = isFirst
        ? useTransform(progress, [0, end], ["0px", "-50px"])
        : y;

    const scaleFinal = isFirst
        ? useTransform(progress, [0, end], [1, 0.95])
        : scale;


    return (
        <motion.div
            style={{ opacity: opacityFinal, y: yFinal, scale: scaleFinal }}
            className="absolute inset-0 flex flex-col justify-center items-center p-6 md:p-12 pointer-events-none"
        >
            <div className="w-full max-w-4xl pointer-events-auto">
                {children}
            </div>
        </motion.div>
    );
}

export function BlueprintSystem({ children, height = "300vh" }: { children: (progress: MotionValue<number>) => ReactNode, height?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative" style={{ height }}>
            <div className="sticky top-0 h-screen overflow-hidden">
                {children(scrollYProgress)}
            </div>
        </div>
    );
}
