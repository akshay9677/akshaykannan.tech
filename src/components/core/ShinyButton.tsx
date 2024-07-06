import { cn } from "@/lib/utils";
import { CSSProperties, FC, ReactNode } from "react";

interface ShinyButtonProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const ShinyButton: FC<ShinyButtonProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "text-neutral-600/50 dark:text-neutral-400/50 border border-border-primary px-4 rounded-xl cursor-pointer",

        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

        className
      )}
    >
      {children}
    </p>
  );
};

export default ShinyButton;
