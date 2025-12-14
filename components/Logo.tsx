import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg filter">
        <defs>
          <linearGradient id="appleGradient" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF299C" /> {/* Brilliant Rose */}
            <stop offset="1" stopColor="#EF27A6" /> {/* Electric Rose */}
          </linearGradient>
          <radialGradient id="roseGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(40)">
            <stop stopColor="#FF299C" stopOpacity="0.8" />
            <stop offset="1" stopColor="#EF27A6" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Glow behind */}
        <circle cx="50" cy="55" r="35" fill="url(#roseGlow)" className="animate-pulse" />

        {/* Apple Shape Container */}
        <path d="M50 88C25 88 10 65 10 45C10 25 25 15 40 22C45 24 50 30 50 30C50 30 55 24 60 22C75 15 90 25 90 45C90 65 75 88 50 88Z" 
          stroke="url(#appleGradient)" strokeWidth="2" fill="rgba(239, 39, 166, 0.1)" />
        
        {/* Leaf */}
        <path d="M50 30C50 30 52 10 70 5C70 5 65 25 50 30Z" fill="#B0B5B3" fillOpacity="0.8" stroke="#DBDBDB" strokeWidth="0.5" />
        <path d="M50 30L60 15" stroke="#DBDBDB" strokeWidth="0.5" />

        {/* Rose Petals Inside */}
        <g transform="translate(50 55) scale(0.8)">
            <path d="M0 0 C-10 -10 -20 5 -10 15 C0 25 10 20 15 10 C20 0 5 -10 0 0" stroke="#FF299C" strokeWidth="1" fill="none" />
            <path d="M-5 -5 C-15 -15 -25 10 -10 20 C5 30 20 20 20 5 C20 -10 0 -15 -5 -5" stroke="#EF27A6" strokeWidth="1" fill="none" className="opacity-80" transform="rotate(45)" />
            <path d="M0 0 C-20 -20 -30 10 -10 25 C10 35 30 20 25 -5 C20 -25 0 -20 0 0" stroke="#DBDBDB" strokeWidth="1.5" fill="none" className="opacity-60" transform="rotate(90)" />
            
            {/* Core */}
            <circle cx="0" cy="0" r="3" fill="#fff" />
        </g>
        
        {/* Sparkles */}
        <circle cx="25" cy="35" r="1" fill="white" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="75" cy="45" r="1" fill="white" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
      </svg>
    </div>
  );
};