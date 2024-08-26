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

export default async function Product({ params }: { params: { id: string } }) {
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
        <Carousel className="mx-12 w-1/2">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={1000}
                height={1000}
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={1000}
                height={1000}
              ></Image>
            </CarouselItem>
            <CarouselItem>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={1000}
                height={1000}
              ></Image>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
}
