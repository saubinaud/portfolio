import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import CustomCursor from "@/components/animations/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/layout/ThemeContext";
import AmbientBackground from "@/components/layout/AmbientBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastien Aubinaud | Growth Engineer",
  description: "I build systems that turn data into growth. From database architecture to 40x ROAS campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-bg-primary text-text-primary overflow-x-hidden`}
      >
        <ThemeProvider>
          <AmbientBackground />
          <SmoothScroll>
            <CustomCursor />
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
