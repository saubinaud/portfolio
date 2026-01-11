"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import ParallaxWrapper from "@/components/animations/ParallaxWrapper";
import Badge from "@/components/ui/Badge";

export default function About() {
    return (
        <section id="about" className="bg-bg-secondary relative border-t border-border-subtle pt-24 lg:pt-32">
            <div className="container mx-auto px-6">

                {/* Block 1: Identity & Hook */}
                <div className="min-h-[70vh] flex flex-col justify-center max-w-4xl mx-auto mb-24">
                    <ParallaxWrapper offset={-50}>
                        <div className="mb-8">
                            <Badge variant="active" className="text-sm tracking-wider uppercase pl-2 pr-4 py-1.5 border-accent-secondary/20 bg-accent-secondary/5">
                                Sebastien Aubinaud
                            </Badge>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-12">
                            <TextReveal>Growth isn't luck.</TextReveal>
                            <br />
                            <span className="text-text-secondary">
                                <TextReveal delay={0.3}>It's infrastructure.</TextReveal>
                            </span>
                        </h2>
                    </ParallaxWrapper>

                    <ParallaxWrapper offset={30}>
                        <p className="text-xl md:text-3xl text-text-secondary leading-relaxed max-w-3xl">
                            I don't just run ads or write SQL. I build the systems that connect data to revenue—replacing "gut feeling" with engineering precision.
                        </p>
                    </ParallaxWrapper>
                </div>

                {/* Block 2: The Three Pillars (Restored Info) */}
                <div className="py-24 space-y-32">
                    <ParallaxWrapper offset={-20}>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-4">
                                <span className="text-accent-primary font-mono text-sm tracking-widest">01 / ARCHITECTURE</span>
                                <h3 className="text-3xl font-display font-bold text-text-primary">Data that actually makes sense.</h3>
                            </div>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                No more spreadsheet graveyards. I design <strong>PostgreSQL schemas</strong> that scale with your business, turning disconnected chaos into a single source of truth.
                                <br /><br />
                                <em>Evidence:</em> Turned a martial arts academy's 12 disconnected spreadsheets into a system that tripled their student base (30 → 110 students).
                            </p>
                        </div>
                    </ParallaxWrapper>

                    <ParallaxWrapper offset={-20}>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-4">
                                <span className="text-accent-primary font-mono text-sm tracking-widest">02 / SYSTEMS</span>
                                <h3 className="text-3xl font-display font-bold text-text-primary">Marketing as code.</h3>
                            </div>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                40x ROAS isn't a fluke; it's proper instrumentation. I build campaigns that are measurable from the first click to the final LTV calculation.
                                <br /><br />
                                <em>Current Focus:</em> Building the analytics infrastructure for <strong>UnaLuka</strong> (e-commerce) to drive product import decisions based on real market data.
                            </p>
                        </div>
                    </ParallaxWrapper>

                    <ParallaxWrapper offset={-20}>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-4">
                                <span className="text-accent-primary font-mono text-sm tracking-widest">03 / AUTOMATION</span>
                                <h3 className="text-3xl font-display font-bold text-text-primary">If it repeats, automate it.</h3>
                            </div>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                I create <strong>automation systems for marketing solutions and businesses</strong>. Using <strong>n8n workflows</strong> and webhooks to eliminate human drudgery. If you're spending 15 hours a week copying rows between tools, you're doing it wrong.
                                <br /><br />
                                <em>Innovation:</em> Developing <strong>NodumCRM</strong> to turn raw databases into Notion-quality interfaces without migration.
                            </p>
                        </div>
                    </ParallaxWrapper>
                </div>

                {/* Block 3: Education & Context (Cross-Continental Builder) */}
                <div className="py-24 border-t border-border-subtle/50">
                    <ParallaxWrapper offset={-10}>
                        <div className="max-w-4xl mx-auto space-y-8">
                            <span className="text-accent-primary font-mono text-sm tracking-widest block mb-4">04 / CROSS-CONTINENTAL BUILDER</span>

                            <h3 className="text-2xl md:text-3xl text-text-primary leading-tight font-light">
                                Bridging disciplines with a dual degree in <strong className="font-bold text-white">Administration & Marketing</strong> (ESAN) and <strong className="font-bold text-white">International Business</strong> (YSchools SCBS).
                            </h3>

                            <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
                                My background goes beyond academia. It is a proof of adaptability. I combine commercial strategy with technical execution to build infrastructure that scales across diverse markets.
                            </p>

                            <div className="pt-4 text-base text-text-muted">
                                <span className="inline-flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary"></span>
                                    <strong className="text-text-primary">Based in:</strong> Lima
                                </span>
                            </div>
                        </div>
                    </ParallaxWrapper>
                </div>

                {/* Block 4: Transition to Work */}
                <div className="py-24 flex justify-center">
                    <ParallaxWrapper offset={20}>
                        <div
                            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group cursor-pointer flex flex-col items-center gap-6"
                        >
                            <p className="italic text-text-muted font-medium text-lg mb-8 opacity-60">
                                "No te detengas, confía en que todo se va a conectar."
                            </p>

                            <p className="text-text-muted uppercase tracking-widest text-sm font-medium group-hover:text-text-primary transition-colors">
                                Validated Systems
                            </p>
                            <div className="w-px h-24 bg-gradient-to-b from-border-subtle to-accent-primary/50 group-hover:bg-accent-primary transition-colors"></div>
                            <span className="text-4xl group-hover:translate-y-2 transition-transform duration-500">↓</span>
                        </div>
                    </ParallaxWrapper>
                </div>

            </div>
        </section>
    );
}
