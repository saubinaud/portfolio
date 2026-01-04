"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "@/components/layout/ThemeContext";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("cursor-hover")
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    const { layout } = useTheme();

    return (
        <>
            <motion.div
                className="fixed pointer-events-none z-50 flex items-center justify-center hidden md:flex"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                {/* QUANT: Terminal Block */}
                {layout === "quant" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="w-4 h-6 bg-accent-primary animate-pulse"
                    />
                )}

                {/* CONSTRUCT: Crosshair */}
                {layout === "construct" && (
                    <motion.div
                        initial={{ opacity: 0, rotate: 45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0 }}
                        className="relative w-8 h-8"
                    >
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-accent-primary" />
                        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-accent-primary" />
                    </motion.div>
                )}

                {/* NETWORK: Magnetic Ring */}
                {layout === "network" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1,
                            scale: isHovered ? 1.5 : 1,
                            borderColor: "var(--accent-primary)"
                        }}
                        className="w-8 h-8 rounded-full border border-accent-primary bg-transparent"
                    />
                )}

                {/* INTERFACE: Glass Circle */}
                {layout === "interface" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1,
                            scale: isHovered ? 1.2 : 1,
                        }}
                        className="w-6 h-6 rounded-full bg-accent-primary/20 backdrop-blur-md border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                )}

                {/* DEFAULT: Dot */}
                {(layout === "default" || !layout) && (
                    <motion.div
                        animate={{
                            width: isHovered ? 48 : 32,
                            height: isHovered ? 48 : 32,
                            backgroundColor: isHovered ? "rgba(245, 166, 35, 0.1)" : "transparent",
                        }}
                        className="rounded-full border border-accent-primary flex items-center justify-center"
                    >
                        <div className="w-1 h-1 bg-accent-primary rounded-full" />
                    </motion.div>
                )}
            </motion.div>
        </>
    );
}
