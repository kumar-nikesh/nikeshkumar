import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary px-5 py-3 text-primary-foreground shadow-[0_16px_40px_-20px_rgba(15,118,110,0.9)] hover:-translate-y-0.5 hover:brightness-95",
        secondary:
          "bg-secondary/14 px-5 py-3 text-foreground hover:bg-secondary/18",
        outline:
          "border border-border bg-background/70 px-5 py-3 text-foreground hover:bg-muted/60",
        ghost: "px-3 py-2 text-muted-foreground hover:bg-muted/70 hover:text-foreground",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{
        className?: string;
        children?: React.ReactNode;
      }>;

      return React.cloneElement(
        child,
        {
          className: cn(buttonVariants({ variant, size, className }), child.props.className),
        },
        child.props.children
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };