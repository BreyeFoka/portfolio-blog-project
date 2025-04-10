'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

type DotGridProps = {
  position?: 'left' | 'right';
  rows?: number;
  cols?: number;
};

export default function DotGrid({ position = 'left', rows = 12, cols = 8 }: DotGridProps) {
  const [wavePhase, setWavePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWavePhase(prev => prev + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={clsx(
        'absolute pointer-events-none z-0 hidden md:block h-[300px] top-0',
        position === 'left' ? 'left-8 top-32' : 'right-8 bottom-32'
      )}
    >
      <div className="relative w-24 h-full flex items-center justify-center">
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: rows * cols }).map((_, i) => {
            const row = Math.floor(i / cols);
            const col = i % cols;
            const offset = Math.sin((row + col) * 0.5 + wavePhase) * 2;

            return (
              <motion.span
                key={i}
                className="w-[6px] h-[6px] rounded-full bg-zinc-400 dark:bg-zinc-600"
                animate={{ y: offset }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
