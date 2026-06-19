import { SPIRAL_D } from "../lib/spiral";

interface SpiralProps {
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  /** optional inner highlight stroke (the cream swirl line) */
  highlight?: string;
  highlightWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** The reusable cinnamon-roll spiral mark. */
export default function Spiral({
  size = 40,
  stroke = "#c37012",
  strokeWidth = 15,
  highlight,
  highlightWidth = 5,
  className,
  style,
}: SpiralProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      style={{ overflow: "visible", ...style }}
      aria-hidden="true"
    >
      <path d={SPIRAL_D} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
      {highlight && (
        <path d={SPIRAL_D} fill="none" stroke={highlight} strokeWidth={highlightWidth} strokeLinecap="round" />
      )}
    </svg>
  );
}
