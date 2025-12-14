import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FloatingElementProps {
  depth: number;
  className?: string;
  children: React.ReactNode;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({ depth, className, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, depth * 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, depth * 40]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={`absolute pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  );
};