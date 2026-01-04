"use client";

import { projects } from "@/lib/projects";
import ProjectChapter from "@/components/projects/ProjectChapter";
import TextReveal from "@/components/animations/TextReveal";
import ParallaxWrapper from "@/components/animations/ParallaxWrapper";

export default function Projects() {
    return (
        <section id="work" className="py-24 bg-bg-primary relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-bg-secondary/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-24">
                    <ParallaxWrapper offset={-20}>
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            <TextReveal>Selected Work</TextReveal>
                        </h2>
                    </ParallaxWrapper>
                    <p className="text-xl md:text-2xl text-text-secondary max-w-2xl">
                        A collection of systems designed for growth. scroll to explore the blueprints.
                    </p>
                </div>
            </div>

            <div className="space-y-0 relative z-10">
                {projects.map((project, index) => (
                    <ProjectChapter key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
