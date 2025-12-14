import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

export const SpecialAccess: React.FC = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    // Placeholder logic for keyword checking
    if (code.toLowerCase() === 'admin' || code.toLowerCase() === 'secret') {
        // Future redirection logic
        setMessage("Redirecting...");
        setIsError(false);
    } else {
        setMessage("Nothing for you.");
        setIsError(true);
        setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="relative z-20 mt-12 w-full max-w-md mx-auto">
      <motion.form 
        onSubmit={handleSubmit}
        className="relative group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className="h-5 w-5 text-rose-300/50" />
        </div>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Access Key"
          className="block w-full pl-10 pr-12 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-rose-50 placeholder-rose-200/30 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-transparent transition-all duration-300 font-serif tracking-widest text-center"
        />
        <button
          type="submit"
          className="absolute inset-y-1 right-1 px-4 rounded-full bg-rose-600 hover:bg-rose-500 text-white transition-colors duration-300 flex items-center justify-center group-focus-within:bg-rose-500"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </motion.form>

      <AnimatePresence>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-4 text-center font-sans text-sm tracking-widest ${isError ? 'text-red-400' : 'text-green-400'}`}
          >
            [{message}]
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};