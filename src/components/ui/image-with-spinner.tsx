'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Spinner from '@/components/ui/spinner';

const ImageWithSpinner: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={`relative w-[${width}px] h-[${height}px]`}>
      {loading && <Spinner size="lg" />}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={handleImageLoad}
        className={cn(
          'transition-opacity duration-500',
          loading ? 'opacity-0' : 'opacity-100'
        )}
      />
    </div>
  );
};

export default ImageWithSpinner;
