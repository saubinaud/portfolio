"use client";

import { motion } from "framer-motion";

export function SchematicDiagram() {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.5, duration: 1.5 },
                opacity: { delay: i * 0.5, duration: 0.01 }
            }
        })
    };

    return (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Table 1: Users */}
                <motion.rect x="50" y="50" width="150" height="100" stroke="currentColor" strokeWidth="2"
                    variants={draw} custom={1} initial="hidden" animate="visible" />
                <motion.line x1="50" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="1"
                    variants={draw} custom={1.2} initial="hidden" animate="visible" />

                {/* Table 2: Orders */}
                <motion.rect x="300" y="150" width="150" height="120" stroke="currentColor" strokeWidth="2"
                    variants={draw} custom={2} initial="hidden" animate="visible" />
                <motion.line x1="300" y1="180" x2="450" y2="180" stroke="currentColor" strokeWidth="1"
                    variants={draw} custom={2.2} initial="hidden" animate="visible" />

                {/* Connection */}
                <motion.path d="M 200 100 L 250 100 L 250 210 L 300 210" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
                    variants={draw} custom={3} initial="hidden" animate="visible" />

                {/* Table 3: Analytics */}
                <motion.rect x="550" y="50" width="150" height="100" stroke="currentColor" strokeWidth="2"
                    variants={draw} custom={4} initial="hidden" animate="visible" />

                {/* Connection 2 */}
                <motion.path d="M 450 210 L 500 210 L 500 100 L 550 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
                    variants={draw} custom={5} initial="hidden" animate="visible" />

            </svg>
        </div>
    );
}
