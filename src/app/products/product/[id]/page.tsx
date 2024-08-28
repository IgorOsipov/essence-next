import Link from 'next/link';
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useProduct } from '@/hooks/products/use-product';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import React from 'react';
import ProductCarousel from '@/components/shared/products/product-carousel';

const Product: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const product = await useProduct(params.id);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/products/1">Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-x-4">
        <ProductCarousel images={product.images} alt={product.title} />
        <div className="flex-grow">
          <h1 className="font-bold text-xl">{product.title}</h1>
          <h2 className="font-bold text-xl">
            <span
              className={cn(product.discountPercentage > 0 && 'line-through')}
            >
              ${product.price}
            </span>
            {product.discountPercentage > 0 && (
              <span className="ml-2 text-destructive">
                $
                {(
                  product.price -
                  product.price * (product.discountPercentage / 100)
                ).toFixed(2)}
              </span>
            )}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Product;
