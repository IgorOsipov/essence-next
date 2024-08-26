import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Product } from '@/app/products/[page]/types';
import { cn } from '@/lib/utils';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="w-full" href={`/products/product/${product.id}`}>
      <Card className="h-full border-primary hover:drop-shadow-2xl">
        <CardHeader>
          <CardTitle className="text-primary">
            {product.title}
            <p className="text-neutral-400 text-xl">
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
            </p>
          </CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            src={product.thumbnail}
            width="400"
            height="400"
            alt={product.title}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
