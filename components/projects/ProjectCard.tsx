"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ProjectCard({ project }: { project: Project }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="cursor-pointer h-full">
                <Card className="h-full flex flex-col p-6 hover:border-accent-primary/30 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-text-muted">{project.category}</span>
                        {project.status && (
                            <Badge variant="active" className="text-[10px] py-0.5">{project.status}</Badge>
                        )}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-lg text-text-secondary font-medium mb-4 flex-grow">
                        {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {project.metrics.slice(0, 2).map((metric, i) => (
                            <span key={i} className="text-xs border border-border-subtle px-2 py-1 rounded bg-bg-tertiary">
                                {metric}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex items-center text-accent-primary text-sm font-medium">
                        View Blueprint <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                </Card>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={`project-${project.id}`}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-bg-secondary border border-border-subtle rounded-2xl shadow-2xl custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-bg-secondary/95 backdrop-blur border-b border-border-subtle">
                                <div>
                                    <h2 className="text-2xl font-display font-bold">{project.title}</h2>
                                    <p className="text-sm text-text-muted">{project.category}</p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-bg-tertiary transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-8 space-y-8">
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    {project.metrics.map((metric, i) => (
                                        <div key={i} className="bg-bg-tertiary p-4 rounded-lg border border-border-subtle text-center">
                                            <span className="block text-accent-primary font-bold">{metric}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="prose prose-invert max-w-none">
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">The Challenge</h3>
                                                <p className="text-text-secondary">{project.challenge}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Key Insight</h3>
                                                <blockquote className="border-l-2 border-accent-primary pl-4 italic text-text-secondary">
                                                    "{project.keyInsight}"
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Approach</h3>
                                                <ul className="space-y-2">
                                                    {project.approach.map((step, i) => (
                                                        <li key={i} className="flex gap-2 text-text-secondary">
                                                            <span className="text-accent-primary font-bold">{i + 1}.</span>
                                                            {step}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Results</h3>
                                                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                                                    {project.results.map((res, i) => (
                                                        <li key={i}>{res}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-border-subtle">
                                    <h4 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tools.map((tool) => (
                                            <Badge key={tool}>{tool}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
