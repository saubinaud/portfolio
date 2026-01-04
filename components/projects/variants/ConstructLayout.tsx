"use client";

import { Project } from "@/lib/projects";
import { BlueprintSystem, BlueprintPage } from "../BlueprintSystem";
import { useTheme } from "@/components/layout/ThemeContext";
import { MotionValue, useMotionValueEvent, motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { Award, Star, Shield, Zap, Flame, Crown, Sword } from "lucide-react";

export function ConstructLayout({ project, index }: { project: Project; index: number }) {
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
                    <div className="w-full h-full relative bg-[#080808] text-white font-sans overflow-hidden flex flex-col items-center justify-center selection:bg-red-900 selection:text-white">

                        {/* CINEMATIC BACKGROUND TEXTURE */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,20,60,0.05)_0%,_transparent_60%)]" />
                        </div>

                        {/* GOLD & SMOKE AMBIANCE */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

                        {/* HEADER: ELITE STATUS */}
                        <div className="absolute top-0 w-full h-20 flex items-center justify-between px-8 z-20 border-b border-white/5 bg-black/50 backdrop-blur-md">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded">
                                    <Crown size={20} className="text-white" />
                                </div>
                                <span className="font-black tracking-[0.2em] text-sm uppercase text-white/50">Mastery Level</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                                <span className="font-bold text-xs uppercase text-red-600 tracking-widest">Live Dojo</span>
                            </div>
                        </div>

                        {/* MAIN CONTENT */}
                        <div className="relative z-10 w-full max-w-7xl h-full flex items-center justify-center p-6">

                            {/* PAGE 1: THE BLACK BELT (Hero) */}
                            <BlueprintPage index={0} total={4} progress={progress}>
                                <div className="text-center relative">
                                    {/* Decorative Asian Pattern Circle */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-slow pointer-events-none opacity-50"
                                        style={{ borderStyle: 'dotted' }} />

                                    <motion.div
                                        initial={{ y: 50, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    >
                                        <Badge className="mb-8 bg-white/5 text-yellow-500 border-yellow-500/20 px-6 py-2 uppercase tracking-widest backdrop-blur-sm">
                                            The Gold Standard
                                        </Badge>
                                        <h1 className="text-7xl md:text-[8rem] font-black mb-8 leading-[0.85] uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 drop-shadow-2xl">
                                            {project.title}
                                        </h1>
                                        <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-900 mx-auto mb-8 shadow-[0_0_20px_rgba(220,20,60,0.5)]" />
                                        <p className="text-xl md:text-3xl text-gray-400 font-light uppercase tracking-[0.1em]">
                                            {project.tagline}
                                        </p>
                                    </motion.div>
                                </div>
                            </BlueprintPage>

                            {/* PAGE 2: THE FIGHT (Challenge) */}
                            <BlueprintPage index={1} total={4} progress={progress}>
                                <div className="flex flex-col md:flex-row items-center gap-16 w-full max-w-6xl">
                                    <div className="w-full md:w-1/2 relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                                        <div className="relative bg-[#111] border border-white/10 p-10 rounded-lg">
                                            <div className="flex items-center gap-4 mb-8 text-red-500">
                                                <Sword size={32} />
                                                <h3 className="text-3xl font-black uppercase tracking-tight text-white">The Opponent</h3>
                                            </div>
                                            <p className="text-2xl text-gray-300 font-light leading-relaxed">
                                                "{project.challenge}"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
                                        {project.metrics.map((m, i) => (
                                            <div key={i} className="flex items-center justify-between p-6 bg-white/5 border-l-4 border-yellow-500 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                                <span className="font-bold text-gray-500 uppercase tracking-widest text-sm">Vital Sign 0{i + 1}</span>
                                                <span className="text-3xl font-black text-white font-mono">{m}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </BlueprintPage>

                            {/* PAGE 3: THE DISCIPLINE (Approach) */}
                            <BlueprintPage index={2} total={4} progress={progress}>
                                <div className="w-full max-w-6xl">
                                    <div className="text-center mb-16">
                                        <Flame className="w-12 h-12 text-yellow-500 mx-auto mb-6 animate-pulse" />
                                        <h3 className="text-5xl font-black uppercase tracking-tight mb-2">Technique</h3>
                                        <div className="text-gray-500 uppercase tracking-[0.3em] text-sm">Forged in Fire</div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {project.approach.map((step, i) => (
                                            <div key={i} className="group relative bg-[#111] border border-white/5 p-8 hover:border-yellow-500/50 transition-colors duration-500 overflow-hidden">
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                                <div className="text-8xl font-black text-white/5 absolute -right-4 -bottom-8 group-hover:text-yellow-500/10 transition-colors duration-500">{i + 1}</div>

                                                <h4 className="text-xl font-bold text-white mb-4 uppercase flex items-center gap-3">
                                                    <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                                                    Form {i + 1}
                                                </h4>
                                                <p className="text-gray-400 leading-relaxed font-light relative z-10">
                                                    {step}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </BlueprintPage>

                            {/* PAGE 4: VICTORIES (Results) */}
                            <BlueprintPage index={3} total={4} progress={progress}>
                                <div className="text-center max-w-5xl mx-auto">
                                    <div className="inline-flex flex-col items-center mb-16">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-yellow-500 blur-[40px] opacity-20" />
                                            <Award size={64} className="text-yellow-500 relative z-10 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                                        </div>
                                        <h3 className="text-4xl font-black uppercase mt-6 tracking-widest text-white">Championship Results</h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {project.results.map((res, i) => (
                                            <div key={i} className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-lg hover:border-yellow-500/30 transition-all group hover:-translate-y-2 duration-300">
                                                <Star className="text-gray-700 mb-6 group-hover:text-yellow-500 transition-colors duration-500" size={32} />
                                                <p className="font-bold text-xl uppercase tracking-wide leading-tight group-hover:text-white transition-colors">
                                                    {res}
                                                </p>
                                            </div>
                                        ))}
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
