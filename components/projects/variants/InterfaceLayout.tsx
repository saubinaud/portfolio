"use client";

import { Project } from "@/lib/projects";
import { BlueprintSystem, BlueprintPage } from "../BlueprintSystem";
import { useTheme } from "@/components/layout/ThemeContext";
import { MotionValue, useMotionValueEvent, motion } from "framer-motion";
import { ParallaxUIStack } from "../visuals/ParallaxUIStack";
import Badge from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";
import { InteractiveMockup } from "../visuals/InteractiveMockup";

export function InterfaceLayout({ project, index }: { project: Project; index: number }) {
    const { setTheme } = useTheme();

    return (
        <BlueprintSystem height="400vh">
            {(progress: MotionValue<number>) => {
                useMotionValueEvent(progress, "change", (latest) => {
                    if (latest > 0.1 && latest < 0.9) {
                        setTheme(project.theme, project.layout);
                    }
                });

                return (
                    <div className="w-full h-full relative bg-bg-primary/5 border-t border-border-subtle font-sans">
                        <ParallaxUIStack />

                        {/* Glass Background Elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-bg-primary via-transparent to-bg-primary/50" />
                        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-primary/20 blur-[100px] rounded-full pointer-events-none" />

                        {/* PAGE 1: DASHBOARD */}
                        <BlueprintPage index={0} total={4} progress={progress}>
                            <div className="relative z-10 w-full max-w-4xl p-1 bg-gradient-to-br from-white/20 to-white/0 rounded-2xl">
                                <div className="bg-bg-primary/80 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center shadow-2xl">
                                    <Badge variant="outline" className="mb-8 border-accent-primary/20 text-accent-primary">{project.status || "LIVE"}</Badge>
                                    <h3 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl text-text-secondary">{project.tagline}</p>
                                </div>
                            </div>
                        </BlueprintPage>

                        {/* PAGE 2: USER STORY */}
                        <BlueprintPage index={1} total={4} progress={progress}>
                            <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
                                <div className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                                    <h4 className="text-sm font-bold text-text-muted uppercase mb-4">The User Pain</h4>
                                    <p className="text-lg text-white">{project.challenge}</p>
                                </div>
                                <div className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-accent-primary mb-2">{project.metrics[0]}</div>
                                        <div className="text-sm text-text-muted">Target KPI</div>
                                    </div>
                                </div>
                            </div>
                        </BlueprintPage>

                        {/* PAGE 3: FEATURES */}
                        <BlueprintPage index={2} total={4} progress={progress}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                                {project.approach.map((step, i) => (
                                    <div key={i} className="group relative bg-bg-tertiary/20 hover:bg-bg-tertiary/40 transition-colors rounded-xl p-6 border border-white/5 overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <h5 className="font-bold text-white mb-2 text-lg">Feature 0{i + 1}</h5>
                                        <p className="text-sm text-text-secondary">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </BlueprintPage>

                        {/* PAGE 4: ANALYTICS */}
                        <BlueprintPage index={3} total={4} progress={progress}>
                            <div className="w-full max-w-4xl bg-bg-primary/90 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold mb-8">Performance Report</h4>
                                <div className="space-y-6">
                                    {project.results.map((res, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                                            <span className="text-text-secondary">{res}</span>
                                            <CheckCircle2 className="w-5 h-5 text-accent-primary" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </BlueprintPage>
                    </div>
                );
            }}
        </BlueprintSystem>
    );
}

