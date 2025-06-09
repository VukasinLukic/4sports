
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
        @property --gradient-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .stat-card-animation {
          animation: statGradientRotation 4s linear infinite;
        }

        @keyframes statGradientRotation {
          0% { --gradient-angle: 0deg; }
          100% { --gradient-angle: 360deg; }
        }

        .animated-stat-card {
          background: 
            conic-gradient(from var(--gradient-angle), 
              transparent 0deg,
              rgba(34, 197, 94, 0.6) 60deg,
              rgba(34, 197, 94, 0.8) 120deg,
              transparent 180deg,
              rgba(34, 197, 94, 0.3) 240deg,
              transparent 360deg
            ),
            linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 1px solid rgba(34, 197, 94, 0.4);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.8),
            0 0 20px rgba(34, 197, 94, 0.3),
            inset 0 1px 0 rgba(34, 197, 94, 0.2);
        }

        .animated-stat-card:hover {
          border-color: rgba(34, 197, 94, 0.6);
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.9),
            0 0 40px rgba(34, 197, 94, 0.4),
            inset 0 1px 0 rgba(34, 197, 94, 0.3);
          transform: translateY(-8px);
        }
        `}
      </style>
      <div className={`stat-card-animation animated-stat-card text-center p-8 rounded-3xl transition-all duration-500 ${className}`}>
        <div className="text-4xl lg:text-5xl font-black text-gradient mb-3">{value}</div>
        <div className="text-sm text-gray-400 font-medium">{label}</div>
      </div>
    </>
  );
}
