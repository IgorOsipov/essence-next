import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function PaginationComponent({ totalPages, page }: { totalPages: number; page: number }) {
  return totalPages > 1 ? (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/products/${page - 1}`} />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationItem key={i}>
            <PaginationLink isActive={page === i + 1} href={`/products/${i + 1}`}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {page < totalPages && (
          <PaginationItem>
            <PaginationNext href={`/products/${page + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  ) : null;
}
