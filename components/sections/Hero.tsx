"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import TextReveal from "@/components/animations/TextReveal";
import Badge from "@/components/ui/Badge";
import ParallaxWrapper from "@/components/animations/ParallaxWrapper";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent-primary opacity-5 blur-[100px]"></div>
            </div>

            <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Badge variant="active" className="text-sm tracking-wider uppercase pl-2 pr-4 py-1.5 border-accent-secondary/20 bg-accent-secondary/5">
                        Growth Engineer • Systems Builder
                    </Badge>
                </motion.div>

                {/* Headlines */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-text-primary leading-[1.1]">
                        <TextReveal delay={0.2}>I turn data into</TextReveal>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                            <TextReveal delay={0.6}>growth systems.</TextReveal>
                        </span>
                    </h1>

                    <ParallaxWrapper offset={-30}>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
                        >
                            From database architecture to 40x ROAS campaigns.
                            <br className="hidden md:block" />
                            I build the infrastructure that scales businesses.
                        </motion.p>
                    </ParallaxWrapper>
                </div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                    <Link href="#work">
                        <Button size="lg" className="group">
                            View Selected Work
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="outline" size="lg">
                            Contact Me
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-sm"
            >
                <span>Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-4 h-4 text-accent-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
}
