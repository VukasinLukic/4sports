
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
          animation: rotationKeyFrames 2s linear 0.5s infinite, translationKeyFrames 2s linear 0.5s infinite;
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
            --x: 160px;
          }
          50% {
            --x: 160px;
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
        className={`rotation-animation transform-gpu cursor-pointer rounded-2xl p-px shadow-[0_0_20px_0_rgba(34,197,94,0.1)] transition-all hover:shadow-[0_0_30px_5px_rgba(34,197,94,0.3)] ${className}`}
        style={{
          background: isPrimary 
            ? "conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 15px, transparent 0, #22c55e 20%, transparent 25%), #000000"
            : "conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 15px, transparent 0, rgba(255,255,255,0.5) 20%, transparent 25%), #000000",
        }}
        type={type}
        onClick={onClick}
      >
        <span className={`pointer-events-none flex h-12 flex-nowrap items-center gap-3 rounded-2xl px-8 py-4 font-bold text-lg tracking-tight ${
          isPrimary 
            ? 'bg-black text-primary' 
            : 'bg-black text-white'
        }`}>
          <span>{children}</span>
        </span>
      </button>
    </>
  );
}
