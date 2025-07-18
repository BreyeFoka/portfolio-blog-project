// components/CardContent.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardContentProps {
  description?: string;
  className?: string;
  children: ReactNode;
}

export default function CardContent({ description, children, className = '' }: CardContentProps) {
  return (
    <motion.div 
      className={`flex flex-col gap-3 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {description && (
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
      )}
      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </motion.div>
  );
}