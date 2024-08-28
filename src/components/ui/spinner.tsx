import React from 'react';
import clsx from 'clsx';
import { cn } from '@/lib/utils';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md' }) => {
  const sizeClasses = clsx({
    'w-6 h-6': size === 'sm',
    'w-10 h-10': size === 'md',
    'w-16 h-16': size === 'lg',
  });

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div
        className={cn(
          sizeClasses,
          'border-4 border-gray-200 border-t-primary rounded-full animate-spin'
        )}
      />
    </div>
  );
};

export default Spinner;
