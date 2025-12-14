import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Logo } from './Logo';

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Sequence: Show logo -> Expand stars -> Gone
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1500); // Wait for star animation to finish visually
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Star clip-path polygon
  const starPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
  const fullScreen = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  const layerVariants: Variants = {
    initial: { 
      clipPath: fullScreen,
      scale: 1,
      rotate: 0,
    },
    exit: (custom: number) => ({
      clipPath: starPath,
      scale: [1, 0.5, 30], // Shrink slightly then explode outwards
      rotate: [0, 180, 360], // More spin
      opacity: [1, 1, 0],
      transition: {
        duration: 2,
        delay: custom * 0.15,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth motion
        times: [0, 0.3, 1]
      }
    })
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
          {/* Layer 3: Accent Gold/White */}
          <motion.div
            custom={2}
            variants={layerVariants}
            initial="initial"
            exit="exit"
            className="absolute inset-0 bg-brand-alabaster"
          />
          {/* Layer 2: Main Brand Color */}
          <motion.div
            custom={1}
            variants={layerVariants}
            initial="initial"
            exit="exit"
            className="absolute inset-0 bg-brand-electric"
          />
          {/* Layer 1: Background Dark */}
          <motion.div
            custom={0}
            variants={layerVariants}
            initial="initial"
            exit="exit"
            className="absolute inset-0 bg-black flex items-center justify-center"
          >
             {/* Content inside the loader before it masks out */}
             <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
             >
                <Logo className="w-32 h-32 text-brand-electric" />
                {/* Text Removed as requested */}
             </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};