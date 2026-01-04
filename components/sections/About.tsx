"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-bg-secondary relative border-y border-border-subtle">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-display font-bold">
                            <TextReveal>About Me</TextReveal>
                        </h2>

                        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                            <p>
                                I'm Sebastien—a Growth Engineer based between Peru, France, and wherever the work takes me.
                            </p>
                            <p>
                                I don't just run ads or write SQL. I build the connective tissue between data, automation, and growth. The systems that let businesses scale without breaking.
                            </p>

                            <ul className="space-y-4 pt-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-accent-primary font-bold mt-1">→</span>
                                    <div>
                                        <strong className="text-text-primary block">Data Architecture</strong>
                                        Designing databases that actually make sense. PostgreSQL schemas that scale, not spreadsheet graveyards.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent-primary font-bold mt-1">→</span>
                                    <div>
                                        <strong className="text-text-primary block">Marketing Systems</strong>
                                        30-40x ROAS isn't luck—it's infrastructure. Campaigns that are measurable from click to conversion.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent-primary font-bold mt-1">→</span>
                                    <div>
                                        <strong className="text-text-primary block">Automation</strong>
                                        n8n workflows, webhooks, API integrations. If a human is doing it repeatedly, a machine should do it instead.
                                    </div>
                                </li>
                            </ul>

                            <div className="pt-8 border-t border-border-subtle">
                                <p className="font-medium text-text-primary mb-2">Currently:</p>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Finishing dual degree: Administration & Marketing (ESAN Peru) + International Business (YSchools SCBS, France)</li>
                                    <li>Building NodumCRM</li>
                                    <li>Taking on select growth partnerships through NodumStudio</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button onClick={() => window.open('/resume.pdf', '_blank')}>
                                Download CV
                            </Button>
                            <Button variant="outline" onClick={() => window.open('https://linkedin.com/in/sebastien-aubinaud', '_blank')}>
                                LinkedIn
                            </Button>
                        </div>
                    </div>

                    <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square bg-bg-tertiary rounded-2xl overflow-hidden border border-border-subtle group">
                        {/* Abstract visualization or photo placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-bg-tertiary to-bg-primary flex items-center justify-center">
                            <div className="relative w-full h-full">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-primary/20 rounded-full blur-[80px]"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <div className="flex items-center justify-center h-full text-text-muted font-mono text-sm">
                                    [Sebastien's Photo / Dynamic Viz]
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
