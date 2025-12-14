import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Instagram, Linkedin, Twitter, ArrowDown } from 'lucide-react';
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

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div ref={containerRef} className="relative min-h-screen bg-luxury-black text-rose-50 selection:bg-rose-500 selection:text-white overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex items-center gap-2">
            <Logo className="w-10 h-10" />
            <span className="hidden md:block font-display tracking-widest text-sm">PAR DESIGN</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 z-30 bg-black/95 backdrop-blur-xl transition-transform duration-700 ease-in-out ${menuOpen ? 'translate-y-0' : '-translate-y-full'} flex items-center justify-center`}>
         <div className="flex flex-col items-center gap-8 font-serif text-4xl md:text-6xl text-rose-100/80">
            {['Portfolio', 'Philosophy', 'Services', 'Contact'].map((item, i) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="hover:text-rose-500 hover:italic transition-all cursor-pointer">
                    {item}
                </a>
            ))}
         </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Parallax Layer */}
        <motion.div 
            style={{ y: bgY, scale: 1.1 }}
            className="absolute inset-0 z-0"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/40 via-luxury-black to-black opacity-80" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        </motion.div>

        {/* 3D Floating Objects */}
        <FloatingElement depth={1} className="top-1/4 left-10 w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-rose-500/20 to-transparent blur-3xl" >
            <div />
        </FloatingElement>
        <FloatingElement depth={-0.5} className="bottom-1/4 right-10 w-48 h-48 md:w-96 md:h-96 rounded-full bg-gradient-to-tl from-purple-500/10 to-transparent blur-3xl">
            <div />
        </FloatingElement>

        {/* Hero Content */}
        <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="relative z-10 text-center px-4 max-w-5xl"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-rose-300 tracking-[0.5em] uppercase text-xs md:text-sm mb-4"
          >
            Est. 2024
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl md:text-8xl lg:text-9xl leading-tight text-transparent bg-clip-text bg-gradient-to-b from-rose-50 to-rose-200/50"
          >
            Pink Apple<br/>
            <span className="italic font-serif text-rose-500">Roses</span>
          </motion.h1>
          
          <SpecialAccess />
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-rose-500/50"
        >
            <ArrowDown />
        </motion.div>
      </section>

      {/* Featured Work / 3D Cards */}
      <section id="portfolio" className="relative py-32 px-6 md:px-20 z-10 bg-luxury-black">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-luxury-black -translate-y-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <h2 className="text-4xl md:text-6xl font-display text-rose-50">
                Selected <span className="text-rose-500 italic font-serif">Works</span>
            </h2>
            <p className="max-w-md text-rose-200/60 mt-6 md:mt-0 font-light leading-relaxed">
                A curation of digital craftsmanship, exploring the intersection of nature, technology, and luxury aesthetics.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {projects.map((project, index) => (
                <div key={project.id} className={index % 2 === 1 ? 'md:mt-32' : ''}>
                    <Showcase3D {...project} src={project.image} />
                </div>
            ))}
        </div>
      </section>

      {/* Philosophy Section with Parallax Text */}
      <section className="relative py-40 px-6 flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-rose-950/20 backdrop-blur-3xl" />
         <FloatingElement depth={0.2} className="top-10 left-10">
            <h3 className="text-[10rem] md:text-[20rem] font-display text-white/5 whitespace-nowrap leading-none select-none">
                CREATE
            </h3>
         </FloatingElement>
         
         <div className="relative z-10 max-w-4xl text-center">
            <h3 className="text-3xl md:text-5xl font-serif leading-snug">
                "We design not just for the eye, but for the <span className="text-rose-400 italic">mind's eye</span>. Every pixel is a petal, every interaction a scent."
            </h3>
         </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
                <Logo className="w-8 h-8 text-rose-700" />
                <span className="text-rose-200/40 text-sm font-sans tracking-widest">© 2024 PINK APPLE ROSES</span>
            </div>
            
            <div className="flex gap-6">
                <a href="#" className="text-rose-200/60 hover:text-rose-500 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-rose-200/60 hover:text-rose-500 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-rose-200/60 hover:text-rose-500 transition-colors"><Linkedin size={20} /></a>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;