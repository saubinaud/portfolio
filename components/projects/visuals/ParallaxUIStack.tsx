"use client";

import { motion } from "framer-motion";

export function ParallaxUIStack() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none perspective-[1000px] overflow-hidden">
            {/* Soft Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-20" />

            {/* Floating Card 1 (Back Left) */}
            <motion.div
                initial={{ y: 0, rotateX: 5, rotateY: -5, rotateZ: -2 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] left-[10%] w-64 h-48 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg transform-gpu"
            />

            {/* Floating Card 2 (Front Right) */}
            <motion.div
                initial={{ y: 0, rotateX: 10, rotateY: 5, rotateZ: 2 }}
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[40%] right-[15%] w-80 h-56 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl transform-gpu"
            >
                <div className="p-4 space-y-2">
                    <div className="w-full h-2 bg-white/20 rounded-full" />
                    <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                </div>
            </motion.div>

            {/* Floating Connection Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
                <path d="M 200 300 Q 400 500 800 400" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="5 5" />
            </svg>
        </div>
    );
}
