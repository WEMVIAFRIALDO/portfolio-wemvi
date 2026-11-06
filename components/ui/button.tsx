import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-center font-display text-sm font-bold transition-colors duration-300",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/85",
        outline:
          "border border-border bg-background text-foreground hover:border-primary/50 hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
