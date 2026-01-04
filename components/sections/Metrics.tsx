"use client";

import { motion } from "framer-motion";
import Counter from "@/components/animations/Counter";

const metrics = [
    { value: 40, prefix: "30-", suffix: "x", label: "ROAS Achieved", decimals: 0 },
    { value: 96.4, suffix: "%", label: "Model Accuracy", decimals: 1 },
    { value: 267, prefix: "+", suffix: "%", label: "Student Growth", decimals: 0 },
    { value: 12, prefix: "8-", suffix: "K", label: "Projected Leads", decimals: 0 },
];

export default function Metrics() {
    return (
        <section className="py-20 bg-bg-secondary border-y border-border-subtle overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col items-center text-center relative md:border-r border-border-subtle last:border-0"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-text-primary mb-2">
                                <Counter
                                    value={metric.value}
                                    prefix={metric.prefix}
                                    suffix={metric.suffix}
                                    decimals={metric.decimals}
                                />
                            </div>
                            <p className="text-sm md:text-base text-text-secondary uppercase tracking-wider font-medium">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
