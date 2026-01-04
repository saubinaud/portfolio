"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import TextReveal from "@/components/animations/TextReveal";
import { Mail, Calendar, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-bg-primary relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Badge variant="active" className="mx-auto">Let's Build Something</Badge>

                    <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
                        Have a growth challenge?
                    </h2>

                    <p className="text-xl text-text-secondary max-w-xl mx-auto">
                        I'm selective about projects, but always open to interesting conversations.
                        Whether it's database architecture or a scaling strategy.
                    </p>

                    <div className="pt-8 flex flex-col items-center gap-6">
                        <a
                            href="mailto:contact@nodumstudio.com"
                            className="text-2xl md:text-4xl font-display font-bold hover:text-accent-primary transition-colors border-b-2 border-transparent hover:border-accent-primary pb-1"
                        >
                            contact@nodumstudio.com
                        </a>

                        <div className="flex gap-4">
                            <Button size="lg" className="gap-2" onClick={() => window.open('https://calendly.com/', '_blank')}>
                                <Calendar className="w-4 h-4" />
                                Schedule a Call
                            </Button>
                        </div>

                        <div className="flex gap-6 mt-8">
                            <a href="https://linkedin.com" target="_blank" className="text-text-secondary hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://github.com" target="_blank" className="text-text-secondary hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="mailto:contact@nodumstudio.com" className="text-text-secondary hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>

                        <p className="text-sm text-text-muted mt-8">
                            Based in: Lima, Peru | Open to remote work worldwide
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Badge from "@/components/ui/Badge";
