import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, ArrowDown } from 'lucide-react';
import { Logo } from './components/Logo';
import { Loader } from './components/Loader';
import { SpecialAccess } from './components/SpecialAccess';
import { FloatingElement } from './components/FloatingElement';
import { Showcase3D } from './components/Showcase3D';
import { Project } from './types';

const projects: Project[] = [
  { id: 1, title: "Velvet Essence", category: "Brand Identity", image: "https://picsum.photos/600/800?random=1", description: "Luxury perfume branding." },
  { id: 2, title: "Neon Petals", category: "Web Design", image: "https://picsum.photos/600/800?random=2", description: "Abstract floral digital art." },
  { id: 3, title: "Glass Architecture", category: "Photography", image: "https://picsum.photos/600/800?random=3", description: "Modernist structures in focus." },
  { id: 4, title: "Ethereal Sound", category: "Product Design", image: "https://picsum.photos/600/800?random=4", description: "High-fidelity audio equipment." },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax Transforms
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-brand-alabaster selection:bg-brand-electric selection:text-white overflow-hidden font-sans">
      
      {/* Refined Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex items-center justify-between bg-transparent transition-all">
        {/* Left: Logo & Branding */}
        <div className="flex items-center gap-4">
            <Logo className="w-12 h-12" />
            <div className="flex flex-col">
                {/* Changed to Modern Serif Font */}
                <span className="font-serif font-bold text-xl text-brand-alabaster leading-none tracking-wide">Pink Apple Roses</span>
            </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
            <SpecialAccess />
            <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="group relative p-2 text-brand-alabaster hover:text-brand-brilliant transition-colors"
            >
                <div className="flex flex-col gap-1.5 items-end justify-center w-8">
                    {/* Menu Bars: Same length, animation preserved */}
                    <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
                    <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-8'}`} />
                    <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
                </div>
            </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-30 bg-[#050505] transition-all duration-700 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} flex items-center justify-center`}>
         <div className="flex flex-col items-center gap-10 font-serif text-6xl md:text-8xl text-brand-alabaster/90">
            {['Portfolio', 'Philosophy', 'Contact'].map((item, i) => (
                <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setMenuOpen(false)} 
                    className="relative group overflow-hidden cursor-pointer"
                >
                    <span className="relative z-10 group-hover:text-brand-electric transition-colors duration-500">{item}</span>
                </a>
            ))}
         </div>
         <div className="absolute bottom-10 text-brand-dim text-xs tracking-[0.5em] uppercase">
            Pink Apple Roses © 2024
         </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[120vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Parallax Layer */}
        <motion.div 
            style={{ y: bgY, scale: 1.15 }}
            className="absolute inset-0 z-0 will-change-transform"
        >
            {/* New Sleek Gradient Background */}
            <div className="absolute inset-0 bg-black" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#EF27A6_0%,transparent_50%)] opacity-20" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#B0B5B3_0%,transparent_40%)] opacity-10" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        </motion.div>

        {/* 3D Floating Objects */}
        <FloatingElement depth={0.8} className="top-[20%] left-[10%] w-64 h-64 rounded-full bg-brand-electric/10 blur-[100px]" >
            <div />
        </FloatingElement>
        <FloatingElement depth={0.5} className="top-[40%] right-[15%] w-96 h-96 rounded-full bg-brand-brilliant/10 blur-[120px]">
            <div />
        </FloatingElement>

        {/* Hero Content */}
        <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity, y: textY }}
            className="relative z-10 text-center px-4 max-w-6xl mt-[-10vh]"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-sans text-brand-silver tracking-[0.8em] uppercase text-xs md:text-sm mb-8"
          >
            Immersive Digital Artistry
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="font-serif italic text-7xl md:text-9xl lg:text-[10rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-brand-alabaster to-brand-silver mix-blend-screen py-4"
          >
            Pink Apple Roses
          </motion.h1>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 text-brand-dim"
        >
            <div className="flex flex-row items-center gap-3">
                <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                <ArrowDown size={16} className="animate-bounce" />
            </div>
        </motion.div>
      </section>

      {/* Featured Work / 3D Cards */}
      <section id="portfolio" className="relative py-40 px-6 md:px-20 z-10 bg-black">
        {/* Parallax Background for Section */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-brand-electric/5 to-transparent blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif text-brand-alabaster leading-tight">
                Selected <span className="text-brand-electric italic">Works</span>
            </h2>
            <p className="max-w-md text-brand-silver/70 mt-10 md:mt-0 font-light leading-relaxed text-lg tracking-wide">
                A curation of digital craftsmanship, exploring the intersection of nature, technology, and luxury aesthetics.
            </p>
        </div>

        {/* Updated Grid: Removed staggering logic for uniform grid pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {projects.map((project, index) => (
                <motion.div 
                    key={project.id} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                    <Showcase3D {...project} src={project.image} />
                </motion.div>
            ))}
        </div>
      </section>

      {/* Philosophy Section with Parallax Text */}
      <section id="philosophy" className="relative min-h-screen py-40 px-6 flex items-center justify-center overflow-hidden bg-black">
         <div className="absolute inset-0 bg-brand-dim/5" />
         
         <FloatingElement depth={0.4} className="top-1/4 left-0 w-full text-center">
            <h3 className="text-[15vw] font-display text-white/5 whitespace-nowrap leading-none select-none tracking-tighter opacity-50 blur-sm">
                IMAGINE
            </h3>
         </FloatingElement>
         <FloatingElement depth={0.2} className="bottom-1/4 left-0 w-full text-center">
             <h3 className="text-[15vw] font-display text-brand-electric/5 whitespace-nowrap leading-none select-none tracking-tighter ml-[20vw]">
                CREATE
            </h3>
         </FloatingElement>
         
         <div className="relative z-10 max-w-5xl text-center">
            <h3 className="text-3xl md:text-6xl font-serif leading-snug text-brand-alabaster">
                "We design not just for the eye, but for the <span className="text-brand-electric italic font-serif pr-2">mind's eye</span>. Every pixel is a petal, every interaction a scent."
            </h3>
         </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-20 border-t border-brand-dim/20 bg-black">
        <div className="container mx-auto px-6 flex flex-col items-center gap-12">
            <Logo className="w-16 h-16 text-brand-electric" />
            
            <div className="flex gap-12">
                <a href="#" className="text-brand-silver hover:text-white transition-colors uppercase tracking-widest text-xs">Instagram</a>
                <a href="#" className="text-brand-silver hover:text-white transition-colors uppercase tracking-widest text-xs">Twitter</a>
                <a href="#" className="text-brand-silver hover:text-white transition-colors uppercase tracking-widest text-xs">LinkedIn</a>
            </div>

            <p className="text-brand-dim text-[10px] font-sans tracking-[0.3em]">
                © 2024 PINK APPLE ROSES DESIGN
            </p>
        </div>
      </footer>
    </div>
  );
}

export default App;