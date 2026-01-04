"use client";

import { useTheme } from "@/components/layout/ThemeContext";

export default function AmbientBackground() {
    const { colors } = useTheme();
    return (
        <div
            className="fixed inset-0 pointer-events-none transition-colors duration-1000 ease-in-out -z-50"
            style={{
                background: `radial-gradient(circle at 50% 50%, ${colors.primary}15 0%, ${colors.secondary}05 50%, transparent 80%)`
            }}
        />
    );
}
