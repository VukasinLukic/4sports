
import React from 'react';

interface AnimatedStatProps {
  value: string;
  label: string;
  className?: string;
}

export default function AnimatedStat({ value, label, className = '' }: AnimatedStatProps) {
  return (
    <>
      <style>
        {`
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

        .stat-animation {
          animation: statRotationKeyFrames 3s linear infinite, statTranslationKeyFrames 3s linear infinite;
        }

        @keyframes statRotationKeyFrames {
          0% { --r2: 0deg; }
          25% { --r2: 0deg; }
          50% { --r2: 180deg; }
          75% { --r2: 180deg; }
          100% { --r2: 360deg; }
        }

        @keyframes statTranslationKeyFrames {
          0% { --x: 20px; }
          25% { --x: 120px; }
          50% { --x: 120px; }
          75% { --x: 20px; }
          100% { --x: 20px; }
        }

        .animated-stat-card {
          background: conic-gradient(from calc(var(--r2) - 80deg) at var(--x) 15px, transparent 0, #22c55e 20%, transparent 25%), 
                      linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 1px solid rgba(34, 197, 94, 0.3);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.8),
            0 0 20px rgba(34, 197, 94, 0.2),
            inset 0 1px 0 rgba(34, 197, 94, 0.1);
        }

        .animated-stat-card:hover {
          border-color: rgba(34, 197, 94, 0.5);
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.9),
            0 0 30px rgba(34, 197, 94, 0.3),
            inset 0 1px 0 rgba(34, 197, 94, 0.2);
          transform: translateY(-8px);
        }
        `}
      </style>
      <div className={`stat-animation animated-stat-card text-center p-8 rounded-3xl transition-all duration-500 ${className}`}>
        <div className="text-4xl lg:text-5xl font-black text-gradient mb-3">{value}</div>
        <div className="text-sm text-gray-400 font-medium">{label}</div>
      </div>
    </>
  );
}
