"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";

interface ParallaxProps {
    children: React.ReactNode;
    offset?: number;
    className?: string;
    direction?: "up" | "down";
}

export default function ParallaxWrapper({
    children,
    offset = 50,
    className,
    direction = "up"
}: ParallaxProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yRange = direction === "up" ? [offset, -offset] : [-offset, offset];
    const y = useTransform(scrollYProgress, [0, 1], yRange);

    // Add some physics to the parallax movement for smoothness
    const springY = useSpring(y, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y: springY }}>
                {children}
            </motion.div>
        </div>
    );
}
