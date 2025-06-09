
import React from 'react';

interface AnimatedButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function AnimatedButton({ 
  variant = 'primary', 
  children, 
  className = '', 
  onClick, 
  type = 'button' 
}: AnimatedButtonProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <>
      <style>
        {`
        /* Define custom properties with @property */
        @property --r2 {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        @property --x {
          syntax: "<length>";
          inherits: false;
          initial-value: 20px;
        }

        /* Animated button styles */
        .rotation-animation {
          animation: rotationKeyFrames -.64s linear 3s infinite, translationKeyFrames -.64s linear 3s infinite;
        }

        /* Keyframes for rotation */
        @keyframes rotationKeyFrames {
          0% {
            --r2: 0deg;
          }
          32.8228% {
            --r2: 0deg;
          }
          50% {
            --r2: 180deg;
          }
          82.8228% {
            --r2: 180deg;
          }
          100% {
            --r2: 360deg;
          }
        }

        /* Keyframes for x movement */
        @keyframes translationKeyFrames {
          0% {
            --x: 20px;
          }
          32.8228% {
            --x: 180px;
          }
          50% {
            --x: 180px;
          }
          82.8228% {
            --x: 20px;
          }
          100% {
            --x: 20px;
          }
        }
      `}
      </style>
      <button
        className={`rotation-animation transform-gpu cursor-pointer rounded-2xl p-px border border-green-500/50 shadow-[0_0_20px_0_rgba(34,197,94,0.1)] transition-all hover:shadow-[0_0_30px_5px_rgba(34,197,94,0.3)] hover:border-green-400 ${className}`}
        style={{
          background: isPrimary 
            ? "conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 15px, transparent 0, #22c55e 20%, transparent 25%), transparent"
            : "conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 15px, transparent 0, rgba(255,255,255,0.5) 20%, transparent 25%), transparent",
        }}
        type={type}
        onClick={onClick}
      >
        <span className={`pointer-events-none flex h-12 flex-nowrap items-center gap-3 rounded-2xl px-8 py-4 font-bold text-lg tracking-tight bg-transparent ${
          isPrimary 
            ? 'text-primary' 
            : 'text-white'
        }`}>
          <span>{children}</span>
        </span>
      </button>
    </>
  );
}
