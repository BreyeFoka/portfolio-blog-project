// // components/Card.tsx
// import { ReactNode } from 'react';

// interface CardProps {
//   title: string;
//   children: ReactNode;
// }

// export default function Card({ title, children }: CardProps) {
//   return (
//     <div className="bg-white dark:bg-zinc-700 rounded-2xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-md">
//       <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
//         {title}
//       </h2>
//       {children}
//     </div>
//   );
// }

// components/Card.tsx
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl shadow-lg p-6 flex flex-col gap-4 w-full ${className}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
