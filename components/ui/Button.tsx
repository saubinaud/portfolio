import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/animations/Magnetic";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    isMagnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    variant = "primary",
    size = "md",
    isMagnetic = true,
    children,
    ...props
}, ref) => {
    const variants = {
        primary: "bg-accent-primary text-bg-primary hover:bg-accent-primary/90 border border-transparent",
        secondary: "bg-bg-tertiary text-text-primary hover:bg-bg-tertiary/80 border border-transparent",
        outline: "bg-transparent text-accent-primary border border-accent-primary hover:bg-accent-primary/10",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const buttonContent = (
        <button
            ref={ref}
            className={cn(
                "relative rounded-full font-bold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-hover",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );

    if (isMagnetic) {
        return <Magnetic>{buttonContent}</Magnetic>;
    }

    return buttonContent;
});

Button.displayName = "Button";

export { Button };
