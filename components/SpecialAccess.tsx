import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lock, X } from 'lucide-react';

export const SpecialAccess: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    if (code.toLowerCase() === 'admin' || code.toLowerCase() === 'secret') {
        setMessage("Access Granted. Redirecting...");
        setIsError(false);
        setTimeout(() => {
            setIsOpen(false);
            setMessage('');
            setCode('');
        }, 1500);
    } else {
        setMessage("Nothing for you. Try something else.");
        setIsError(true);
        setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-brand-silver/20 bg-brand-dim/20 text-brand-alabaster text-xs tracking-[0.2em] uppercase hover:bg-brand-electric/20 hover:border-brand-electric transition-all duration-500"
      >
        <Lock size={12} />
        <span>Special Access</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 20 }}
                className="relative w-full max-w-lg p-10 bg-[#0f0f0f] border border-brand-silver/10 rounded-3xl shadow-[0_0_50px_rgba(239,39,166,0.1)]"
            >
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-brand-dim hover:text-brand-alabaster transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 rounded-full bg-brand-electric/10 flex items-center justify-center text-brand-electric mb-6">
                        <Lock size={32} />
                    </div>
                    <h2 className="text-2xl font-display text-brand-alabaster tracking-widest text-center">RESTRICTED GATEWAY</h2>
                    <p className="text-brand-silver text-sm mt-2 text-center font-sans">Enter your passkey to access the hidden vault.</p>
                </div>

                <form onSubmit={handleSubmit} className="relative group">
                    <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="ENTER KEYWORD"
                    className="block w-full px-8 py-5 bg-white/5 border border-white/10 rounded-xl text-center text-brand-alabaster placeholder-brand-dim focus:outline-none focus:ring-1 focus:ring-brand-electric focus:border-brand-electric transition-all duration-300 font-serif tracking-[0.3em] uppercase text-lg"
                    autoFocus
                    />
                    <button
                    type="submit"
                    className="absolute inset-y-2 right-2 px-4 rounded-lg bg-brand-electric hover:bg-brand-brilliant text-white transition-colors duration-300 flex items-center justify-center opacity-0 group-focus-within:opacity-100"
                    >
                    <ArrowRight className="h-5 w-5" />
                    </button>
                </form>

                <AnimatePresence>
                    {message && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`mt-6 text-center font-sans text-xs tracking-[0.2em] font-medium border py-2 rounded-lg ${isError ? 'border-red-500/20 bg-red-500/10 text-red-400' : 'border-green-500/20 bg-green-500/10 text-green-400'}`}
                    >
                        {message}
                    </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};