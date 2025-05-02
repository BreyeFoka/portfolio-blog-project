
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-300 dark:bg-zinc-900 text-gray-900 dark:text-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 w-full ${className}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
