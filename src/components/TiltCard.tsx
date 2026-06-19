import { useReducedMotion } from "framer-motion";
import Tilt from "react-parallax-tilt";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** glare strength 0–1 */
  glare?: number;
  maxAngle?: number;
}

/**
 * 3D tilt-toward-cursor card with a soft glare, matching the design's
 * `data-tilt` behaviour. Tilt + glare are disabled under prefers-reduced-motion.
 */
export default function TiltCard({
  children,
  className,
  style,
  glare = 0.35,
  maxAngle = 10,
}: TiltCardProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <Tilt
      className={className}
      style={style}
      tiltMaxAngleX={maxAngle * 0.9}
      tiltMaxAngleY={maxAngle * 1.1}
      perspective={900}
      transitionSpeed={400}
      scale={1.01}
      glareEnable
      glareMaxOpacity={glare}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="inherit"
      tiltReverse={false}
    >
      {children}
    </Tilt>
  );
}
