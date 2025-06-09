
import React from 'react';
import CountUp from './count-up';

interface AnimatedStatProps {
  value: string;
  label: string;
  className?: string;
}

export default function AnimatedStat({ value, label, className = '' }: AnimatedStatProps) {
  // Extract numeric value from string like "500+" or "10k+"
  const numericValue = value.replace(/[^0-9]/g, '');
  const suffix = value.replace(/[0-9]/g, '');
  const multiplier = suffix.includes('k') ? 1000 : 1;
  const finalNumber = parseInt(numericValue) * multiplier;

  return (
    <>
      <style>
        {`
        .stat-card {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
          border: 1px solid rgba(34, 197, 94, 0.3);
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.6),
            0 0 15px rgba(34, 197, 94, 0.2);
        }

        .stat-card:hover {
          border-color: rgba(34, 197, 94, 0.5);
          box-shadow: 
            0 8px 30px rgba(0, 0, 0, 0.8),
            0 0 25px rgba(34, 197, 94, 0.3);
          transform: translateY(-4px);
        }
        `}
      </style>
      <div className={`stat-card text-center p-8 rounded-3xl transition-all duration-300 ${className}`}>
        <div className="text-4xl lg:text-5xl font-black text-gradient mb-3 relative z-10">
          <CountUp
            from={0}
            to={finalNumber}
            duration={2}
            className="count-up-text"
          />
          {suffix}
        </div>
        <div className="text-sm text-gray-400 font-medium relative z-10">{label}</div>
      </div>
    </>
  );
}
