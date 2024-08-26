import { Product } from '@/app/products/[page]/types';

export async function useProduct(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return (await response.json()) as Product;
}
