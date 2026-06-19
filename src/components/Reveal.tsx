import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  /** seconds of stagger delay */
  delay?: number;
  /** vertical travel in px */
  y?: number;
  /** slight entrance rotation in deg */
  rotate?: number;
  duration?: number;
}

/**
 * Scroll-triggered entrance: fade + rise (+ optional slight rotate).
 * Falls back to a plain fade with no transform when the user prefers
 * reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 30,
  rotate = 0,
  duration = 0.8,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  const hidden = reduce
    ? { opacity: 0 }
    : { opacity: 0, y, rotate };
  const shown = { opacity: 1, y: 0, rotate: 0 };

  return (
    <motion.div
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: reduce ? 0.3 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.2, 0.7, 0.2, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
