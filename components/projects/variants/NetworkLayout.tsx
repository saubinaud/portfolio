"use client";

import { Project } from "@/lib/projects";
import { BlueprintSystem, BlueprintPage } from "../BlueprintSystem";
import { useTheme } from "@/components/layout/ThemeContext";
import { MotionValue, useMotionValueEvent, motion } from "framer-motion";
import { Sparkles, Zap, Users, Globe, Share2, Target, MessageCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";

export function NetworkLayout({ project, index }: { project: Project; index: number }) {
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
                    <div className="w-full h-full relative bg-[#050B14] text-white font-sans overflow-hidden flex flex-col items-center justify-center">

                        {/* DEEP SPACE BACKGROUND */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Stars */}
                            <div className="absolute inset-0 opacity-40"
                                style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                            <div className="absolute inset-0 opacity-20"
                                style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '120px 120px' }} />

                            {/* Nebula Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[100px]" />
                        </div>

                        {/* CENTRAL ORBIT SYSTEM */}
                        <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">

                            {/* ORBIT RINGS (Decorative) */}
                            <div className="absolute border border-green-500/10 rounded-full w-[600px] h-[600px] animate-spin-slow" />
                            <div className="absolute border border-dashed border-green-500/20 rounded-full w-[900px] h-[900px] animate-spin-reverse-slow" />

                            {/* MAIN CONTENT AREA */}
                            <div className="relative z-10 w-full h-full">

                                {/* PAGE 1: THE CORE (Hero) */}
                                <BlueprintPage index={0} total={4} progress={progress}>
                                    <div className="flex flex-col items-center justify-center h-full text-center">
                                        <div className="relative mb-8">
                                            <div className="absolute inset-0 bg-green-500 blur-[50px] opacity-40 animate-pulse" />
                                            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.5)]">
                                                <Share2 size={48} className="text-white" />
                                            </div>
                                        </div>

                                        <Badge className="mb-6 bg-green-900/30 text-green-400 border-green-800">VIRAL CAMPAIGN CORE</Badge>
                                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                                            {project.title}
                                        </h1>
                                        <p className="text-xl md:text-2xl text-green-100/60 max-w-2xl leading-relaxed">
                                            {project.tagline}
                                        </p>
                                    </div>
                                </BlueprintPage>

                                {/* PAGE 2: THE TARGET (Challenge) */}
                                <BlueprintPage index={1} total={4} progress={progress}>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                        <div className="text-left order-2 md:order-1">
                                            <div className="flex items-center gap-3 mb-6 text-green-400">
                                                <Target size={24} />
                                                <span className="font-bold tracking-widest text-sm uppercase">Mission Objective</span>
                                            </div>
                                            <h3 className="text-4xl font-bold mb-6">Mission Critical:<br /><span className="text-red-400">{project.metrics[0]}</span></h3>
                                            <p className="text-lg text-gray-400 leading-relaxed">
                                                {project.challenge}
                                            </p>
                                        </div>
                                        {/* Satellite Node Visualization */}
                                        <div className="relative h-80 flex items-center justify-center order-1 md:order-2">
                                            <div className="w-48 h-48 rounded-full border-2 border-green-500/30 flex items-center justify-center relative">
                                                <div className="absolute inset-0 bg-green-500/5 rounded-full animate-ping-slow" />
                                                <Users size={40} className="text-green-400" />
                                                {/* Orbiting dots */}
                                                <div className="absolute w-full h-full animate-spin-slow">
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_20px_#22c55e]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BlueprintPage>

                                {/* PAGE 3: THE NETWORK (Approach) */}
                                <BlueprintPage index={2} total={4} progress={progress}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl">
                                            {project.approach.map((step, i) => (
                                                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                                                    <div className="mb-4 w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center text-green-400 font-bold border border-green-800 group-hover:scale-110 transition-transform">
                                                        {i + 1}
                                                    </div>
                                                    <h4 className="font-bold text-lg mb-2 text-white">Strategy Node {i + 1}</h4>
                                                    <p className="text-sm text-gray-400 leading-relaxed">
                                                        {step}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </BlueprintPage>

                                {/* PAGE 4: VIRALITY (Results) */}
                                <BlueprintPage index={3} total={4} progress={progress}>
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="inline-flex items-center gap-2 bg-green-500 text-black px-6 py-2 rounded-full font-bold text-sm mb-12 shadow-[0_0_30px_rgba(34,197,94,0.4)] animate-bounce-slow">
                                            <Zap size={16} fill="currentColor" />
                                            CAMPAIGN VIRAL
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
                                            {project.results.map((res, i) => (
                                                <div key={i} className="bg-gradient-to-b from-green-900/40 to-black border border-green-500/30 p-8 rounded-3xl text-center relative overflow-hidden group">
                                                    <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <div className="text-3xl md:text-5xl font-bold text-white mb-4">{res.split(" ")[0]}</div>
                                                    <div className="text-xs font-mono text-green-400 uppercase tracking-widest">{res.split(" ").slice(1).join(" ")}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </BlueprintPage>

                            </div>
                        </div>
                    </div>
                );
            }}
        </BlueprintSystem>
    );
}
