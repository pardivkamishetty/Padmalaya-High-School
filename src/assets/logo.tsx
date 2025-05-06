import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" fill="#1e3a8a" />
      <circle cx="50" cy="50" r="40" fill="#fbbf24" stroke="#1e3a8a" strokeWidth="2" />
      <path 
        d="M50 20C35 20 25 35 25 50C25 65 35 80 50 80C65 80 75 65 75 50C75 35 65 20 50 20ZM50 75C37.5 75 30 65 30 50C30 35 37.5 25 50 25C62.5 25 70 35 70 50C70 65 62.5 75 50 75Z" 
        fill="#1e3a8a" 
      />
      <path 
        d="M50 30C40 30 35 40 35 50C35 60 40 70 50 70C60 70 65 60 65 50C65 40 60 30 50 30Z" 
        fill="#fbbf24" 
      />
      <path 
        d="M55 45C55 47.5 52.5 50 50 50C47.5 50 45 47.5 45 45C45 42.5 47.5 40 50 40C52.5 40 55 42.5 55 45Z" 
        fill="#1e3a8a" 
      />
      <path 
        d="M60 65L50 70L40 65L35 55V45L40 35L50 30L60 35L65 45V55L60 65Z" 
        fill="none" 
        stroke="#1e3a8a" 
        strokeWidth="1" 
      />
    </svg>
  );
};

export default Logo;