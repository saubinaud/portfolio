"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeColors {
    primary: string;
    secondary: string;
}

interface ThemeContextType {
    colors: ThemeColors;
    layout: string;
    setTheme: (colors: ThemeColors, layout?: string) => void;
}

const defaultColors = {
    primary: "#F5A623", // Default global accent
    secondary: "#22C55E",
};

const ThemeContext = createContext<ThemeContextType>({
    colors: defaultColors,
    layout: "default",
    setTheme: () => { },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [colors, setColors] = useState<ThemeColors>(defaultColors);
    const [layout, setLayout] = useState<string>("default");

    const setTheme = (newColors: ThemeColors, newLayout?: string) => {
        setColors(newColors);
        if (newLayout) setLayout(newLayout);

        // Also update CSS variables for immediate consumption by Tailwind if needed
        if (typeof document !== 'undefined') {
            document.documentElement.style.setProperty('--accent-primary', newColors.primary);
            document.documentElement.style.setProperty('--accent-secondary', newColors.secondary);
        }
    };

    return (
        <ThemeContext.Provider value={{ colors, layout, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
