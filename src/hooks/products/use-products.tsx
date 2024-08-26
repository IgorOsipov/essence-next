import { Product, ProductsApi } from '@/app/products/[page]/types';

export async function useProducts(page: string): Promise<{ products: Product[]; totalPages: number }> {
  const limit = 12;
  const currentPage = parseInt(page);
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit * (currentPage - 1)}`);
  const { products, total } = (await response.json()) as ProductsApi;

  return { products, totalPages: Math.ceil(total / limit) };
}
