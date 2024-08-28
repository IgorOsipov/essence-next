'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Product } from '@/app/products/[page]/types';
import ImageWithSpinner from '@/components/ui/image-with-spinner';

type Props = {
  images: Product['images'];
  alt: string;
};

const ProductCarousel: React.FC<Props> = ({ images, alt }) => {
  return (
    <Carousel
      className={cn('w-[600px] h-[600px]', images.length > 1 && 'mx-12')}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image}>
            <ImageWithSpinner src={image} alt={alt} width={600} height={600} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && <CarouselPrevious />}
      {images.length > 1 && <CarouselNext />}
    </Carousel>
  );
};

export default ProductCarousel;
