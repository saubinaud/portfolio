"use client";

import { Project } from "@/lib/projects";
import { BlueprintSystem, BlueprintPage } from "../BlueprintSystem";
import { useTheme } from "@/components/layout/ThemeContext";
import { MotionValue, useMotionValueEvent } from "framer-motion";
import {
    User, Briefcase, Clock, FileText,
    AlertCircle, CheckCircle2, ArrowRight
} from "lucide-react";
import Badge from "@/components/ui/Badge";

export function CaseStudyLayout({ project }: { project: Project }) {
    const { setTheme } = useTheme();

    if (!project.caseStudyData) return <div className="p-20 text-center text-white">Missing Case Study Data</div>;
    const cs = project.caseStudyData;

    // Dynamic color based on project theme
    const accentColor = project.theme.primary;

    return (
        <BlueprintSystem height="400vh">
            {(progress: MotionValue<number>) => {
                useMotionValueEvent(progress, "change", (latest) => {
                    if (latest > 0.05 && latest < 0.95) {
                        setTheme(project.theme, "default");
                    }
                });

                return (
                    <div className="w-full h-full relative bg-[#050505] text-white/90 selection:bg-white/20 font-sans">

                        {/* GLOBAL BACKDROP with theme color */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    background: `radial-gradient(ellipse at center, ${accentColor}20 0%, transparent 70%)`
                                }}
                            />
                        </div>

                        {/* PAGE 0: COVER + SUMMARY */}
                        <BlueprintPage index={0} total={4} progress={progress}>
                            <div className="flex flex-col items-center text-center max-w-5xl">
                                <span
                                    className="mb-6 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border"
                                    style={{ borderColor: `${accentColor}40`, color: accentColor }}
                                >
                                    {project.category}
                                </span>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-4">
                                    {project.title}
                                </h1>
                                <p className="text-lg md:text-xl text-white/50 max-w-2xl font-light leading-relaxed mb-8">
                                    {project.tagline}
                                </p>

                                {/* Metadata Row */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left w-full max-w-3xl border-t border-white/10 pt-6">
                                    {[
                                        { icon: User, label: "Client", value: cs.metadata.client },
                                        { icon: Briefcase, label: "Role", value: cs.metadata.role },
                                        { icon: Clock, label: "Duration", value: cs.metadata.duration },
                                        { icon: FileText, label: "Deliverable", value: cs.metadata.deliverable }
                                    ].map((m, i) => (
                                        <div key={i} className="space-y-1">
                                            <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono uppercase tracking-wider">
                                                <m.icon size={10} style={{ color: accentColor }} /> {m.label}
                                            </div>
                                            <div className="font-medium text-xs md:text-sm leading-tight text-white/80">{m.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 text-xs font-mono uppercase tracking-widest text-white/30 animate-pulse">
                                    Scroll ↓
                                </div>
                            </div>
                        </BlueprintPage>

                        {/* PAGE 1: CONTEXT + METRICS */}
                        <BlueprintPage index={1} total={4} progress={progress}>
                            <div className="w-full max-w-5xl">
                                {/* One-liner Quote */}
                                <blockquote
                                    className="text-2xl md:text-4xl font-serif font-light leading-tight text-white/90 border-l-4 pl-6 py-2 mb-10"
                                    style={{ borderColor: accentColor }}
                                >
                                    "{cs.oneLiner}"
                                </blockquote>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Left: Challenge */}
                                    <div className="bg-white/5 border border-white/5 p-6 rounded-xl">
                                        <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm">
                                            <AlertCircle size={16} style={{ color: accentColor }} />
                                            The Challenge
                                        </h3>
                                        <ul className="space-y-2">
                                            {cs.context.problem.slice(0, 4).map((p, i) => (
                                                <li key={i} className="flex gap-2 text-white/60 text-sm">
                                                    <span style={{ color: accentColor }}>•</span>{p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right: Metrics */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {cs.headlineMetrics.slice(0, 4).map((m, i) => (
                                            <div
                                                key={i}
                                                className="bg-[#111] border border-white/10 p-4 rounded-xl hover:bg-white/5 transition-colors"
                                            >
                                                <div
                                                    className="text-2xl md:text-3xl font-bold mb-1 tracking-tighter"
                                                    style={{ color: i === 0 ? accentColor : 'white' }}
                                                >
                                                    {m.value}
                                                </div>
                                                <div className="text-xs font-bold text-white/70">{m.label}</div>
                                                <div className="text-[10px] text-white/40 mt-1">{m.context}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </BlueprintPage>

                        {/* PAGE 2: STRATEGY + RESULTS */}
                        <BlueprintPage index={2} total={4} progress={progress}>
                            <div className="w-full max-w-5xl">
                                <h2
                                    className="text-2xl font-bold mb-8 text-center"
                                    style={{ color: accentColor }}
                                >
                                    Execution Strategy
                                </h2>

                                {/* Approach Phases */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                    {cs.approach.slice(0, 3).map((phase, i) => (
                                        <div
                                            key={i}
                                            className="bg-[#111] border border-white/10 p-5 rounded-xl hover:bg-white/5 transition-colors"
                                        >
                                            <div
                                                className="font-mono text-xs uppercase tracking-widest mb-3"
                                                style={{ color: accentColor }}
                                            >
                                                {phase.phase}
                                            </div>
                                            <h3 className="text-base font-bold mb-3">{phase.title}</h3>
                                            <ul className="space-y-2">
                                                {phase.details.slice(0, 3).map((detail, j) => (
                                                    <li key={j} className="text-white/60 text-xs leading-relaxed">
                                                        {detail.split('**').map((part, k) =>
                                                            k % 2 === 1 ? <span key={k} className="text-white/90 font-medium">{part}</span> : part
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {/* Results */}
                                <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl">
                                    <h3 className="font-bold mb-4 text-sm flex items-center gap-2">
                                        <CheckCircle2 size={16} style={{ color: accentColor }} />
                                        Key Outcomes
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {project.results.slice(0, 4).map((res, i) => (
                                            <div key={i} className="flex gap-2 text-white/70 text-sm">
                                                <ArrowRight size={14} className="shrink-0 mt-0.5" style={{ color: accentColor }} />
                                                {res}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </BlueprintPage>

                        {/* PAGE 3: CONCLUSION */}
                        <BlueprintPage index={3} total={4} progress={progress}>
                            <div className="w-full max-w-3xl text-center">
                                <h2 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-6">Key Insight</h2>

                                <blockquote
                                    className="text-xl md:text-2xl font-light leading-relaxed mb-10 text-white/90"
                                >
                                    "{project.keyInsight}"
                                </blockquote>

                                {/* Tools */}
                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {project.tools.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-full border"
                                            style={{ borderColor: `${accentColor}30`, color: accentColor }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Confidence indicators if available */}
                                {cs.confidence && (
                                    <div className="flex justify-center gap-4">
                                        {cs.confidence.slice(0, 2).map((c, i) => (
                                            <div
                                                key={i}
                                                className="bg-white/5 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-sm"
                                            >
                                                {c.level === 'High' ? (
                                                    <CheckCircle2 size={14} className="text-green-500" />
                                                ) : (
                                                    <AlertCircle size={14} className="text-yellow-500" />
                                                )}
                                                <span className="uppercase text-xs font-bold tracking-wide">{c.level} Confidence</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </BlueprintPage>

                    </div>
                );
            }}
        </BlueprintSystem>
    );
}
