import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-rose-300">
        {/* Abstract Rose/Apple Hybrid Shape */}
        <path d="M50 20C50 20 70 5 85 20C100 35 90 60 50 90C10 60 0 35 15 20C30 5 50 20 50 20Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M50 20C50 20 55 35 70 40" stroke="currentColor" strokeWidth="1" />
        <path d="M50 20C50 20 45 35 30 40" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="55" r="10" stroke="currentColor" strokeWidth="1" className="opacity-50" />
      </svg>
    </div>
  );
};