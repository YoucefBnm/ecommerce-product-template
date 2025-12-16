import { cn } from '@/lib/utils';
import React from 'react';
import { useProductContext } from '@/context/product';
import type { Product, ProductColor } from '@/types/product';

export interface ProductSizesProps extends React.ComponentProps<'div'> {
  allSizes: Product['sizes'];
  activeItemSizes: ProductColor['sizes'];
}

export function ProductSizes({
  allSizes,
  activeItemSizes,
  className,
  ...props
}: ProductSizesProps) {
  const { selectedSize, setSelectedSize } = useProductContext();
  const availableSizes = allSizes.map((size) => ({
    value: size,
    status: activeItemSizes.includes(size) ? 'active' : 'disabled',
  }));

  return (
    <div
      className={cn('flex gap-2  flex-wrap', className)}
      id="product-item-sizes"
      {...props}
    >
      {availableSizes.map((item) => (
        <button
          key={item.value}
          role="button"
          disabled={item.status === 'disabled'}
          aria-label={`Select size ${item.value}${item.status === 'disabled' ? ' (not available)' : ''}`}
          className={cn(
            ' min-w-24 flex-[1_1_0] px-4 py-2 rounded text-sm font-medium transition-colors',
            'bg-muted  relative hover:ring',
            item.value === selectedSize && item.status !== 'disabled'
              ? 'text-foreground border-foreground ring'
              : 'text-muted-foreground',
            item.status === 'disabled'
              ? 'opacity-50 cursor-not-allowed line-through'
              : 'hover:border-foreground cursor-pointer',
          )}
          title={`${item.status === 'disabled' ? 'not available' : 'available'} size ${item.value}`}
          onClick={() => {
            if (item.status === 'active') {
              setSelectedSize(item.value);
            }
          }}
        >
          <span>{item.value}</span>
        </button>
      ))}
    </div>
  );
}
