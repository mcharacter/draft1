import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Showcase3DProps {
  title: string;
  category: string;
  src: string;
}

export const Showcase3D: React.FC<Showcase3DProps> = ({ title, category, src }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm cursor-pointer group"
    >
      <div 
        style={{ transform: "translateZ(75px)" }}
        className="absolute inset-4 rounded-lg overflow-hidden shadow-2xl"
      >
         <img 
            src={src} 
            alt={title} 
            className="h-full w-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-700"
         />
         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute bottom-10 left-8 z-20 pointer-events-none"
      >
        <p className="text-rose-300 text-sm font-sans tracking-widest uppercase mb-2">{category}</p>
        <h3 className="text-3xl font-serif text-white">{title}</h3>
      </div>
      
      {/* Decorative glass shine */}
      <div 
         className="absolute inset-0 z-10 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
         style={{ transform: "translateZ(100px)" }}
      />
    </motion.div>
  );
};