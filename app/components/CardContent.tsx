// components/CardContent.tsx
import { ReactNode } from 'react';

interface CardContentProps {
  description: string;
  children: ReactNode;
}

export default function CardContent({ description, children }: CardContentProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-zinc-900 dark:text-gray-900 text-sm ">{description}</p>
      <div className="flex flex-wrap gap-3 ">
        {children}
      </div>
    </div>
  );
}