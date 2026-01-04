import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "outline" | "active";
    className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
    const variants = {
        default: "bg-bg-tertiary text-text-secondary border border-transparent",
        outline: "bg-transparent text-text-secondary border border-border-subtle",
        active: "bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20",
    };

    return (
        <span className={cn(
            "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors",
            variants[variant],
            className
        )}>
            {variant === "active" && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary mr-2 animate-pulse" />
            )}
            {children}
        </span>
    );
}
