import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/app/products/[page]/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
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
      <CardFooter>
        <Link className="w-full" href={`/products/product/${product.id}`}>
          <Button className="w-full">Open</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
