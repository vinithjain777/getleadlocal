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
      className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-primary-50 ${className}`}
      style={{
        backgroundImage: "radial-gradient(rgba(37,99,235,0.14) 1.5px, transparent 1.5px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className={`flex items-center justify-center bg-white text-primary-600 shadow-soft ${wrap}`}>
        <Icon className={icon} strokeWidth={1.5} />
      </div>

      {label ? (
        <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
