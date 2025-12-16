'use client';
import { ProductProvider } from '@/context/product';
import { ProductContainer } from '@/components/product-container';

export default function Home() {
  return (
    <ProductProvider>
      <ProductContainer />
    </ProductProvider>
  );
}
