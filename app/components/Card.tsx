
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <motion.div 
      className={`relative overflow-hidden rounded-xl bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md border border-white/10 dark:border-zinc-700/10 shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4 w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {title && (
        <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">{title}</h2>
      )}
      {children}
    </motion.div>
  );
}
