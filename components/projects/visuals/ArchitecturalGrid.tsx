"use client";

import { motion } from "framer-motion";

export function ArchitecturalGrid() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            {/* Base Grid */}
            <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]" />

            {/* Dynamic Rulers */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-10 left-0 h-px bg-accent-primary"
            />
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                className="absolute top-0 left-10 w-px bg-accent-primary"
            />

            {/* Measurement Markets */}
            <div className="absolute top-12 right-12 font-mono text-xs text-accent-primary">
                W: 100%
            </div>
            <div className="absolute bottom-12 left-12 font-mono text-xs text-accent-primary">
                H: 100vh
            </div>

            {/* Crosshairs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-accent-primary" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 h-px w-full bg-accent-primary" />
            </div>
        </div>
    );
}
