interface LogoMarkProps {
  className?: string;
}

/**
 * GetLeadLocal brand mark — a rising bar-chart with an upward arrow,
 * symbolizing consistent lead growth for local businesses.
 */
export function LogoMark({ className = "h-8 w-8" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="glLogoGrad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#glLogoGrad)" />
      <rect x="8.5" y="18" width="3.4" height="6.5" rx="1" fill="#FFFFFF" fillOpacity="0.85" />
      <rect x="14.3" y="13.5" width="3.4" height="11" rx="1" fill="#FFFFFF" fillOpacity="0.95" />
      <rect x="20.1" y="9" width="3.4" height="15.5" rx="1" fill="#FACC15" />
      <path
        d="M9 13.5L15 9.5L19.5 12.5L24.5 7"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7 7H24.5V10.8"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  light?: boolean;
}

/** Full lockup: icon mark + "GetLeadLocal" wordmark. */
export function Logo({
  className = "flex items-center gap-2",
  markClassName = "h-8 w-8",
  textClassName = "",
  light = false,
}: LogoProps) {
  return (
    <span className={className}>
      <LogoMark className={markClassName} />
      <span
        className={`font-bold text-lg tracking-tight ${light ? "text-white" : "text-slate-900"} ${textClassName}`}
      >
        GetLeadLocal
      </span>
    </span>
  );
}
