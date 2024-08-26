import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function PaginationComponent({
  totalPages,
  page,
}: {
  totalPages: number;
  page: number;
}) {
  const showedPagesCount = 5; //The number here should be only odd and not less than 3.
  const showedPages = Array.from(
    { length: showedPagesCount },
    (_, i) => page - Math.ceil(showedPagesCount / 2) + (i + 1)
  ).filter((p) => p >= 1 && p <= totalPages);

  return totalPages > 0 ? (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/products/${page - 1}`} />
          </PaginationItem>
        )}
        {page > Math.ceil(showedPagesCount / 2) && (
          <>
            <PaginationItem>
              <PaginationLink href="/products/1"> 1 </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {showedPages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink isActive={page === p} href={`/products/${p}`}>
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}
        {page <= totalPages - Math.ceil(showedPagesCount / 2) && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={`/products/${totalPages}`}>
                {' '}
                {totalPages}{' '}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {page < totalPages && (
          <PaginationItem>
            <PaginationNext href={`/products/${page + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  ) : null;
}
