"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, User, BarChart3 } from "lucide-react";

export function InteractiveMockup() {
    const [active, setActive] = useState(false);

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <motion.div
                className="bg-bg-primary/90 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden shadow-2xl"
                animate={{ scale: active ? 1.05 : 1, y: active ? -10 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Header */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                        <div className="w-10 h-10 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                            <User size={20} />
                        </div>
                        <div>
                            <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                            <div className="h-2 w-16 bg-white/10 rounded" />
                        </div>
                        <motion.button
                            className="ml-auto px-3 py-1 bg-accent-primary text-white text-xs rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Connect
                        </motion.button>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-text-muted">
                            <span>Analytics</span>
                            <span>+24%</span>
                        </div>
                        <div className="h-24 bg-white/5 rounded-lg relative overflow-hidden flex items-end justify-between px-2 pb-2">
                            {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 bg-accent-primary/50 rounded-t-sm"
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Toast Notification */}
                <motion.div
                    className="absolute bottom-4 right-4 bg-green-500/90 text-white text-xs px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg backdrop-blur-md"
                    initial={{ opacity: 0, y: 20, x: 0 }}
                    animate={{ opacity: active ? 1 : 0, y: active ? 0 : 20 }}
                >
                    <CheckCircle2 size={12} />
                    <span>Sync Complete</span>
                </motion.div>
            </motion.div>
        </div>
    );
}
