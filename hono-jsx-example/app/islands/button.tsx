import { cn } from "@utils/helpers";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { forwardRef } from "hono/jsx";
import type { Pressure } from "@tawasal/web/dist/types";
import { haptic } from "@tawasal/web";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends Hono.ButtonHTMLAttributes,
    VariantProps<typeof buttonVariants> {
  pressure?: Pressure;
  onClick?: (clickEvent: Event) => void;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    pressure,
    className,
    variant,
    size,
    asChild = false,
    onClick,
    ...props
  }) => {
    const Comp = asChild ? "slot" : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        onClick={(clickProps: Event) => {
          haptic(pressure);

          if (onClick) onClick(clickProps);
        }}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };
