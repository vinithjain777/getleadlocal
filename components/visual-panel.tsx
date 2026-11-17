import type { LucideIcon } from "lucide-react";

const SIZE_MAP = {
  sm: { wrap: "h-14 w-14 rounded-xl", icon: "h-7 w-7" },
  md: { wrap: "h-20 w-20 rounded-2xl", icon: "h-10 w-10" },
  lg: { wrap: "h-28 w-28 rounded-2xl", icon: "h-14 w-14" },
} as const;

interface VisualPanelProps {
  icon: LucideIcon;
  label?: string;
  size?: keyof typeof SIZE_MAP;
  className?: string;
}

/**
 * Brand-consistent, content-accurate stand-in for photography.
 * Renders a soft, dot-textured panel with a large icon representing the
 * subject — avoids mismatched stock photos while staying fast and reliable.
 */
export function VisualPanel({ icon: Icon, label, size = "md", className = "" }: VisualPanelProps) {
  const { wrap, icon } = SIZE_MAP[size];

  return (
    <div
      aria-hidden="true"
      className={`brand-visual brand-visual-${size} relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
    >
      <span className="brand-visual-orbit" />
      <span className="brand-visual-spark">✦</span>
      <div className={`brand-visual-icon flex items-center justify-center ${wrap}`}>
        <Icon className={icon} strokeWidth={1.5} />
      </div>

      {label ? (
        <span className="brand-visual-label absolute bottom-4 left-4 px-3 py-1.5 text-xs font-semibold">
          {label}
        </span>
      ) : null}
    </div>
  );
}
