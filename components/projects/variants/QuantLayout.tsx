"use client";

import { Project } from "@/lib/projects";
import { BlueprintSystem, BlueprintPage } from "../BlueprintSystem";
import { useTheme } from "@/components/layout/ThemeContext";
import { MotionValue, useMotionValueEvent } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { TrendingUp, Activity, BarChart3, ArrowUpRight, AlertCircle, CheckCircle2, Search, LineChart } from "lucide-react";

export function QuantLayout({ project, index }: { project: Project; index: number }) {
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
                    <div className="w-full h-full relative bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#1a1a2e] text-white font-sans selection:bg-orange-500/30 overflow-hidden flex flex-col">

                        {/* ANIMATED DATA LINES BACKGROUND */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {/* Horizontal scan lines */}
                            <div className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(245,166,35,0.1) 80px, rgba(245,166,35,0.1) 81px)`,
                                }}
                            />
                            {/* Vertical grid */}
                            <div className="absolute inset-0 opacity-5"
                                style={{
                                    backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                                    backgroundSize: '60px 100%',
                                }}
                            />
                            {/* Radial glow from center */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,166,35,0.08)_0%,_transparent_70%)]" />
                        </div>

                        {/* HEADER TICKER (Dark Theme) */}
                        <div className="h-12 border-b border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-between px-6 z-20 sticky top-0">
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-orange-500/20 rounded text-orange-400">
                                    <Activity size={16} />
                                </div>
                                <span className="font-bold tracking-tight text-sm uppercase text-white/90">{project.slug}_Analytics_v2.0</span>
                            </div>
                            <div className="flex items-center gap-6 overflow-hidden">
                                <div className="flex gap-6 animate-pulse text-xs font-mono text-white/60">
                                    {project.metrics.slice(0, 3).map((m, i) => (
                                        <span key={i} className="flex items-center gap-1 uppercase">
                                            <span className="text-emerald-400 font-bold">{m} ▲</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>


                        {/* CONTENT CONTAINER */}
                        <div className="flex-1 relative container mx-auto p-4 md:p-8">

                            {/* PAGE 1: THE HEADLINE METRIC */}
                            <BlueprintPage index={0} total={4} progress={progress}>
                                <div className="flex flex-col h-full justify-center max-w-6xl mx-auto">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                        <div className="order-2 md:order-1">
                                            <Badge variant="outline" className="mb-6 border-orange-500/50 text-orange-400 bg-orange-500/10">CASE STUDY</Badge>

                                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                                {project.title}
                                            </h1>

                                            <div className="flex items-baseline gap-4 mb-8">
                                                <span className="text-4xl md:text-5xl font-mono font-bold text-orange-500">
                                                    {project.metrics[0]?.split(" ")[0]}
                                                </span>
                                                <span className="text-lg text-white/40 uppercase tracking-widest">
                                                    Impact Metric
                                                </span>
                                            </div>

                                            <p className="text-xl md:text-2xl text-white/60 md:pl-4 border-l-2 border-orange-500/30">
                                                {project.tagline}
                                            </p>
                                        </div>
                                        <div className="order-1 md:order-2 relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                                                <div className="flex gap-2">
                                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                                </div>
                                                <span className="font-mono text-xs text-white/40">analysis_report.pdf</span>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
                                                <div className="h-4 bg-white/10 rounded w-full" />
                                                <div className="h-4 bg-white/10 rounded w-5/6" />
                                                <div className="h-32 bg-orange-500/10 rounded-lg border border-orange-500/20 flex items-center justify-center mt-6">
                                                    <TrendingUp size={48} className="text-orange-500/50" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BlueprintPage>

                            {/* PAGE 2: THE DATA PROBLEM (Risk) */}
                            <BlueprintPage index={1} total={4} progress={progress}>
                                <div className="flex items-center justify-center h-full max-w-4xl mx-auto">
                                    <div className="w-full bg-white/5 backdrop-blur-md border border-red-500/30 shadow-2xl rounded-2xl overflow-hidden">
                                        <div className="bg-red-500/10 p-6 border-b border-red-500/20 flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <AlertCircle className="text-red-400" />
                                                <span className="font-bold text-red-300">CRITICAL ISSUE</span>
                                            </div>
                                            <span className="font-mono text-xs text-red-400/70">ID: #RISK_FACTOR</span>
                                        </div>
                                        <div className="p-12">
                                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">"Inefficiency Detected"</h3>
                                            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-12">
                                                {project.challenge}
                                            </p>
                                            <div className="grid grid-cols-3 gap-8 text-center border-t border-white/10 pt-8">
                                                {project.metrics.slice(1, 4).map((m, i) => (
                                                    <div key={i}>
                                                        <div className="text-xl md:text-2xl font-bold text-white">{m.split(" ")[0]}</div>
                                                        <div className="text-[10px] md:text-xs font-bold text-white/40 uppercase mt-1">{m.split(" ").slice(1).join(" ")}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BlueprintPage>

                            {/* PAGE 3: THE ALGORITHM (Solution) */}
                            <BlueprintPage index={2} total={4} progress={progress}>
                                <div className="h-full flex flex-col justify-center max-w-6xl mx-auto">
                                    <div className="text-center mb-16">
                                        <div className="inline-block p-3 rounded-full bg-white/5 mb-4">
                                            <Search className="text-orange-400" />
                                        </div>
                                        <h3 className="text-4xl font-bold text-white">Investigation & Model Selection</h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        {project.approach.map((step, i) => (
                                            <div key={i} className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all hover:-translate-y-2">
                                                <div className="absolute top-0 left-0 w-full h-1 bg-white/5 group-hover:bg-orange-500 transition-colors rounded-t-xl" />
                                                <div className="font-mono text-xs text-orange-400/70 mb-4">STEP 0{i + 1}</div>
                                                <h4 className="font-bold text-lg mb-4 text-white">Processing...</h4>
                                                <p className="text-sm text-white/50 leading-relaxed">
                                                    {step}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </BlueprintPage>

                            {/* PAGE 4: THE FORECAST (Results) */}
                            <BlueprintPage index={3} total={4} progress={progress}>
                                <div className="h-full flex items-center justify-center">
                                    <div className="w-full max-w-5xl">
                                        <div className="flex items-center gap-4 mb-12">
                                            <div className="h-px bg-white/10 flex-1" />
                                            <span className="font-mono text-sm text-white/40 uppercase tracking-widest">Performance Report</span>
                                            <div className="h-px bg-white/10 flex-1" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {project.results.map((res, i) => (
                                                <div key={i} className="bg-[#111] text-white p-8 rounded-2xl flex flex-col justify-between aspect-square hover:scale-105 transition-transform duration-300">
                                                    <div className="flex justify-between items-start">
                                                        <LineChart className="text-orange-500" />
                                                        <span className="font-mono text-xs text-gray-600">Q{i + 1}</span>
                                                    </div>
                                                    <p className="font-bold text-xl leading-snug">
                                                        {res}
                                                    </p>
                                                    <div className="w-full bg-gray-800 h-1 rounded overflow-hidden mt-4">
                                                        <div className="bg-orange-500 h-full w-[85%]" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </BlueprintPage>

                        </div>
                    </div>
                );
            }}
        </BlueprintSystem>
    );
}
