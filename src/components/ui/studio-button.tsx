import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const studioButtonVariants = cva(
  "group/studio-button relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[18px] font-semibold whitespace-nowrap transition-all duration-300 outline-none select-none hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border border-emerald-900 border-t-white/60 bg-[linear-gradient(180deg,#4edea3_0%,#10b981_20%,#059669_70%)] text-[#09090b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_10px_25px_rgba(16,185,129,0.28)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_14px_35px_rgba(16,185,129,0.42)] hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[#4edea3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",

        pricing:
          "border border-white bg-white/90 text-black shadow-[0_8px_18px_rgba(0,0,0,0.14)] hover:border-emerald-900 hover:border-t-white/60 hover:bg-[linear-gradient(180deg,#4edea3_0%,#10b981_20%,#059669_70%)] hover:text-[#09090b] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_10px_25px_rgba(16,185,129,0.35)] hover:brightness-105 focus-visible:ring-2 focus-visible:ring-[#4edea3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",

        outline:
          "border border-[#3f3f46] bg-[#111113] text-[#fafafa] shadow-none hover:border-[#10b981] hover:bg-[#18181b] hover:text-[#4edea3]",
      },
      size: {
        default: "h-12 px-7 text-base tracking-tight",
        sm: "h-10 rounded-xl px-5 text-sm",
        lg: "h-14 rounded-xl px-9 text-lg font-bold",
        icon: "size-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface StudioButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof studioButtonVariants> {
  asChild?: boolean;
}

const StudioButton = React.forwardRef<HTMLButtonElement, StudioButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        data-slot="studio-button"
        className={cn(studioButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

StudioButton.displayName = "StudioButton";

export { StudioButton, studioButtonVariants, type StudioButtonProps };
