"use client";
import { motion, useAnimation, useInView } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  amount?: number;
  initial: { x?: string; y?: string; opacity: number; scale?: number };
  duration?: number;
  delay?: number;
  direction?: "horizontal" | "vertical" | "diagonal";
}

const AnimatedElement = ({
  children,
  amount = 0.2,
  initial,
  duration = 1.5,
  delay = 0,
  direction = "horizontal",
}: AnimatedElementProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView, mainControl]);

  const variants =
    direction === "horizontal"
      ? { visible: { x: 0, opacity: 1, scale: 1 } }
      : direction === "vertical"
      ? { visible: { y: 0, opacity: 1, scale: 1 } }
      : { visible: { x: 0, y: 0, opacity: 1, scale: 1 } };
  return (
    <div ref={ref}>
      <motion.div
        initial={initial}
        animate={mainControl}
        variants={variants}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedElement;
