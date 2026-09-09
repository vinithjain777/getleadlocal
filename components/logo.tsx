interface LogoMarkProps {
  className?: string;
  light?: boolean;
}

/**
 * GetLeadLocal brand mark — a "G" merged with a location pin and an
 * upward-trending bar chart, symbolizing local lead growth.
 */
export function LogoMark({ className = "h-8 w-8", light = false }: LogoMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={light ? "/images/logo-mark-light.png" : "/images/logo-mark.png"}
      alt=""
      className={`${className} object-contain`}
      aria-hidden="true"
    />
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
      <LogoMark className={markClassName} light={light} />
      <span
        className={`font-bold text-lg tracking-tight ${light ? "text-white" : "text-slate-900"} ${textClassName}`}
      >
        GetLeadLocal
      </span>
    </span>
  );
}
