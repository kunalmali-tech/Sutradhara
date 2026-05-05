"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer select-none",
          // sizes
          size === "sm" && "px-5 py-2.5 text-xs",
          size === "md" && "px-7 py-3.5 text-sm",
          size === "lg" && "px-10 py-4 text-base",
          // variants
          variant === "primary" && [
            "bg-gym-red text-white",
            "hover:bg-gym-red-dark",
            "before:absolute before:inset-0 before:bg-white/10 before:scale-x-0 before:origin-left before:transition-transform before:duration-300",
            "hover:before:scale-x-100",
            "overflow-hidden",
          ],
          variant === "outline" && [
            "border border-gym-white/30 text-gym-white bg-transparent",
            "hover:border-gym-red hover:text-gym-red",
          ],
          variant === "ghost" && [
            "text-gym-white bg-transparent",
            "hover:text-gym-red",
          ],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
