import ProductCard from '@/components/shared/products/product-card';
import { useProducts } from '@/hooks/products/use-products';
import Pagination from '@/components/shared/nav/pagination';

export default async function Products({
  params,
}: {
  params: { page: string };
}) {
  const { products, totalPages } = await useProducts(params.page);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="my-4">
        <Pagination totalPages={totalPages} page={parseInt(params.page)} />
      </div>
    </>
  );
}
