import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const effectVariants = cva("absolute -z-50 opacity-40", {
  variants: {
    variant: {
      default:
        "rounded-full blur-xl bg-gradient-to-tr from-primary/70 via-primary/30 to-transparent",
      square: "border-2 border-muted-foreground z-10 opacity-100",
      ball: "rounded-full bg-gradient-to-tr from-primary/80 to-transparent",
    },
    size: {
      default: "w-12 h-12",
      lg: "w-64 h-64 md:w-96 md:h-96",
      sm: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "lg",
  },
});

export interface EffectsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof effectVariants> {}

const Effect = React.forwardRef<HTMLDivElement, EffectsProps>(
  ({ className, variant, size, ...props }, ref) => (
    <figure
      className={cn(effectVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);

Effect.displayName = "Effect";

export { Effect, effectVariants };
