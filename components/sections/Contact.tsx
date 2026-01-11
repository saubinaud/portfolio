"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" className="py-12 bg-bg-primary border-t border-border-subtle">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Identity / Copyright */}
                    <div className="text-center md:text-left">
                        <h4 className="font-display font-bold text-lg text-text-primary">Sebastien Aubinaud</h4>
                        <p className="text-text-muted text-sm mt-1">Growth Engineer • Lima, Peru</p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex items-center gap-8">
                        <a
                            href="mailto:contact@nodumstudio.com"
                            className="text-text-secondary hover:text-accent-primary transition-colors text-sm font-medium"
                        >
                            contact@nodumstudio.com
                        </a>

                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/sebastien-aubinaud" target="_blank" className="text-text-muted hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com" target="_blank" className="text-text-muted hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
