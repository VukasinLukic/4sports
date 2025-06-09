
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
          animation: rotationKeyFrames 3s linear infinite, translationKeyFrames 3s linear infinite;
        }

        /* Keyframes for rotation */
        @keyframes rotationKeyFrames {
          0% {
            --r2: 0deg;
          }
          25% {
            --r2: 0deg;
          }
          50% {
            --r2: 180deg;
          }
          75% {
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
          25% {
            --x: 200px;
          }
          50% {
            --x: 200px;
          }
          75% {
            --x: 20px;
          }
          100% {
            --x: 20px;
          }
        }

        .animated-btn-primary {
          background: conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 15px, transparent 0, #22c55e 20%, transparent 25%), 
                      linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 2px solid #22c55e;
          box-shadow: 
            0 0 20px rgba(34, 197, 94, 0.3),
            inset 0 1px 0 rgba(34, 197, 94, 0.2);
        }

        .animated-btn-primary:hover {
          border-color: #16a34a;
          box-shadow: 
            0 0 30px rgba(34, 197, 94, 0.5),
            0 0 60px rgba(34, 197, 94, 0.2),
            inset 0 1px 0 rgba(34, 197, 94, 0.3);
          transform: translateY(-2px);
        }

        .animated-btn-secondary {
          background: conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 15px, transparent 0, rgba(255,255,255,0.3) 20%, transparent 25%), 
                      linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 0 20px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .animated-btn-secondary:hover {
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 
            0 0 30px rgba(255, 255, 255, 0.2),
            0 0 60px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
      `}
      </style>
      <button
        className={`rotation-animation ${isPrimary ? 'animated-btn-primary' : 'animated-btn-secondary'} 
                   transform-gpu cursor-pointer rounded-2xl p-1 transition-all duration-300 
                   hover:scale-[1.02] active:scale-[0.98] ${className}`}
        type={type}
        onClick={onClick}
      >
        <span className={`pointer-events-none flex h-12 flex-nowrap items-center gap-3 rounded-xl px-8 py-4 
                         font-bold text-lg tracking-tight backdrop-blur-sm
                         ${isPrimary 
                           ? 'bg-black/80 text-primary' 
                           : 'bg-black/80 text-white'
                         }`}>
          <span>{children}</span>
        </span>
      </button>
    </>
  );
}
