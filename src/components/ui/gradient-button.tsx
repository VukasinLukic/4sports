"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gradientButtonVariants = cva(
  [
    "gradient-button",
    "inline-flex items-center justify-center",
    "rounded-[11px] min-w-[132px] px-9 py-4",
    "text-base leading-[19px] font-[500] text-white",
    "font-sans font-bold",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "transition-all duration-300 ease-in-out",
    "relative overflow-hidden",
    "before:absolute before:inset-0 before:bg-gradient-to-r",
    "before:transition-opacity before:duration-300",
    "hover:scale-105 hover:shadow-lg hover:shadow-primary/50",
    "active:scale-95",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-white",
          "before:from-primary before:via-primary before:to-emerald-400",
          "before:opacity-0 hover:before:opacity-100",
        ],
        secondary: [
          "bg-transparent border-2 border-primary text-primary",
          "before:from-primary/10 before:via-primary/20 before:to-emerald-400/10",
          "before:opacity-0 hover:before:opacity-100",
          "hover:text-white hover:border-primary/80",
        ],
        ghost: [
          "bg-transparent text-primary",
          "before:from-primary/5 before:via-primary/10 before:to-emerald-400/5",
          "before:opacity-0 hover:before:opacity-100",
        ],
      },
      size: {
        default: "px-9 py-4 text-base",
        sm: "px-6 py-2 text-sm min-w-[100px]",
        lg: "px-12 py-5 text-lg min-w-[160px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
